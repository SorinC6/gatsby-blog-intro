import React from "react";
import PropTypes from "prop-types";
import BlogPage from "../../templates/blog-post";

const BlogPreview = ({ entry, widgetFor }) => (
  <BlogPage
    page={{
      content: widgetFor("body"),
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      date: entry.getIn(["data", "date"]),
      title: entry.getIn(["data", "title"]),
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
