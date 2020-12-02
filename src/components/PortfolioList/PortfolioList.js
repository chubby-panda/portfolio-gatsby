import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./PortfolioList.css"
import PortfolioCard from "../PortfolioCard/PortfolioCard"

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

const PortfolioList = () => {
  const {
    allContentfulPortfolioItem: { nodes: portfolioItems },
  } = useStaticQuery(getPortfolioItems)


  return (
    <div id="portfolio-list">
      {portfolioItems.map((item, key) => {
        return (
          <PortfolioCard item={item} />
        )
      })}
    </div>
  )
}

export default PortfolioList
