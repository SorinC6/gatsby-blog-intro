import { graphql, useStaticQuery } from "gatsby";

function useAboutData() {
  const data = useStaticQuery(
    graphql`
      query AboutQuery {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "About us" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `
  );
  console.log("QUERY ", data);
  return data.allMarkdownRemark.edges[0].node;
}

export default useAboutData;
