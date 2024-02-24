/* eslint-disable react-refresh/only-export-components */
import "./code.css";
import { useState, useEffect } from "react";
import sanityClient from "../../src/utils/sanityClient";
import { format } from "date-fns";
import { LatestBlogCard } from "./LatestBlogCard";

export { Page };

// Custom Export
export const documentProps = {
  title: "Explore Our Blogs for Successful Learning | Genius Tutors",
  description:
    "Explore our Genius Tutors blog for insightful articles, expert tips, and inspiring stories on education. Stay informed and empowered with valuable resources .",
  canonical: "https://thegeniustutors.com/blogs",
  url: "https://thegeniustutors.com/blogs",
};

function Page() {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // Add state to store category-wise posts
  const [categoryPosts, setCategoryPosts] = useState([]);

  // console.log(posts);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
      title,
      slug,
      body,
      meta,
      publishedAt,
      "categories": categories[]->title,
      "name": author->name,
      mainImage {
        asset -> {
          _id,
          url
        },
      }
    } | order(publishedAt desc)`
      )
      .then((data) => {
        setPosts(data);
        // setLoading(false);
        const categoryWisePosts = {};
        data.forEach((post) => {
          post.categories.forEach((category) => {
            if (!categoryWisePosts[category]) {
              categoryWisePosts[category] = [];
            }
            categoryWisePosts[category].push(post);
          });
        });

        setCategoryPosts(categoryWisePosts);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl w-full px-6">
      <div className="py-10">
        <h1 className="text-6xl w-full justify-center flex  font-extrabold uppercase py-2 leading-[4.5rem]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-dark via-red-500 to-blue-darkBlue">
            Blogs & Articles
          </span>
        </h1>
        <div className="mx-auto max-w-screen-xl mt-6">
          <div className="pb-10">
            <div className="border-b-violet-main border-b-[1px] mb-6 max-w-screen-lg">
              <p className="bg-[#4e4e4e] font-Inter inline-block text-gray-700 font-normal text-base text-white py-1 px-2">
                Latest Posts
              </p>
            </div>
            <p>blogs {posts?.length}</p>
            {posts?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 lg:px-3">
                {posts?.length > 0 ? (
                  posts?.map((post, index) => (
                    <LatestBlogCard
                      key={index}
                      // metadescription={post.meta}
                      src={post?.mainImage?.asset?.url}
                      title={post?.title}
                      author={post?.name}
                      category={post?.categories}
                      date={format(new Date(post?.publishedAt), "dd/MM/yyyy")}
                      to={`/blogs/${post?.slug?.current}`}
                    />
                  ))
                ) : (
                  <p className="pt-28 w-full text-center">No Posts Found</p>
                )}
              </div>
            ) : (
              <p className="pt-28 w-full text-center">No Posts Found</p>
            )}
          </div>
        </div>
        {/* categories wise */}
        {/* Display category-wise posts */}
        {Object.keys(categoryPosts).map((category, index) => (
          <div key={index} className="mx-auto max-w-screen-xl mt-6">
            <div className="pb-10">
              <div className="border-b-violet-main border-b-[1px] mb-6 max-w-screen-lg">
                <p className="bg-[#4e4e4e] font-Inter inline-block text-gray-700 font-normal text-base text-white py-1 px-2">
                  {category}
                </p>
              </div>
              {/* Display posts for the current category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 lg:px-3">
                {categoryPosts[category]?.length > 0 ? (
                  categoryPosts[category].map((post, index) => (
                    <LatestBlogCard
                      key={index}
                      src={post.mainImage?.asset?.url}
                      title={post.title}
                      author={post.name}
                      category={post.categories}
                      date={format(new Date(post.publishedAt), "dd/MM/yyyy")}
                      to={`/blogs/${post.slug?.current}`}
                    />
                  ))
                ) : (
                  <p className="pt-28 w-full text-center">No Posts Found</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
