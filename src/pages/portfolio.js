import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Portfolio = ({ data }) => {
    const {
      allContentfulPortfolioItem: { nodes: portfolioItems },
    } = data
    return (
      <Layout>
        <section>
          {portfolioItems.map((portfolioItem, key) => {
            return (
              <article key={portfolioItem.id}>
                <div>
                    {portfolioItem.images.map((image, key) => {
                        return (
                            <Image fluid={image.fluid} alt={portfolioItem.title} />
                        )
                    })}
                </div>
                <h3>
                  {portfolioItem.title}
                  <span>${portfolioItem.createdAt}</span>
                </h3>
                <Link to={`${portfolioItem.slug}`}>More details</Link>
              </article>
            )
          })}
        </section>
      </Layout>
    )
  }

export const query = graphql`
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
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default Portfolio