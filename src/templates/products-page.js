import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

export function ProductsPageTemplate({}) {
  return (
    <Root>
      <h1>Products Page</h1>
    </Root>
  );
}

ProductsPageTemplate.propTypes = {};

function ProductsPage() {
  return (
    <Layout>
      <ProductsPageTemplate />
    </Layout>
  );
}

ProductsPage.propTypes = {};

export default ProductsPage;

const Root = styled.div`
  min-height: calc(100vh - 290px);
  padding: 0 calc((100vw - 600px) / 2);

  h1,
  h2 {
    padding: 20px;
    margin-top: 10px;
  }

  h6 {
    text-align: center;
  }

  p {
    padding: 20px 5px;
    line-height: 1.4;
    text-align: justify;
    text-justify: inter-word;
  }

  img {
    border-radius: 5px;
  }
`;
