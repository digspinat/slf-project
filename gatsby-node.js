const path = require('path');
const slash = require('slash');
const {createFilePath} = require(`gatsby-source-filesystem`)
const {kebabCase, uniq, get, compact, times} = require('lodash');

//
// // Don't forget to update hard code values into:
// // - `templates/blog-page.tsx:23`
// // - `pages/blog.tsx:26`
// // - `pages/blog.tsx:121`
// const POSTS_PER_PAGE = 10;
// const cleanArray = arr => compact(uniq(arr));
//
// // Create slugs for files.
// // Slug will used for blog page path.
// exports.onCreateNode = ({node, actions, getNode}) => {
//   const {createNodeField} = actions;
  // let slug;
  // switch (node.internal.type) {
  //   case `MarkdownRemark`:
  //     const fileNode = getNode(node.parent);
  //     const [basePath, name] = fileNode.relativePath.split('/');
  //     slug = `/${basePath}/${name}/`;
  //     break;
  // }
  // if (slug) {
  //   createNodeField({node, name: `slug`, value: slug});
  // }
// };
//
// // Implement the Gatsby API `createPages`.
// // This is called after the Gatsby bootstrap is finished
// // so you have access to any information necessary to
// // programatically create pages.
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const templates = ['blogPost', 'tagsPage', 'blogPage']
      .reduce((mem, templateName) => {
        return Object.assign({}, mem,
        {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
      }, {});
    graphql(
      `
      {
        posts: allDatoCmsMenu(filter: { locale: { eq: "en"}, menu05: { eq: "Header"}}) {
          edges {
            node {
              menu05
              menu15 {
                page05
                page30
              }
              menu105{
                page05
                page30
              }
              menu60
              {
                page05
                page30
              }
              menu110{
                page05
                page30
              }
              menu90
              {
                page05
                page30
              }

            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const posts = result.data.posts.edges.map(p => p.node);
      const blogPostTemplate = path.resolve(`src/templates/pages.js`);
      // Create blog pages
      posts
        .filter(post => post.menu05.startsWith('Header'))
        .forEach(post => {
          if(typeof(post) == "object"){
            if(post.menu15 != null){
              if("menu15" in post){
                let slug = post.menu15.page30;
                createPage({
                  path: `/${slug}/`,
                  component: blogPostTemplate,
                  context: {
                    slug: `${slug}`,
                    pagetitle: post.menu15.page05
                  }
                });
              }
            }
            if(post.menu105 != null){
              if("menu105" in post){
                let slug = post.menu105.page30;
                createPage({
                  path: `/${slug}/`,
                  component: blogPostTemplate,
                  context: {
                    slug: `${slug}`,
                    pagetitle: post.menu105.page05
                  }
                });
              }
            }
            if(post.menu60 != null){
                if("menu60" in post){
                  let slug = post.menu60.page30;
                  createPage({
                    path: `/${slug}/`,
                    component: blogPostTemplate,
                    context: {
                      slug: `${slug}`,
                      pagetitle: post.menu60.page05
                    }
                  });
                }
              }
            if(post.menu110 != null){
                if("menu110" in post){
                  let slug = post.menu110.page30;
                  createPage({
                    path: `/${slug}/`,
                    component: blogPostTemplate,
                    context: {
                      slug: `${slug}`,
                      pagetitle: post.menu110.page05
                    }
                  });
                }
              }
            if(post.menu90 != null){
                if("menu90" in post){
                  let slug = post.menu90.page30;
                  createPage({
                    path: `/${slug}/`,
                    component: blogPostTemplate,
                    context: {
                      slug: `${slug}`,
                      pagetitle: post.menu90.page05
                    }
                  });
                }
              }
          }
        });
        resolve();
    });
  });
};
