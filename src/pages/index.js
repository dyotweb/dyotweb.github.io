import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

import WelcomeSection from "../components/Section/Welcome";
import ServiceSection from "../components/Section/Services";
import ExampleSection from "../components/Section/Example";
import ContactSection from "../components/Section/Contact";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        site: {
          siteMetadata: { facebook }
        },
        pages: { edges: pagesNode }
      }
    } = this.props;

    const pages = pagesNode.map(pageNode => pageNode.node);

    console.log(pages);

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => <Hero scrollToContent={this.scrollToContent} theme={theme} />}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {theme => (
            <React.Fragment>
              <WelcomeSection theme={theme} />
              <ServiceSection theme={theme} />
              <ExampleSection theme={theme} />
              <ContactSection theme={theme} />
            </React.Fragment>
          )}
          {/* {theme => pages.map((page, index) => <Page key={index} page={page} theme={theme} />)} */}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pagesPreview//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          excerpt(format: HTML)
          id
          html
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
  }
`;

//hero-background
