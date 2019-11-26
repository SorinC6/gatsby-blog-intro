import React from "react";
import { Root } from "../components/~common/basicPageStyles";
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
