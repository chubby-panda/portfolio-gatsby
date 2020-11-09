import React from "react"
import Layout from "../components/Layout/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          deserunt tempora iure iusto itaque nam totam dicta minima assumenda
          quaerat non, exercitationem distinctio, incidunt quidem.
        </p>
      </div>
    </Layout>
  )
}

export default blog
