import { MdDoneAll } from "react-icons/md";
import home from "../../assets/about.webp";
const HomeAbout = () => {
  return (
    <section className="mx-auto max-w-screen-xl" id="about">
      <div className="grid grid-flow-row sm:grid-cols-2 gap-4 items-center grid-cols-1">
        <div className="flex p-6">
          <img
            loading="eager"
            src={home}
            className="mb-0 "
            width="100%"
            height="100%"
            alt="Homework Assistance Guarantees From Genius Tutors"
            title="Homework Assistance Guarantees From Genius Tutors"
          />
        </div>
        <div className="px-6 lg:px-0">
          <h3 className="capitalize text-black font-Inter text-3xl leading-[50px] font-semibold lg:text-[40px] lg:leading-[52px] mb-4">
            Homework Assistance Guarantees from Genius Tutors
          </h3>
          <p className="text-black py-3 text-sm mt-3 font-normal leading-[25px] font-Inter sm:text-base sm:leading-[27px]">
            At Genius Tutors, we are dedicated to providing exceptional college
            homework assistance at affordable prices. Our main focus is on
            meeting your academic needs without compromising on quality.
          </p>

          <div className="px-5 space-y-3 pt-4">
            <p className="flex gap-2 flex-row italic text-black font-Inter">
              <MdDoneAll size={20} color="blue" /> Originality Guaranteed
            </p>
            <p className="flex gap-2 flex-row italic text-black font-Inter">
              <MdDoneAll size={20} color="blue" /> Never Miss a Deadline
            </p>
            <p className="flex gap-2 flex-row italic text-black font-Inter">
              <MdDoneAll size={20} color="blue" /> Achieve High Grades
            </p>
            <p className="flex gap-2 flex-row italic text-black font-Inter">
              <MdDoneAll size={20} color="blue" /> Recieve Individualized
              Support from Genius Tutors
            </p>
            <p className="flex gap-2 flex-row italic text-black font-Inter">
              <MdDoneAll size={20} color="blue" /> Your Privacy is Fully
              Protected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
