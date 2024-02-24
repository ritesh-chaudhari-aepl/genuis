import Hero from "../components/containers/Hero";
import Testimonial from "./Testimonial";
import Download from "./Download";
// import Contact from "./Contact";
import HomeService from "./HomeService";
import AnswerBank from "./AnswerBank";
import Map from "./Map";
import University from "./University";
import ReadMore from "./ReadMore";
import SEO from "../components/Seo";
import Newsletter from "../components/containers/Newsletter";
import Steps from "./Steps";
import HomeFeatures from "./HomeFeatures";
import HomeAbout from "./HomeAbout";
import ContactContainer from "../components/containers/ContactContainer";
const Home = () => {
  return (
    <div>
      <SEO
        title="24X7 Online Homework Assistance at Genius Tutors"
        description="Boost Your Grades with Genius Tutor's Expert Homework Assistance Service. We Offers 24/7 Online Help, Personalized Solutions, & Experts Advice"
        schemaStruct={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Genius Tutors",
            image: "https://thegeniustutors.com/assets/D13_Logo-289828a8.webp",
            "@id": "",
            url: "https://thegeniustutors.com/",
            telephone: "8210403033",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C/O -S.K.Mishra, C.M.R.I Gate, Bartand,",
              addressLocality: "Dhanbad",
              postalCode: "826001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 23.8059401,
              longitude: 86.4311465,
            },
          },
        ]}
      />
      <Hero />
      <HomeService />
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
};

export default Home;
