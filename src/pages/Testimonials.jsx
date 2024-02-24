/* eslint-disable react/no-unescaped-entities */
import gDot from "../assets/gDot.webp";
import gCurve from "../assets/gCurve.webp";
import person from "../assets/person.webp";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";
import { TiStarFullOutline } from "react-icons/ti";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Testimonials = () => {
  return (
    <section aria-label="testimonial section">
      {/* static testimonial, not for currently use, but may be use in future, thats why code is here */}
      <div className="mb-16 mx-auto max-w-screen-lg px-8 py-16 sm:px-16 sm:py-24">
        <div className="mb-10">
          <p className="text-center mb-4 font-Inter font-bold text-4xl sm:leading-[60px] sm:text-[49px] capitalize">
            what are students say
          </p>
          <p className="text-center font-Inter font-medium text-sm sm:leading-[27px] sm:text-base mb-24">
            Our tutors are experts from various domains, they have all
            experience to handle your queries
            <br /> with ease. Get the best solutions on your personal phone now.
          </p>
        </div>
        <div>
          <blockquote className="relative flex flex-col sm:flex-row">
            <svg
              className="absolute top-0 left-0 transform -translate-x-6 -translate-y-16 h-20 w-20 text-gray-100 dark:text-gray-700"
              width="16"
              height="16"
              viewBox="0 0 16 16"
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
              <div className="mt-8">
                <img
                  loading="eager"
                  src={gDot}
                  className=""
                  width="auto"
                  height="auto"
                  alt="gdot"
                />
              </div>

              <footer className="">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 mb-8 sm:mb-0">
                    <div className="relative mt-1">
                      <img
                        loading="eager"
                        className=" h-20 w-20 sm:h-48 sm:w-48 rounded-full"
                        src={person}
                        alt="Image Description"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className=" left-6 bottom-38 absolute md:bottom-10 md:left-16">
                      <img
                        loading="eager"
                        src={gCurve}
                        alt="g curve"
                        className="h-2 sm:h-3"
                      />
                      <img
                        loading="eager"
                        src={gCurve}
                        alt="g curve"
                        className="h-2 sm:h-3"
                        width="100%"
                      />
                      <img
                        loading="eager"
                        src={gCurve}
                        alt="g curve"
                        className="h-2 sm:h-3"
                        height="100%"
                      />
                    </div>
                  </div>
                  <div className="ml-4 flex flex-col gap-3">
                    <div>
                      <div className="flex justify-between mb-3">
                        <h3 className="font-bold font-Inter text-base sm:text-2xl">
                          Great service!
                        </h3>
                        <div className="flex flex-row items-center gap-1">
                          <TiStarFullOutline color="#FFC529" size={12} />
                          <TiStarFullOutline color="#FFC529" size={12} />
                          <TiStarFullOutline color="#FFC529" size={12} />
                          <TiStarFullOutline color="#FFC529" size={12} />
                          <TiStarFullOutline color="#988787" size={12} />

                          <span className="font-medium font-Inter ml-1">
                            4.0
                          </span>
                        </div>
                      </div>
                      <p className="mb-3 font-QuickSand font-medium text-sm sm:text-base">
                        The ai software we implemented in our business has
                        significantly improved our productivity and accuracy. it
                        has
                        <br />
                        allowed us to streamline our operations and focus on
                        more important tasks.
                      </p>
                    </div>
                    <div className="text-base font-semibold text-gray-800 dark:text-gray-400">
                      <span>Jenny Hudson</span> <br />
                      <span className="font-Inter font-light text-[11px] sm:text-sm">
                        Product Manager Dell
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex gap-2">
                        <div className="bg-white border border-violet-300 rounded-full flex items-center justify-center  w-6 h-6">
                          <BiChevronLeft />
                        </div>
                        <div className="bg-violet-dark rounded-full flex items-center justify-center w-6 h-6">
                          <BiChevronRight color="white" size={20} />
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row">
                          <div className="flex -space-x-4">
                            <img
                              loading="eager"
                              className="w-14 h-14  rounded-full dark:border-gray-800"
                              src={p1}
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <img
                              loading="eager"
                              className="w-14 h-14  rounded-full dark:border-gray-800"
                              src={p2}
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <img
                              loading="eager"
                              className="w-14 h-14  rounded-full dark:border-gray-800"
                              src={p3}
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <img
                              loading="eager"
                              className="w-14 h-14  rounded-full dark:border-gray-800"
                              src={p4}
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <a
                              className="flex items-center bg-violet-dark justify-center w-14 h-14 text-xs font-bold font-QuickSand  text-white border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                              href="/review"
                            >
                              15k+
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
