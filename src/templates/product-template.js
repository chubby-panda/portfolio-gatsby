import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const {
    product: {
      title,
      price,
      image: { fluid },
      info: { info },
    },
  } = data
  return (
    <Layout>
      <div>
        <Link to="/products">Back to Products</Link>
      </div>
      <section className="single-product">
        <article className="single-product-image">
          <Image fluid={fluid} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to Cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
      price
      title
    }
  }
`

export default ComponentName
