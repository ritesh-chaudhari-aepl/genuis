import MainCard from "../components/cards/MainCard";
import writingFull from "../assets/assignment.webp";
// import playPauseMic from "../assets/service.jpg";
import video from "../assets/video.webp";
// import testQuiz from "../assets/test.webp";
import ProjectLab from "../assets/project.webp";
// import service5 from "../assets/service.jpg";
// import service1 from "../assets/service1.webp";
// import service2 from "../assets/service2.webp";
// import service3 from "../assets/service3.webp";
// import service4 from "../assets/service4.webp";
// import service5 from "../assets/service5.webp";
// import service6 from "../assets/service6.webp";

const HomeService = () => {
  return (
    <section id="home-service" className="bg-primaryWhite py-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="py-10 sm:px-6 items-center flex flex-col gap-4">
          <div className="" aria-label="card components">
            <div className="flex flex-col px-6 lg:px-10">
              <div className="flex flex-col items-center">
                <h2 className="capitalize text-black font-Inter text-4xl leading-[50px] font-bold text-center sm:text-[49px] sm:leading-[60px] mb-6">
                  Your One-Stop Solution for All Homework Assistance Needs
                </h2>
                <p className="font-medium text-black md:text-center px-3 sm:px-0 text-left font-Inter sm:text-base sm:mb-4 sm:tracking-[0.8px]">
                  Diverse problems call for diverse homework solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 px-2 md:px-4 gap-2 md:gap-3 lg:gap-4 mt-4 lg:grid-cols-4">
            <MainCard
              href="/services/assignment-services"
              icon={writingFull}
              iconAlt="Genius Tutors Assignment Service"
              title="Assignment Service"
              description="Unleash your academic potential with Genius Tutor's 24/7 Homework Assistance. Transform challenging deadlines into triumphant achievements!"
            />

            <MainCard
              href="/services/live-session"
              icon={video}
              iconAlt="Genius Tutors  Live Sessions"
              title="Live Sessions"
              description="Immerse yourself in interactive learning experiences with Genius Tutor's Live Sessions. Uncover the art of mastering complex subjects in real-time!"
            />

            <MainCard
              href="/services/presentation-writing"
              icon={writingFull}
              iconAlt="Genius Tutors Presentation Writing"
              title="Presentation Writing"
              description="Craft compelling narratives and captivate your audience with Genius Tutor's Presentation Writing Assistance. Elevate your presentations to leave a lasting impact."
            />

            <MainCard
              href="/services/project-report-writing"
              icon={ProjectLab}
              iconAlt="Genius Tutors Project Reports"
              title="Project Reports"
              description="Transform your academic journey with impeccable project reports from Genius Tutor's Project Assistance. Achieve excellence and stand out in your studies."
            />
          </div>

          

          <div className="">
            <a
              href="/services"
              target="_blank"
              className="bg-yellow-dark cursor-pointer text-black px-8 py-3 rounded-full sm:mb-10 mt-6"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
