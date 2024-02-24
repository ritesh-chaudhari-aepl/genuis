/* eslint-disable react-refresh/only-export-components */
import "./code.css";
import { MdDoneAll } from "react-icons/md";
import image from "../../assets/about.webp";
import AssignmentForm from "../../src/common/assignment-form/AssignmentForm";

export { Page };

// Custom Export
export const documentProps = {
  title: "Know More About Genius Tutors",
  description:
    "Discover the story behind Genius Tutors, a leading academic help platform committed to empowering students through personalized learning.",
  canonical: "https://thegeniustutors.com/about",
  url: "https://thegeniustutors.com/about",
};

function Page() {
  return (
    <div className="bg-primaryWhite pb-10">
      <section id="about">
        <div className="banner-section bg-[#fff9f9] py-16 pt-2">
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
              <div className="">
                <div className=" pt-1 px-6 lg:px-0">
                  <h3 className="capitalize text-black font-Inter text-3xl leading-[50px] font-semibold lg:text-[49px] lg:leading-[60px] mb-4">
                    About Us - Who We Are
                  </h3>
                  <p className="text-black py-3 text-sm mt-3 font-normal leading-[25px] font-Inter sm:text-base sm:leading-[27px]">
                    At Genius Tutors, we are dedicated to providing exceptional
                    homework assistance at affordable prices. Our main focus is
                    on meeting your academic needs without compromising on
                    quality.
                  </p>

                  <div className="px-5 space-y-3 pt-4">
                    <p className="flex gap-2 flex-row italic  text-black">
                      <MdDoneAll size={20} color="blue" /> Originality
                      Guaranteed
                    </p>
                    <p className="flex gap-2 flex-row italic  text-black">
                      <MdDoneAll size={20} color="blue" /> Never Miss a Deadline
                    </p>
                    <p className="flex gap-2 flex-row italic  text-black">
                      <MdDoneAll size={20} color="blue" /> Achieve High Grades
                    </p>
                    <p className="flex gap-2 flex-row italic  text-black">
                      <MdDoneAll size={20} color="blue" /> Recieve
                      Individualized Support from Genius Tutors
                    </p>
                    <p className="flex gap-2 flex-row italic  text-black">
                      <MdDoneAll size={20} color="blue" /> Your Privacy is Fully
                      Protected
                    </p>
                  </div>
                </div>
              </div>
              <AssignmentForm />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-screen-xl container items-center grid grid-cols-1 gap-6">
          <div className="service-why-section mx-auto py-12 max-w-screen-xl px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="content-part grid gap-3">
                <h3 className="text-2xl font-Inter font-semibold text-black">
                  Our Story
                </h3>
                <p className="text-justify leading-7 tracking-wide ">
                  Welcome to Genius Tutors, a prominent academic writing service
                  that holds a significant presence in the global education
                  market. Our mission is to provide top-notch academic writing
                  services, assisting thousands of students in achieving
                  excellent grades during their MBA education journey.
                </p>
                <p className="text-justify leading-7 tracking-wide ">
                  As a leading academic writing service, we entrust your
                  assignments to our highly qualified and experienced team of
                  subject matter experts. Their proficiency, honed through years
                  of practical experience and advanced research skills, allows
                  them to deliver high-quality assignments even under tight
                  deadlines.
                </p>
                <p className="text-justify leading-7 tracking-wide ">
                  Genius Tutors takes pride in its commitment to delivering
                  superior academic writing services at affordable prices,
                  catering to the budget constraints of students while
                  maintaining a tradition of excellence.
                </p>
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="text-justify leading-7 tracking-wide ">
                  At Genius Tutors, our vision is centered around ensuring
                  customer satisfaction at all times. We achieve this by
                  prioritizing the delivery of high-quality assignments. Through
                  significant investments in quality control and monitoring, our
                  goal is to guarantee that each client receives top-notch
                  content, resulting in high grades for every assignment we
                  handle.
                </p>
              </div>

              <div className="image-part flex">
                <img
                  src={image}
                  alt="homework"
                  className="flex h-fit"
                  title="assignment"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-3 px-6">
            <h3 className="text-2xl font-semibold font-Inter text-black">
              Genius Tutors Global Presence
            </h3>
            <p className="text-justify leading-7 tracking-wide ">
              Genius Tutors is dedicated to bridging educational gaps, firmly
              holding the belief that geographical constraints should never
              impede academic support. Boasting a remarkable history of
              fulfilling over 300,000 orders and garnering a satisfied customer
              base exceeding 100,000, Genius Tutors has emerged as a
              distinguished name among students globally. Our influence extends
              to the UK, USA, Canada, Australia, Singapore, UAE, and beyond,
              ensuring accessibility and excellence in academic assistance.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/918210403033"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-dark hover:no-underline font-Inter cursor-pointer text-base md:text-xl text-black px-8 py-3 rounded-full sm:mb-10 sm:ml-0 ml-12 mt-6"
            >
              Get Homework Assistance Now!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
