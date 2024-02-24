// import Hero from "./components/containers/Hero";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Refund from "./pages/termAmdConditions/termAmdConditions/refund";
import Discount from "./pages/termAmdConditions/termAmdConditions/discount";
import PrivatePolocies from "./pages/termAmdConditions/termAmdConditions/privatePolocies";
import Terms from "./pages/termAmdConditions/termAmdConditions/terms";
// import Review from "./pages/review/Review";
import Blogs from "./pages/blogs/Blog";
import PostDetails from "./pages/blogs/PostDetails";
// import ThankYou from "./pages/ThankYou";
import ServicePage from "./pages/service/ServicePage";
// import Twak from "./common/Twak";
import ReactGA from "react-ga";
import { useEffect } from "react";
import ServiceDetails from "./pages/service/ServiceDetails";
import Error404 from "./pages/Error404";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Success from "./pages/service/Success";
import BrandAmbassadorProgram from "./pages/BrandAmbassadorProgram";
// lazy import
// import {lazy, Suspense} from "react";
// const Header = lazy(() => import('./components/header/Header'));
// const Footer = lazy(() => import('./pages/Footer'));
// const Home = lazy(() => import('./pages/Home'));
// const Refund = lazy(() => import('./pages/termAmdConditions/termAmdConditions/refund'));
// const PrivatePolocies = lazy(() => import('./pages/termAmdConditions/termAmdConditions/privatePolocies'));
// const Terms = lazy(() => import('./pages/termAmdConditions/termAmdConditions/terms'));
// // const Review = lazy(() => import('./pages/review/Review'));
// const Blogs = lazy(() => import('./pages/blogs/Blog'));
// const PostDetails = lazy(() => import('./pages/blogs/PostDetails'));
// const ThankYou = lazy(() => import('./pages/ThankYou'));
// const ServicePage = lazy(() => import('./pages/service/ServicePage'));

const App = () => {
  ReactGA.initialize("AW-11316870343");
  ReactGA.pageview(window.location.pathname + window.location.search);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <div className="bg-primaryWhite relative">
      {/* <div className=" ">
        <Twak />
      </div> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/privacy" element={<PrivatePolocies />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        {/* <Route path="/review" element={<Review />} /> */}
        <Route path="/blog/:slug" element={<PostDetails />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/become-a-brand-ambassador"
          element={<BrandAmbassadorProgram />}
        />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:serviceName" element={<ServiceDetails />} />
        {/* <Route path="/success" element={<ThankYou />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/error" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;


// // 2nd trial
// import { Route, Routes } from "react-router-dom";
// import { lazy, Suspense, useEffect } from "react";
// import ReactGA from "react-ga";
// import Twak from "./common/Twak";

// // Lazy-loaded components
// const Header = lazy(() => import("./components/header/Header"));
// const Footer = lazy(() => import("./pages/Footer"));
// const Home = lazy(() => import("./pages/Home"));
// const Refund = lazy(() =>
//   import("./pages/termAmdConditions/termAmdConditions/refund")
// );
// const PrivatePolocies = lazy(() =>
//   import("./pages/termAmdConditions/termAmdConditions/privatePolocies")
// );
// const Terms = lazy(() =>
//   import("./pages/termAmdConditions/termAmdConditions/terms")
// );
// const Blogs = lazy(() => import("./pages/blogs/Blog"));
// const PostDetails = lazy(() => import("./pages/blogs/PostDetails"));
// const ThankYou = lazy(() => import("./pages/ThankYou"));
// const ServicePage = lazy(() => import("./pages/service/ServicePage"));
// const ServiceDetails = lazy(() => import("./pages/service/ServiceDetails"));
// const Error404 = lazy(() => import("./pages/Error404"));
// const Features = lazy(() => import("./pages/Features"));

// const App = () => {
//   ReactGA.initialize("AW-11316870343");
//   ReactGA.pageview(window.location.pathname + window.location.search);

//   useEffect(() => {
//     ReactGA.pageview(window.location.pathname);
//   });

//   return (
//     <div className="bg-primaryWhite relative">
//       <div className=" ">
//         <Twak />
//       </div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/refund" element={<Refund />} />
//           <Route path="/privacy" element={<PrivatePolocies />} />
//           <Route path="/terms-and-condition" element={<Terms />} />
//           <Route path="/blog/:slug" element={<PostDetails />} />
//           <Route path="/blog" element={<Blogs />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/services" element={<ServicePage />} />
//           <Route path="/services/:serviceName" element={<ServiceDetails />} />
//           <Route path="/success" element={<ThankYou />} />
//           <Route path="*" element={<Error404 />} />
//           <Route path="/error" element={<Error404 />} />
//         </Routes>
//         <Footer />
//       </Suspense>
//     </div>
//   );
// };

// export default App;
