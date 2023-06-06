export class WpGraphQlPostConst {
  static list = `query PostListQuery {
    posts {
        edges {
          node {
            content
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            title
          }
        }
      }
    }`;
}
