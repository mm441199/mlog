const path = require('path');
// const { threadId } = require('worker_threads')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const blogTagsTemplate = path.resolve("src/templates/blog-category.js");
  
  const result = await graphql(`
    {
      blogs: allContentfulBlog {
        edges {
          node {
            slug
            id
            tags
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
    }
  `)

  if(result.errors) {
    throw result.errors
  }

  const edges = result.data.blogs.edges;

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
  
  edges.forEach(edge => {
    edge.node.tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: blogTagsTemplate,
        context: {
          tags: tag
        },
      });
    })
  });
};
