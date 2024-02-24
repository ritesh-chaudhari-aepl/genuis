import MainCard from "../components/cards/MainCard";
import { useState, useEffect } from "react";
import writingFull from "../assets/assignment.webp";
import video from "../assets/video.webp";
import testQuiz from "../assets/test.webp";
import ProjectLab from "../assets/project.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ReactCardSlider from "react-card-slider-component";

const services = [
  {
    id: 0,
    href: "/services/assignment-services",
    image: writingFull,
    alt: "Genius Tutors Assignment Service",
    title: "Assignment Service",
    description:
      "Unleash your academic potential with Genius Tutor's 24/7 Homework Assistance. Transform challenging deadlines into triumphant achievements!",
  },
  {
    id: 1,
    href: "/services/live-session",
    image: video,
    alt: "Genius Tutors  Live Sessions",
    title: "Live Sessions",
    description:
      "Immerse yourself in interactive learning experiences with Genius Tutor's Live Sessions. Uncover the art of mastering complex subjects in real-time!",
  },
  {
    id: 2,
    href: "/services/presentation-writing",
    image: writingFull,
    alt: "Genius Tutors Presentation Writing",
    title: "Presentation Writing",
    description:
      "Craft compelling narratives and captivate your audience with Genius Tutor's Presentation Writing Assistance. Elevate your presentations to leave a lasting impact.",
  },
  {
    id: 3,
    href: "/services/project-report-writing",
    image: ProjectLab,
    alt: "Genius Tutors Project Reports",
    title: "Project Reports",
    description:
      "Transform your academic journey with impeccable project reports from Genius Tutor's Project Assistance. Achieve excellence and stand out in your studies.",
  },
  {
    id: 4,
    href: "/services/lab-report",
    image: ProjectLab,
    alt: "Genius Tutors Lab Reports",
    title: "Lab Report",
    description:
      "Dive into the world of precise scientific storytelling. Our Lab Reports offer an immersive journey from experiments to exceptional grades.",
  },
  {
    id: 5,
    href: "/services/homework",
    image: writingFull,
    alt: "Genius Tutors Homework",
    title: "Homework",
    description:
      "Turn your assignments into masterpieces. Our Homework Writing Assistance ensures excellence in every task, making learning both productive and enjoyable.",
  },
  {
    id: 6,
    href: "/services/exams",
    image: testQuiz,
    alt: "Genius Tutors Exams",
    title: "Exams",
    description:
      "Excel in your exams with our expert assistance. We craft outstanding exam reports, ensuring your academic success is our top priority at Genius Tutors.",
  },
  {
    id: 7,
    href: "/services/quizzes",
    image: testQuiz,
    alt: "Genius Tutors Quiz",
    title: "Quizzes",
    description:
      "Boost your quiz performance with our step-by-step solutions. Genius Tutors provides expert assistance to help you master your quiz challenges effortlessly.",
  },
  {
    id: 8,
    href: "/services/programming",
    image: writingFull,
    alt: "Genius Tutors Programming",
    title: "Programming",
    description:
      "Unlock the world of coding with Genius Tutor's step-by-step guidance. Master programming challenges and enhance your coding skills seamlessly.",
  },
  {
    id: 9,
    href: "/services/web-development",
    image: writingFull,
    alt: "Genius Tutors Web Development",
    title: "Web Development",
    description:
      "Embark on a journey to master web development with Genius Tutors. Get hands-on guidance and unravel the secrets of creating stunning websites and applications.",
  },
  {
    id: 10,
    href: "/services/app-development",
    image: writingFull,
    alt: "Genius Tutors App Development",
    title: "App Development",
    description:
      "Dive into the world of app development with Genius Tutors. Learn the art of creating innovative and functional applications through expert guidance and practical insights.",
  },
  {
    id: 11,
    href: "/services/graphic-designing",
    image: ProjectLab,
    alt: "Genius Tutors Graphic Designing",
    title: "Graphic Designing",
    description:
      "Unleash your creativity with Genius Tutor's Graphic Designing. From fundamentals to advanced techniques, master the art of visual communication and create stunning designs with expert guidance.",
  },
  {
    id: 12,
    href: "/services/game-development",
    image: writingFull,
    alt: "Genius Tutors Game Development",
    title: "Game Development",
    description:
      "Level up your skills with Genius Tutor's Game Development. Dive into the world of coding, design, and storytelling, and turn your game development aspirations into reality with our expert guidance.",
  },
];

const HomeService = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1, // Adjust the number of slides to show at once
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  // };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   cssEase: "linear",
  //   speed: 1200,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "17%",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         // centerPadding: '3%',
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "10%",
  //       },
  //     },
  //     {
  //       breakpoint: 425,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "5%",
  //       },
  //     },
  //   ],
  // };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [services.length]);

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 md:px-4 gap-2 md:gap-3 lg:gap-4 mb-4">
            {services.map((service) => (
              <MainCard
                key={service.id}
                href={service.href}
                icon={service.image}
                iconAlt={service.iconAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* <Slider {...settings}>
            {services.map((service) => (
              <MainCard
                key={service.id}
                href={service.href}
                icon={service.icon}
                iconAlt={service.iconAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </Slider> */}
          <div className="carousel-container">
            <div className="carousel">
              {services.map((service) => (
                <MainCard
                  key={service.id}
                  href={service.href}
                  icon={service.image}
                  iconAlt={service.iconAlt}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          {/* <ReactCardSlider slides={services} /> */}
          <div className="">
            <a
              href="/services"
              target="_blank"
              className="bg-yellow-dark hover:no-underline cursor-pointer text-black px-8 py-3 rounded-full sm:mb-10 mt-6"
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
