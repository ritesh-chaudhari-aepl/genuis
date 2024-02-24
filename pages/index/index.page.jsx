import Hero from "../../src/components/containers/Hero";
import Testimonial from "../../src/pages/Testimonial";
import Download from "../../src/pages/Download";
import HomeService from "../../src/pages/HomeService";
import AnswerBank from "../../src/pages/AnswerBank";
import Map from "../../src/pages/Map";
import University from "../../src/pages/University";
import ReadMore from "../../src/pages/ReadMore";
import Newsletter from "../../src/components/containers/Newsletter";
import Steps from "../../src/pages/Steps";
import HomeFeatures from "../../src/pages/HomeFeatures";
import HomeAbout from "../../src/pages/HomeAbout";
import ContactContainer from "../../src/components/containers/ContactContainer";
export { Page };

// Custom Export
export const documentProps = {
  title: "24X7 Online Homework Assistance at Genius Tutors",
  description:
    "Boost Your Grades with Genius Tutor's Expert Homework Assistance Service. We Offers 24/7 Online Help, Personalized Solutions, & Experts Advice",
  canonical: "https://thegeniustutors.com/",
  url: "https://thegeniustutors.com/",
};

function Page() {
  return (
    <div>
      <Hero />
      {/* <HomeService /> */}
      <Steps />
      <HomeFeatures />
      <AnswerBank />
      <HomeAbout />
      <University />
      <Map />
      <Testimonial />
      <ContactContainer />
      <ReadMore />
      <Download />
      <Newsletter />
    </div>
  );
}
