// Create pages dynamically

const path = require("path")

// This function must return a promise
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetPortfolioItems {
      portfolioitems: allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.portfolioitems.nodes.forEach(item => {
    createPage({
      path: `/portfolio/${item.slug}`,
      component: path.resolve(`src/templates/portfolio-item-template.js`),
      context: {
        slug: item.slug,
      },
    })
  })
}
