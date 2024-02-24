// // import { Helmet, HelmetProvider } from "react-helmet-async";
// import PropTypes from "prop-types";
// import { useLocation } from "react-router-dom";
// import HelmetAsync from "react-helmet-async";

// // Now you can access the HelmetProvider
// const { Helmet, HelmetProvider } = HelmetAsync;
// // function SEO({ schemaStruct }) {
// function SEO({ title, description, schemaStruct }) {
//   const location = useLocation(); // React Router's useLocation hook
//   // console.log("location: ", location);
//   // console.log("title: ", title);
//   const pageData = {
//     title: `${title}`,
//     description: `${description}`,
//     keywords:
//       "Genius Tutors, homework help, best Homework Assistance platform, best quality, homework assistance, Free quote, Expert help, Top-rated, 24/7 support, assignment help, assignment writing service, assignment help online, assignment services, assignment help expert, India Assignment Help",
//     Url: "https://thegeniustutors.com/ ", // Provide the actual URL here
//     canonicalUrl: `https://thegeniustutors.com${location.pathname}`,
//     SiteName: "Genius Tutors",
//     Locale: "en_US",
//     Type: "article", // Change to "article" for specific article-type pages
//     ogUrl: "https://thegeniustutors.com/ ", // Provide the actual URL here
//     ogSiteName: "Genius Tutors",
//     ogLocale: "en_US",
//     ogType: "article", // Change to "article" for specific article-type pages
//     openGraph: {
//       type: "website",
//       keywords:
//         "Genius Tutors, best Homework Assistance platform, homework help, best quality, homework assistance, Free quote, Expert help, Top-rated, 24/7 support, assignment help, assignment writing service, assignment help online, assignment services, assignment help expert, India Assignment Help",
//       Url: "https://thegeniustutors.com/ ", // Provide the actual URL here
//       SiteName: "Genius Tutors",
//       Locale: "en_US",
//       Type: "article", // Change to "article" for specific article-type pages
//     },
//   };

//   const schemaStructJson = JSON.stringify(schemaStruct);

//   console.log("Title:", title);
//   console.log("description:", pageData.description);
//   // console.log("Canonical URL:", pageData.canonicalUrl);
//   // console.log("schema", schemaStructJson);

//   return (
//     <HelmetProvider>
//       <Helmet>
//         <meta charSet="utf-8" />
//         {/* <title>{title} - 24X7 Online Homework Assistance at Genius Tutors</title> */}
//         {/* <title>24X7 Online Homework Assistance at Genius Tutors</title> */}
//         <title>{title}</title>
//         <meta name="title" content={title || pageData.title} />
//         <meta
//           name="description"
//           content={description || pageData.description}
//         />
//         <meta name="robots" content="index, follow" />
//         <meta
//           name="keywords"
//           content="Genius Tutor, homework assistance, Free quote, Expert help, Top-rated, 24/7 support, assignment help, assignment writing service, assignment help online, assignment services, assignment help expert, India Assignment Help"
//         />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         {/* <meta property="og:title" content={pageData.title} />
//         <meta property="og:description" content={pageData.description} /> */}
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <link rel="canonical" href={pageData.canonicalUrl} />
//         {/* <link rel="canonical" href="https://thegeniustutors.com/ " /> */}
//         <meta property="og:url" content={pageData.ogUrl} />
//         <meta property="og:site_name" content={pageData.ogSiteName} />
//         <meta property="og:locale" content={pageData.ogLocale} />
//         <meta property="og:type" content={pageData.ogType} />
//         <meta property="fb:app_id" content={pageData.fbAppId} />
//         <meta name="language" content="English" />
//         <script type="application/ld+json">{schemaStructJson}</script>
//       </Helmet>
//     </HelmetProvider>
//   );
// }

// // Define prop types for SEO component
// SEO.propTypes = {
//   title: PropTypes.string, // Title prop should be a string
//   description: PropTypes.string, // Description prop should be a string
//   schemaStruct: PropTypes.array.isRequired, // schemaStruct prop should be an array and is required
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export default SEO;
