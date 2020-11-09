import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product, key) => {
          return (
            <article key={product.id}>
              <div>
                <Image fluid={product.image.fluid} alt={product.title} />
              </div>
              <h3>
                {product.title}
                <span>${product.price}</span>
              </h3>
              <Link to={`${product.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        info {
          info
        }
        slug
      }
    }
  }
`

export default Products
