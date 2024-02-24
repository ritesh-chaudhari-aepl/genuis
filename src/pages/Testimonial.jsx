/* eslint-disable react/no-unescaped-entities */
import gDot from "../../assets/gDot.webp";
import gCurve from "../../assets/gCurve.webp";
import Dheeraj from "../../assets/Dheeraj.webp";
import sania from "../../assets/sania.webp";
import alice from "../../assets/alice.webp";
import jon from "../../assets/jon.webp";
import vidya from "../../assets/vidya.webp";
import { TiStarFullOutline } from "react-icons/ti";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    title: "Exceptional AI Services!",
    review:
      "Implementing the AI software from Genius Tutors transformed our business operations. It significantly enhanced productivity and accuracy, allowing us to streamline tasks efficiently.",
    country: "India",
    ratings: 4.0,
    name: "Dheeraj Reddy",
    imageId: Dheeraj,
  },
  {
    id: 2,
    title: "Impressive Collaboration!",
    review:
      "We are really looking forward to working with Genius Tutors again. The AI software they implemented improved our productivity and accuracy, streamlining our operations effectively.",
    country: "USA",
    ratings: 4.0,
    name: "Sania Nicholas",
    imageId: sania,
  },
  {
    id: 3,
    title: "Top-Notch Services!",
    review:
      "Genius Tutors is the best! The AI software revolutionized our business, improving productivity and accuracy. We can now focus on crucial tasks, thanks to their exceptional services.",
    country: "Canada",
    ratings: 4.0,
    name: "Alice Ted",
    imageId: alice,
  },
  {
    id: 4,
    title: "Collaboration Excellence!",
    review:
      "We are really looking forward to working with Genius Tutors again. Their AI software significantly improved our productivity and accuracy, allowing us to streamline operations effectively.",
    country: "India",
    ratings: 4.0,
    name: "Vidya Yadav",
    imageId: vidya,
  },

  {
    id: 5,
    title: "Highly Satisfied!",
    review:
      "Really satisfied with the service provided by Genius Tutors. The implemented AI software significantly improved productivity and accuracy, allowing us to streamline operations effectively.",
    country: "USA",
    ratings: 4.0,
    name: "Jon Doe",
    imageId: jon,
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getSlideBasedOnImageId = (imageId) => {
    const index = testimonialsData.findIndex(
      (item) => item.imageId === imageId
    );
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonial"
      className="bg-white"
      aria-label="testimonial-section"
    >
      <div className="mx-auto max-w-screen-lg px-8 py-16 sm:px-16">
        <div className="mb-10">
          <p className="text-center mb-4 font-Inter text-[#293452] font-bold text-4xl md:leading-[60px] md:text-[49px] capitalize">
            what our students say
          </p>
          <p className="text-center font-Inter text-[#293452] font-medium text-sm md:leading-[27px] md:text-base mb:6 lg:mb-12">
            Our tutors are experts from various domains, they have all
            experience to handle your queries
            <br /> with ease. Get the best solutions on your personal phone now.
          </p>
        </div>
        <div className="flex flex-row overflow-x-hidden h-full">
          {testimonialsData.map((t, index) => (
            <blockquote
              key={index}
              className="relative flex flex-row"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease",
                minWidth: "100%",
              }}
            >
              <svg
                className="absolute top-0 left-0 transform translate-x-0 -translate-y-3 h-20 w-20 text-gray-100 dark:text-gray-700"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="#451FB3"
                />
              </svg>

              <div>
                <div className="ml-6 mt-10">
                  <img
                    src={gDot}
                    className=""
                    width="auto"
                    height="auto"
                    alt="gdot"
                  />
                </div>

                <footer className="">
                  <div className="flex flex-row">
                    <div className="flex-shrink-0 mb-8 sm:mb-0">
                      <div className="relative mt-1">
                        <img
                          className=" h-20 w-20 xl:h-48 xl:w-48 rounded-full"
                          src={t.imageId}
                          alt={t.title}
                          title={t.title}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className=" left-6 bottom-28 md:bottom-16 lg:bottom-8 absolute xl:bottom-0 xl:left-16">
                        <img
                          src={gCurve}
                          alt="g curve"
                          className="h-2 xl:h-3"
                          width="auto"
                          height="auto"
                        />
                        <img
                          src={gCurve}
                          alt="g curve"
                          className="h-2 xl:h-3"
                          width="auto"
                          height="auto"
                        />
                        <img
                          src={gCurve}
                          alt="g curve"
                          className="h-2 xl:h-3"
                          width="auto"
                          height="auto"
                        />
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col gap-3">
                      <div>
                        <div className="flex justify-between mb-3">
                          <h3 className="font-bold font-Inter text-[#293452] text-base sm:text-2xl">
                            {t.title}
                          </h3>
                          <div className="flex flex-row items-center gap-1">
                            <TiStarFullOutline color="#FFC529" size={12} />
                            <TiStarFullOutline color="#FFC529" size={12} />
                            <TiStarFullOutline color="#FFC529" size={12} />
                            <TiStarFullOutline color="#FFC529" size={12} />
                            <TiStarFullOutline color="#988787" size={12} />

                            <span className="font-medium text-[#293452] font-Inter ml-1">
                              {t.ratings}
                            </span>
                          </div>
                        </div>
                        <p className="mb-3 font-QuickSand font-medium text-[#293452] text-sm sm:text-base">
                          {t.review}
                        </p>
                      </div>
                      <div className="text-base font-semibold text-[#293452] dark:text-gray-400">
                        <span>{t.name}</span> <br />
                        <span className="font-Inter font-light text-[11px] sm:text-sm">
                          {t.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
          <div />
          <div className="md:-ml-48 flex gap-4">
            <div
              onClick={handlePrev}
              className="bg-white border border-violet-300 hover:border-violet-300/70 rounded-full flex items-center justify-center  w-6 h-6 cursor-pointer"
            >
              <BiChevronLeft />
            </div>
            <div
              onClick={handleNext}
              className="bg-violet-dark hover:bg-violet-dark/80  rounded-full flex items-center justify-center w-6 h-6 cursor-pointer"
            >
              <BiChevronRight color="white" size={20} />
            </div>
          </div>
          <div>
            <div className="md:flex hidden flex-col sm:flex-row">
              <div className="flex -space-x-4">
                {testimonialsData.map((i) => (
                  <img
                    key={i.imageId}
                    className="w-14 h-14 rounded-full dark:border-gray-800 scale-1 hover:scale-125 transition-all ease-in-out cursor-pointer"
                    src={i.imageId}
                    alt={i.title}
                    width="100%"
                    height="100%"
                    onClick={() => getSlideBasedOnImageId(i.imageId)}
                  />
                ))}
                {/* <a
                  className="flex items-center bg-violet-dark justify-center w-14 h-14 text-xs font-bold font-QuickSand  text-white border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  // href="/review"
                >
                  10k+
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
