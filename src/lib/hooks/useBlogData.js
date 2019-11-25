import { graphql, useStaticQuery } from "gatsby";

function useLogoData() {
  const data = useStaticQuery(
    graphql`
      query BlogQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "blog-post" } }
            html: {}
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                image: featuredimage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                excerpt
              }
            }
          }
        }
      }
    `
  );
  //console.log("QUERY ", data);
  return data.allMarkdownRemark.edges;
}

export default useLogoData;
