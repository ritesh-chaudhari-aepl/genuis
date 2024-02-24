/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import MainCard from "../components/cards/MainCard";
import { Swiper, SwiperSlide } from "swiper/react";
import writingFull from "../../assets/assignment.webp";
import video from "../../assets/video.webp";
import testQuiz from "../../assets/test.webp";
import ProjectLab from "../../assets/project.webp";
import presentation from "../../assets/presentation.svg";
import homework from "../../assets/homework.svg";
import programming from "../../assets/programming.svg";
import gameDevelop from "../../assets/game-develop.svg";
import bibliography from "../../assets/bibliography.svg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import MainCard from "../components/cards/MainCard";
import Carousel from "nuka-carousel";

const services = [
  // assignment-service
  {
    id: 0,
    href: "/services/assignment-services",
    image: writingFull,
    alt: "Genius Tutors Assignment Service",
    title: "Assignment Service",
    description:
      "Unleash your academic potential with Genius Tutor's 24/7 Homework Assistance. Transform challenging deadlines into triumphant achievements!",
  },
  // live session
  {
    id: 1,
    href: "/services/live-session",
    image: video,
    alt: "Genius Tutors  Live Sessions",
    title: "Live Sessions",
    description:
      "Immerse yourself in interactive learning experiences with Genius Tutor's Live Sessions. Uncover the art of mastering complex subjects in real-time!",
  },
  // presentation-writing
  {
    id: 2,
    href: "/services/presentation-writing",
    image: presentation,
    alt: "Genius Tutors Presentation Writing",
    title: "Presentation Writing",
    description:
      "Craft compelling narratives and captivate your audience with Genius Tutor's Presentation Writing Assistance. Elevate your presentations to leave a lasting impact.",
  },
  // project-reports
  {
    id: 3,
    href: "/services/project-report-writing",
    image: ProjectLab,
    alt: "Genius Tutors Project Reports",
    title: "Project Reports",
    description:
      "Transform your academic journey with impeccable project reports from Genius Tutor's Project Assistance. Achieve excellence and stand out in your studies.",
  },
  // exams
  {
    id: 4,
    href: "/services/exams",
    image: testQuiz,
    alt: "Genius Tutors Exams",
    title: "Exams",
    description:
      "Excel in your exams with our expert assistance. We craft outstanding exam reports, ensuring your academic success is our top priority at Genius Tutors.",
  },
  // homework
  {
    id: 5,
    href: "/services/homework",
    image: homework,
    alt: "Genius Tutors Homework",
    title: "Homework",
    description:
      "Turn your assignments into masterpieces. Our Homework Writing Assistance ensures excellence in every task, making learning both productive and enjoyable.",
  },
  // programming
  {
    id: 6,
    href: "/services/programming",
    image: programming,
    alt: "Genius Tutors Programming",
    title: "Programming",
    description:
      "Unlock the world of coding with Genius Tutor's step-by-step guidance. Master programming challenges and enhance your coding skills seamlessly.",
  },
  // web-development
  {
    id: 7,
    href: "/services/web-development",
    image: writingFull,
    alt: "Genius Tutors Web Development",
    title: "Web Development",
    description:
      "Embark on a journey to master web development with Genius Tutors. Get hands-on guidance and unravel the secrets of creating stunning websites and applications.",
  },
  // lab reports
  {
    id: 8,
    href: "/services/lab-report",
    image: ProjectLab,
    alt: "Genius Tutors Lab Reports",
    title: "Lab Report",
    description:
      "Dive into the world of precise scientific storytelling. Our Lab Reports offer an immersive journey from experiments to exceptional grades.",
  },
  // quiz
  {
    id: 9,
    href: "/services/quizzes",
    image: testQuiz,
    alt: "Genius Tutors Quiz",
    title: "Quizzes",
    description:
      "Boost your quiz performance with our step-by-step solutions. Genius Tutors provides expert assistance to help you master your quiz challenges effortlessly.",
  },
  // app-development
  {
    id: 10,
    href: "/services/app-development",
    image: writingFull,
    alt: "Genius Tutors App Development",
    title: "App Development",
    description:
      "Dive into the world of app development with Genius Tutors. Learn the art of creating innovative and functional applications through expert guidance and practical insights.",
  },
  // graphic-designing
  {
    id: 11,
    href: "/services/graphic-designing",
    image: ProjectLab,
    alt: "Genius Tutors Graphic Designing",
    title: "Graphic Designing",
    description:
      "Unleash your creativity with Genius Tutor's Graphic Designing. From fundamentals to advanced techniques, master the art of visual communication and create stunning designs with expert guidance.",
  },
  // game-development
  {
    id: 12,
    href: "/services/game-development",
    image: gameDevelop,
    alt: "Genius Tutors Game Development",
    title: "Game Development",
    description:
      "Level up your skills with Genius Tutor's Game Development. Dive into the world of coding, design, and storytelling, and turn your game development aspirations into reality with our expert guidance.",
  },
  // college-application-essay
  {
    id: 13,
    href: "/services/college-application-essay",
    image: bibliography,
    alt: "Genius Tutors College Application Essay",
    title: "College Application Essay",
    description:
      "Unlock your academic journey with our expert guidance on crafting powerful college application essays, tailored for success.",
  },
  // coursework-help
  {
    id: 14,
    href: "/services/coursework-help",
    image: homework,
    alt: "Genius Tutors Coursework Help",
    title: "Coursework Help",
    description:
      "Excel in your coursework with our dedicated Coursework Help, tailored to enhance your academic success and understanding.",
  },
  // research-proposal-help
  {
    id: 15,
    href: "/services/research-proposal-help",
    image: ProjectLab,
    alt: "Genius Tutors Research Proposal Help",
    title: "Research Proposal Help",
    description:
      "Navigate the world of academic research confidently with our specialized assistance in crafting impactful and effective research proposals.",
  },
  // write-my-case-study
  {
    id: 16,
    href: "/services/write-my-case-study",
    image: ProjectLab,
    alt: "Genius Tutors Write My Case Study",
    title: "Write My Case Study",
    description:
      "Transforming complex scenarios into compelling narratives. Elevate your academic journey with our 'Write My Case Study' service expertise.",
  },
  // sop-writing-service
  {
    id: 17,
    href: "/services/sop-writing-service",
    image: writingFull,
    alt: "Genius Tutors SOP Writing Service",
    title: "SOP Writing Service",
    description:
      "Elevate your applications with our tailored SOP Writing Service, ensuring a standout and compelling portrayal of your achievements and aspirations.",
  },
  // write-my-annotated-bibliography
  {
    id: 18,
    href: "/services/write-my-annotated-bibliography",
    image: bibliography,
    alt: "Genius Tutors Write My Annotated Bibliography",
    title: "Write My Annotated Bibliography",
    description:
      "Elevate your academic work with our personalized service. Let us expertly compile your annotated bibliography, ensuring excellence and precision.",
  },
  // {
  //   id: 19,
  //   href: "/services/scholarship-essay-writing-service",
  //   image: writingFull,
  //   alt: "Genius Tutors Scholarship Essay Writing Service",
  //   title: "Scholarship Essay Writing Service",
  //   description:
  //     "Secure your future with our Scholarship Essay Writing Service. Let your unique story shine through, capturing the scholarship committee's attention.",
  // },
];

const HomeService = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // // Define breakpoints for sm, md, lg, xl screens
  // const breakpoints = {
  //   sm: 640, // Small devices (landscape phones, 576px and up)
  //   md: 768, // Medium devices (tablets, 768px and up)
  //   lg: 1024, // Large devices (desktops, 992px and up)
  //   xl: 1280, // Extra large devices (large desktops, 1200px and up)
  // };

  // // Calculate slides to show and scroll based on window width and breakpoints
  // const slidesToShow = () => {
  //   const width = window.innerWidth;
  //   if (width >= breakpoints.xl) return 4;
  //   if (width >= breakpoints.lg) return 3;
  //   // if (width >= breakpoints.md) return 2;
  //   return 2; // For smaller screens like sm
  // };

  const slidesToScroll = slidesToShow();

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
          <div className="mx-auto max-w-screen-xl">
            <Carousel
              ref={emblaRef}
              renderBottomCenterControls={false}
              slidesPerView={4}
              // breakpoints={{
              //   320: { slidesPerView: 2, spaceBetween: 10 },
              //   768: { slidesPerView: 3, spaceBetween: 20 },
              //   1024: { slidesPerView: 4, spaceBetween: 30 },
              // }}
              // autoplay={{ delay: 2500, disableOnInteraction: false }}
              // pagination={{ clickable: true }}
              slidesToShow={4}
              slidesToScroll={4}
              autoplay
              cellSpacing="20"
              wrapAround={true}
            >
              {services.map((service) => (
                <MainCard
                  key={service.id}
                  href={service.href}
                  icon={service.image}
                  iconAlt={service.alt}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </Carousel>

            {/* <div className="swiper-navigation flex items-center justify-between absolute top-1/2 w-full">
              <button
                aria-label="prev btn"
                title="previous"
                onClick={() => swiper && swiper.slidePrev()}
                className="absolute left-0 ml-2"
              >
                <BiChevronLeft className="h-10 w-10 text-blue-blue" />
              </button>
              <button
                aria-label="next btn"
                title="next"
                onClick={() => swiper && swiper.slideNext()}
                className="absolute right-0 mr-2"
              >
                <BiChevronRight className="h-10 w-10 text-blue-blue" />
              </button>
            </div>
            {/* Built-in pagination */}
            <div className="swiper-pagination"></div>
          </div>

          <div className="">
            <a
              href="/services"
              target="_blank"
              className="bg-yellow-dark font-Inter hover:no-underline cursor-pointer text-black px-8 py-3 rounded-full sm:mb-10 mt-6"
              rel="noreferrer"
            >
              All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
