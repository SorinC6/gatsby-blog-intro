import React from "react";
import { Root } from "../components/~common/basicPageStyles";
import Layout from "../components/Layout";

export function ContactPageTemplate({}) {
  return (
    <Root>
      <h1>Contact Page</h1>
    </Root>
  );
}

ContactPageTemplate.propTypes = {};

function ContactPage() {
  return (
    <Layout>
      <ContactPageTemplate />
    </Layout>
  );
}

ContactPage.propTypes = {};

export default ContactPage;
