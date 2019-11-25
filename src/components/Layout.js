import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { useSiteMetadata } from "../lib/hooks";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
    }
    html,
    body {
      margin: 0;
      color: #555;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 18px;
      line-height: 1.4;
        /* remove margin for the main div that Gatsby mounts into */
      > div {
          margin-top: 0;
        }
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #222;
      line-height: 1.1;

      + * {
      margin-top: 0.5rem;
      }
    }
`;

function Layout(props) {
  const {
    title: defaultTitle,
    description: defaultDescription
  } = useSiteMetadata();
  const title = props.title || defaultTitle;
  const description = props.description || defaultDescription;

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
