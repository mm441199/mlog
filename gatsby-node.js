const path = require('path');
const { threadId } = require('worker_threads')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  
  const result = await graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
            id
            tags
          }
        }
      }
    }
  `)

  if(result.errors) {
    throw result.errors
  }

  const edges = result.data.allContentfulBlog.edges;

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: blogPostTemplate,
      context: {
        id: edge.node.id,         
        slug: edge.node.slug,
        tags: edge.node.tags
      },
    });
  });
};
