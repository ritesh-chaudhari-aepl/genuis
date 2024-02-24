import { BsFillPlayFill } from "react-icons/bs";
import torch from "../../../assets/torch.webp";
import Banner from "./Banner";
import AssignmentForm from "../../common/assignment-form/AssignmentForm";

const Hero = () => {

  return (
    <section>
      <div className="mx-auto max-w-screen-2xl py-8 sm:py-12 px-6 lg:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-16">
          <div>
            <div className="mb-4">
              <div className="flex gap-2 mb-4 items-center sm:flex-row sm:gap-3">
                <img
                  src={torch}
                  loading="eager"
                  alt="torch"
                  title="torch"
                  width="12"
                  height="12"
                  className="w-[12px]"
                />
                <span className="capitalize text-black font-Inter font-semibold text-sm ">
                  best Homework Assistance platform
                </span>
              </div>
              <h1 className="text-3xl text-black font-semibold xl:font-bold capitalize lg:text-4xl lg:leading-normal xl:text-5xl xl:leading-[76px] mb-4">
                Get 24/7 Personalized Homework Assistance from Genius Tutors
              </h1>
              <p className="mt-4 text-black ">
                Solutions when you need it, the way you need it- only at Genius
                Tutor
              </p>
              <div className="mt-8 mb-6 flex lg:gap-6 gap-4 justify-between md:justify-start">
                <div className="flex w-fit">
                  <a
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-Inter hover:no-underline flex rounded-full bg-yellow-dark px-4 py-2 md:px-6 lg:px-12 md:py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
                  >
                    Get Help Now
                  </a>
                </div>
                <div className="flex w-fit flex-row gap-3 items-center sm:only:justify-center">
                  <a
                    href="/#steps"
                    className="cursor-pointer inline-block rounded-full bg-blue-blue p-3 text-sm font-medium text-white transition hover:bg-blue-darkBlue focus:outline-none"
                  >
                    <BsFillPlayFill size={25} />
                  </a>
                  <a
                    href="/#steps"
                    className="font-bold cursor-pointer text-black text-Inter capitalize"
                  >
                    see how it works?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <AssignmentForm />
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;
