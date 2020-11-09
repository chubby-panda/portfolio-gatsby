import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import "./PortfolioList.css"

const getPortfolioItems = graphql`
  {
    allContentfulPortfolioItem {
      nodes {
        id
        title
        createdAt
        description {
          description
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

const ComponentName = () => {
  const {
    allContentfulPortfolioItem: { nodes: portfolioItems },
  } = useStaticQuery(getPortfolioItems)

  const getSubString = string => {
    if (string.length > 150) {
      string = string.substring(0, 150)
      return string
    }
  }

  return (
    <div id="portfolio-list">
      {portfolioItems.map((item, key) => {
        return (
          <article id="portfolio-item" key={item.id}>
            <div className="thumbnail">
              <Image fluid={item.images[0].fluid} alt={item.title} />
            </div>
            <div className="portfolio-item-text">
              <h4>{item.title}</h4>
              <p>{getSubString(item.description.description)}...</p>
            </div>
            <Link className="btn" to="/">
              Read more
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export default ComponentName
