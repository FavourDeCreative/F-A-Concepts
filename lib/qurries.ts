// ========================================
// FEATURED POST
// ========================================

export const featuredPostQuery = `
*[_type=="post" && featured == true][0]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,

  author->{
    name,
    image
  },

  categories[]->{
    title,
    slug
  }
}
`;

// ========================================
// ALL POSTS (Blog Page)
// ========================================

export const postsQuery = `
*[
  _type=="post" &&
  featured != true
] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,

  author->{
    name,
    image
  },

  categories[]->{
    title,
    slug
  }
}
`;

// ========================================
// SINGLE POST
// ========================================

export const postQuery = `
*[_type=="post" && slug.current==$slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  coverImage,

  author->{
    _id,
    name,
    role,
    image,
    bio
  },

  categories[]->{
    title,
    slug
  }
}
`;

// ========================================
// RELATED POSTS
// ========================================

export const relatedPostsQuery = `
*[
  _type=="post" &&
  slug.current != $slug
] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,

  categories[]->{
    title
  }
}
`;