import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import PortfolioCard from "../components/PortfolioCard/PortfolioCard"

const getPortfolioItems = graphql`
  {
    allContentfulPortfolioItem {
      nodes {
        id
        title
        createdAt
        description {
          description
          childMarkdownRemark {
            html
          }
        }
        images {
          fluid(maxWidth: 900) {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

const Portfolio = ({ data }) => {
  const {
    allContentfulPortfolioItem: { nodes: portfolioItems },
  } = useStaticQuery(getPortfolioItems)


  return (
    <Layout>
      <div id="portfolio-page">
        {portfolioItems.map((item, key) => {
          return (
            <PortfolioCard item={item} />
          )
        })}
      </div>
    </Layout>
  )
}

export default Portfolio