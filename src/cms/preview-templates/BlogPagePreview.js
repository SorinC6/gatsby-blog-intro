import React from "react";
import PropTypes from "prop-types";
// import { AboutPageTemplate } from "../../templates/about-page";
import BlogPagePreview from "../../templates/blog-post";

const BlogPreview = ({ entry, widgetFor }) => (
  <BlogPagePreview
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true
    }}
  />
);

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPreview;
