import { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../src/utils/sanityClient";
import { format } from "date-fns";
import { usePageContext } from "../../renderer/usePageContext";

import "./code.css";
// import { BlogCard } from "./BlogCard";
import { ShortBlogCard } from "./ShortBlogCard";
// import { truncateString } from "../../utils/truncateString";

// const extractTextFromBlocks = (blocks) => {
//   if (!blocks || !Array.isArray(blocks)) {
//     return "";
//   }

//   // Extract text content from blocks
//   const textContent = blocks
//     .map((block) => block.children.map((child) => child.text).join(""))
//     .join(" ");

//   return textContent;
// };
export { Page };

// Custom Export
// export const documentProps = {
//   title: "",
//   description:
//     "Explore our Genius Tutors blog for insightful articles, expert tips, and inspiring stories on education. Stay informed and empowered with valuable resources .",
//   canonical: `https://thegeniustutors.com/blogs/${slug}`,
//   url: `https://thegeniustutors.com/blogs/${slug}`,
// };

function Page() {
  const [singlePost, setSinglePost] = useState(null);
  const [posts, setPosts] = useState([]); // Add this line
  const [loading, setLoading] = useState(true);
  // const { slug } = usePageContext();
  const pagecontext = usePageContext();
  const pathnameParts = pagecontext.urlPathname.split("/");
  const slug = pathnameParts[pathnameParts.length - 1];
  console.log(slug);

  useEffect(() => {
    const fetchSinglePost = sanityClient.fetch(
      `*[slug.current == "${slug}"] {
        title,
        slug,
        body,
        publishedAt,
        "categories": categories[]->title,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author->name,
      }`
    );

    const fetchPosts = sanityClient.fetch(
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
          alt,
        }
      } | order(publishedAt desc)`
    );

    Promise.all([fetchSinglePost, fetchPosts])
      .then(([singlePostData, postsData]) => {
        setSinglePost(singlePostData[0]);
        setPosts(postsData);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  // Update documentProps within the useEffect hook
  useEffect(() => {
    if (singlePost) {
      const canonical = `https://thegeniustutors.com/blogs/${slug}`;
      const url = `https://thegeniustutors.com/blogs/${slug}`;
      const documentProps = {
        title: singlePost.title,
        description:
          "Explore our Genius Tutors blog for insightful articles, expert tips, and inspiring stories on education. Stay informed and empowered with valuable resources .",
        canonical: { canonical },
        url: { url },
      };
      // Now you can use documentProps wherever needed
      console.log(documentProps);
    }
  }, [singlePost, slug]);

  // Define state to hold metadata
  // const [documentProps, setDocumentProps] = useState({
  //   title: "",
  //   description:
  //     "Explore our Genius Tutors blog for insightful articles, expert tips, and inspiring stories on education. Stay informed and empowered with valuable resources .",
  //   canonical: "",
  //   url: "",
  // });

  // useEffect(() => {
  //   if (singlePost) {
  //     const canonical = `https://thegeniustutors.com/blogs/${slug}`;
  //     const url = `https://thegeniustutors.com/blogs/${slug}`;
  //     const newDocumentProps = {
  //       title: singlePost.title,
  //       canonical: canonical,
  //       url: url,
  //     };
  //     setDocumentProps((prevProps) => ({
  //       ...prevProps,
  //       ...newDocumentProps,
  //     }));
  //   }
  // }, [singlePost, slug]);

  if (!singlePost)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  // const truncatedDescription = truncateString(singlePost?.body || "", 140);

  return (
    <div className="full-page flex flex-col lg:flex-row gap-4 px-8 max-w-screen-xl justify-center mx-auto">
      <div className="flex flex-col lg:col-span-3">
        {loading ? (
          <div className="flex justify-center h-screen">
            <div className=" loader " />
          </div>
        ) : (
          <article className="para">
            <div className="lg:py-10 max-w-6xl justify-center flex flex-col mx-auto">
              <h1 className="text-4xl md:text-justify font-bold font-Nunito pb-4">
                {singlePost?.title}
              </h1>
              <div className="pb-10">
                {singlePost?.mainImage && singlePost?.mainImage?.asset && (
                  <img
                    src={singlePost?.mainImage?.asset?.url}
                    alt={singlePost?.title}
                    title={singlePost?.title}
                    className="w-full md:h-[400px] xl:h-[500px] rounded"
                    width="100%"
                    height="100%"
                  />
                )}

                {singlePost?.publishedAt && (
                  <div className="flex justify-between w-full gap-4 py-5">
                    <p className="text-xs font-bold font-Nunito">
                      Author:{" "}
                      <span className="font-medium font-QuickSand">
                        {singlePost?.name}
                      </span>
                    </p>
                    <p className="text-xs font-bold font-Nunito">
                      Category:{" "}
                      <span className="font-medium font-QuickSand">
                        {singlePost?.categories}
                      </span>
                    </p>
                    <p className="text-xs font-bold font-Nunito">
                      Date:{" "}
                      <span className="font-medium font-QuickSand">
                        {format(
                          new Date(singlePost?.publishedAt),
                          "dd/MM/yyyy"
                        )}
                      </span>
                    </p>
                  </div>
                )}
                <div className="blockcontent-style">
                  <BlockContent
                    blocks={singlePost?.body}
                    projectId="l5o6s57n"
                    dataset="production"
                    // serializers={{
                    //   h2: (props) => (
                    //     <h2 className="text-2xl font-bold py-6" {...props} />
                    //   ),
                    //   h3: (props) => (
                    //     <h3
                    //       className="text-2xl font-bold py-6 text-red-400"
                    //       {...props}
                    //     />
                    //   ),
                    // }}
                  />
                </div>
              </div>
              <div className="flex w-full mb-6">
                <a
                  href="/blogs"
                  className="w-auto capitalize hover:no-underline bg-gradient-to-r cursor-pointer from-slate-900 to-slate-700 text-white px-12 py-4 rounded-full font-bold font-Nunito"
                >
                  Read more articles
                </a>
              </div>
            </div>
          </article>
        )}
      </div>
      <div className="flex sidebar lg:pt-4 lg:pb-10 lg:basis-2/5">
        <div className="lg:sticky lg:top-5">
          <div className="flex lg:sticky lg:top-5 gap-2 mt-10 lg:pb-10 flex-col border-[#a4a4a4] border-l-2 pl-4 ">
            <h3 className="text-2xl md:text-justify font-bold font-Nunito py-2 pl-4 bg-[#f07029] rounded-sm">
              Related Posts
            </h3>
            {/* {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                {posts.length > 0 ? (
                  posts.map((post, index) => (
                    <ShortBlogCard
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
            )} */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                {posts
                  .slice(0, Math.min(posts.length, 6))
                  .map((post, index) => (
                    <ShortBlogCard
                      key={index}
                      src={post?.mainImage?.asset?.url}
                      title={post?.title}
                      author={post?.name}
                      category={post?.categories}
                      date={format(new Date(post?.publishedAt), "dd/MM/yyyy")}
                      to={`/blogs/${post?.slug?.current}`}
                    />
                  ))}
              </div>
            ) : (
              <p className="pt-28 w-full text-center">No Posts Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
