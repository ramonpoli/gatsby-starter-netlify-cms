import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import "../stylesheets/index.sass";
import FeatureGrid from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ image, title, heading, main }) => {
  const gridItems = Object.keys(main).map((image) => main[image]);
  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div
                  className="full-width-image margin-top-0"
                  style={{
                    backgroundImage: `url(${
                      !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    })`,
                  }}
                ></div>
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{title}</h1>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <p>{heading}</p>
                    </div>
                  </div>
                  <FeatureGrid gridItems={gridItems} />
                </div>
                <div className="blog-posts">
                  <h1
                    className="has-text-weight-bold is-size-1"
                    style={{
                      boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                      backgroundColor: "#f40",
                      color: "white",
                      padding: "1rem",
                    }}
                  >
                    Latest Stories
                  </h1>
                  <section className="section">
                    <div className="container">
                      <div className="content">
                        <BlogRoll />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("frontmatter :", frontmatter);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        main {
          image1 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          image2 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          image3 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          image4 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          image5 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          image6 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`;
