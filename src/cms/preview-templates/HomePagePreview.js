import React from "react";
import PropTypes from "prop-types";
// import { AboutPageTemplate } from "../../templates/about-page";
import AboutPageTemplate from "../../pages/index";

const HomePagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default HomePagePreview;
