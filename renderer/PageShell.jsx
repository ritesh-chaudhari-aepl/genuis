import React from "react";
import PropTypes from "prop-types";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";
import { childrenPropType } from "./PropTypeValues";
import Header from "../src/components/header/Header";
import Footer from "../src/pages/Footer";

export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <>
          <Header />
          <content>{children}</content>
          <Footer />
        </>
      </PageContextProvider>
    </React.StrictMode>
  );
}
