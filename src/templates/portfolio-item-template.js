import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
// import Image from "gatsby-image"

const PortfolioItem = ({ data }) => {
  const {
    item: {
      title,
      description: {
        childMarkdownRemark: { html },
      },
      // images,
      deployedSite,
      githubUrl,
      video,
    },
  } = data

  return (
    <Layout>
      <div className="buttons">
        {githubUrl != null && (
          <a
            className="btn btn-dark"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
        )}

        {deployedSite != null && (
          <a
            className="btn btn-dark"
            href={deployedSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed App
          </a>
        )}
      </div>
      <h1>{title}</h1>

      <div className="portfolio-item-content">
        {video != null && (
          <div
            id="portfolio-item-video"
            dangerouslySetInnerHTML={{ __html: video.video }}
          ></div>
        )}
        <div
          className="portfolio-item-content-text"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePortfolioItem($slug: String!) {
    item: contentfulPortfolioItem(slug: { eq: $slug }) {
      title
      createdAt
      description {
        childMarkdownRemark {
          html
        }
      }
      images {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      deployedSite
      githubUrl
      video {
        video
      }
    }
  }
`

export default PortfolioItem
