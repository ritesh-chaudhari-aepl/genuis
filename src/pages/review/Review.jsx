import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import girl1 from "../../assets/girl (1).webp";
import student from "../../assets/student.webp";
import { ReviewCard } from "./ReviewCard";
import man from "../../assets/man.webp";

import ServiceReview from "./ServiceReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
// import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import ReviewStars from "../../components/review/ReviewStars";
import SEO from "../../components/Seo";

const reviewData = [
  {
    img: girl1,
    name: "Benita71",
    rating: 4,
    data: "12/09/23",
    title: "Gorigiuos",
    msg: "it's very nice experience to work with you ",
    like: 12,
    dilike: 1,
  },
  {
    img: student,
    name: "Pratik Kumar",
    rating: 4.5,
    data: "12/09/23",
    title: "very nice",
    msg: "it's very nice experience to work with you I like it so much",
    like: 12,
    dilike: 1,
  },
  {
    img: girl1,
    name: "Benita7",
    rating: 4,
    data: "12/09/23",
    title: "Gorigiuos",
    msg: "it's very nice experience to work with you ",
    like: 12,
    dilike: 1,
  },
  {
    img: student,
    name: "Lara dew",
    rating: 4,
    data: "12/09/23",
    title: "Gorigiuos",
    msg: "it's very nice experience to work with you ",
    like: 12,
    dilike: 1,
  },
];
const Review = () => {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div>
      <SEO
        title="Insight Reviews and Testimonials | Genius Tutors"
        description="Discover real insights and testimonials from students and parents. Find out why we're a trusted online tutoring service committed to academic excellence."
      />
      <div className=" bg-gradient-to-tr from-[#a1c7f0] pb-10 md:pt-24 pt-8 ">
        <div className="grid  grid-flow-row sm:grid-cols-2 grid-cols-1 gap-4 px-4 mx-auto max-w-screen-xl">
          <div>
            <h1 className="font-semibold text-6xl">Ratings & Reviews</h1>
            <p className="font-medium text-lg pt-4">
              Hear it from the ones who have tried our <br></br> service.
            </p>
            <p className="flex flex-row">
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={50} />
              </span>
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={50} />
              </span>
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={50} />
              </span>
              <span className="pt-5">
                <AiFillStar color="#ED8A19" size={50} />
              </span>
              <span className="pt-5">
                <BiSolidStarHalf color="#ED8A19" size={50} />
              </span>
            </p>
            <p className="italic text-lg">4.5 average from 75834 ratings</p>
          </div>

          <div>
            <ReviewStars starno={5} percentno={75} />
            <ReviewStars starno={4} percentno={12} />
            <ReviewStars starno={3} percentno={7} />
            <ReviewStars starno={2} percentno={4} />
            <ReviewStars starno={1} percentno={2} />

            <div className="flex flex-row gap-6 sm:gap-9 lg:gap-12 pt-2 px-4">
              <img
                loading="eager"
                src={girl1}
                className="w-20 sm:w-20 lg:24 rounded-full p-2 shadow-inner shadow-red-600  "
                alt="girl"
                title="girl"
                width="100%"
                height="100%"
              />
              <img
                loading="eager"
                src={man}
                className=" w-20 sm:w-20 lg:24   rounded-full p-2 shadow-inner shadow-red-600 "
                alt="man"
                title="man"
                width="100%"
                height="100%"
              />
              <img
                loading="eager"
                src={student}
                className=" w-20 sm:w-20 lg:24  rounded-full p-2 shadow-inner shadow-red-600 "
                alt="student"
                title="student"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 mx-auto max-w-screen-xl">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
            <SwiperSlide>
              <ServiceReview />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="max-w-screen-xl p-3 mx-auto">
        <h3 className="font-bold text-4xl py-5">Entire Reviews</h3>
        {reviewData.map((values, index) => {
          // console.log(values);
          return <ReviewCard key={index} value={values} />;
        })}
        {/* pagination  */}
        <div className=" hidden sm:block mx-auto  py-5 items-center">
          <div className=" flex max-w-fit mx-auto gap-0 sm:gap-4">
            <Button
              aria-label="move-prev-btn"
              title="previous btn"
              variant="text"
              className="flex items-center gap-0 sm:gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex text-black items-center gap-0 sm:gap-2">
              <IconButton
                {...getItemProps(1)}
                className="flex justify-center items-center"
              >
                <i className="text-black not-italic text-sm">1</i>
              </IconButton>
              <IconButton
                {...getItemProps(2)}
                className="flex justify-center items-center"
              >
                <i className="text-black not-italic text-sm">2</i>
              </IconButton>
              <IconButton
                {...getItemProps(3)}
                className="flex justify-center items-center"
              >
                <i className="text-black not-italic text-sm">3</i>
              </IconButton>
              <IconButton
                {...getItemProps(4)}
                className="flex justify-center items-center"
              >
                <i className="text-black not-italic text-sm">4</i>
              </IconButton>
              <IconButton
                {...getItemProps(5)}
                className="flex justify-center items-center"
              >
                <i className="text-black not-italic text-sm">5</i>
              </IconButton>
            </div>
            <Button
              aria-label="move-next-btn"
              title="next btn"
              variant="text"
              className="flex items-center gap-0 sm:gap-2"
              onClick={next}
              disabled={active === 5}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* pagination end */}
      </div>
      {/* now its your turn */}
      <div className="mx-auto text-center pb-7 bg-[#cfddeb]">
        <h2 className="font-bold text-[#6d6d6d] text-4xl px-2 py-4">
          It&apos;s your turn Now!
        </h2>
        <div>
          <p className="font-bold text-7xl bg-clip-text text-transparent  bg-gradient-to-r  from-[#0d0d7c] to-[red] py-5 italic -rotate-12">
            Get it <br></br>solved!
          </p>
        </div>
        <p className="text-base text-[#3f3f3f] py-6 font-medium">
          {" "}
          <strong>10,000+ satishfied</strong> student have<br></br> already
          boosted their <strong>Grades</strong> with us.
        </p>
        <button
          aria-label="submit-btn"
          title="Get Solution"
          className="hover:scale-105 cursor-pointer duration-300 active:text-red-800 active:from-primaryWhite font-semibold text-xl py-4 px-9 text-primaryWhite rounded-md bg-gradient-to-tr from-[#0d0d7c] to-[red]"
        >
          Get Solution
        </button>
      </div>
    </div>
  );
};

export default Review;
