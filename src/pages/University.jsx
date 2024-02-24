import university1 from "../../assets/university/Kennesaw-State-University.webp";
import university2 from "../../assets/university/Duke-University.webp";
import university3 from "../../assets/university/Central-Michigan-University.webp";
import university4 from "../../assets/university/Victoria-University.webp";
import university5 from "../../assets/university/Northern-Illinois-University.webp";
import university6 from "../../assets/university/University-of-California.webp";
import university7 from "../../assets/university/Miami-University.webp";
import university8 from "../../assets/university/Oxford-University.webp";
import university9 from "../../assets/university/The-University-of-Chicago.webp";
import university10 from "../../assets/university/University-of-Georgia.webp";

const University = () => {
  return (
    <section id="university" className="bg-primaryWhite text-center">
      <div className=" mx-auto max-w-screen-lg my-16">
        <div className="text-center flex flex-col gap-4 px-6">
          <h3 className="text-center text-2xl font-normal font-Inter leading-none tracking-wide text-black">
            Trusted by Over 100,000 Students Worldwide
          </h3>
          <h2 className="text-center text-2xl  md:text-4xl font-semibold tracking-wide text-black">
            Genius Tutors: The Trusted Source for University Students Seeking
            Homework Assistance
          </h2>
          <p className="text-base ">
            Genius Tutors has gained the confidence and trust of students across
            the globe. Our services have positively impacted over 100,000
            students from renowned universities, providing them with a seamless
            academic experience.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 px-4 mt-20 gap-4">
          {/* 1 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university1}
              className="w-auto h-auto"
              alt="Kennesaw State University"
              title="Kennesaw State University"
            />
            <h4 className="text-black  ">Kennesaw State University</h4>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university2}
              className="w-auto h-auto"
              alt="Duke University"
              title="Duke University"
            />
            <h4 className="text-black  ">Duke University</h4>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university3}
              className="w-auto h-auto"
              alt="Central Michigan University"
              title="Central Michigan University"
            />
            <h4 className="text-black  ">Central Michigan University</h4>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university4}
              className="w-auto h-auto"
              alt="Victoria University"
              title="Victoria University"
            />
            <h4 className="text-black  ">Victoria University</h4>
          </div>
          {/* 5 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university5}
              className="w-auto h-auto"
              alt="Northern Illinois University"
              title="Northern Illinois University"
            />
            <h4 className="text-black  ">Northern Illinois University</h4>
          </div>
          {/* 6 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university6}
              className="w-auto h-auto"
              alt="University of California"
              title="University of California"
            />
            <h4 className="text-black  ">University of California</h4>
          </div>
          {/* 7 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university7}
              className="w-auto h-auto"
              alt="Miami University"
              title="Miami University"
            />
            <h4 className="text-black  ">Miami University</h4>
          </div>
          {/* 8 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university8}
              className="w-auto h-auto"
              alt="Oxford University"
              title="Oxford University"
            />
            <h4 className="text-black  ">Oxford University</h4>
          </div>
          {/* 9 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university9}
              className="w-auto h-auto"
              alt="The University of Chicago"
              title="The University of Chicago"
            />
            <h4 className="text-black  ">The University of Chicago</h4>
          </div>
          {/* 10 */}
          <div className="flex flex-col items-center">
            <img
              loading="eager"
              width="100%"
              height="100%"
              src={university10}
              className="w-auto h-auto"
              alt="University of Georgia"
              title="University of Georgia"
            />
            <h4 className="text-black  ">University of Georgia</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default University;
