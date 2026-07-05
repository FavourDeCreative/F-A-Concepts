// ========================================
// FEATURED PROJECTS (Homepage)
// ========================================

export const featuredProjectsQuery = `
*[_type == "project" && featured == true] | order(completedAt desc){
  _id,
  title,
  slug,
  vehicle,
  coverImage,
  service->{title}
}
`;

// ========================================
// ALL PROJECTS
// ========================================

export const projectsQuery = `
*[_type == "project"] | order(completedAt desc){
  _id,
  title,
  slug,
  vehicle,
  completedAt,
  featured,
  coverImage,
  service->{
    title,
    slug
  }
}
`;

// ========================================
// SINGLE PROJECT
// ========================================

export const projectQuery = `
*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  vehicle,
  completedAt,
  featured,
  coverImage,
  gallery,
  description,
  service->{
    title,
    slug
  }
}
`;

// ========================================
// RELATED PROJECTS
// ========================================

export const relatedProjectsQuery = `
*[
  _type=="project" &&
  slug.current != $slug
] | order(completedAt desc)[0...3]{
  _id,
  title,
  slug,
  vehicle,
  coverImage,
  service->{title}
}
`;

// ========================================
// PREVIOUS PROJECT
// ========================================

export const previousProjectQuery = `
*[
  _type=="project" &&
  completedAt < $completedAt
] | order(completedAt desc)[0]{
  _id,
  title,
  slug
}
`;

// ========================================
// NEXT PROJECT
// ========================================

export const nextProjectQuery = `
*[
  _type=="project" &&
  completedAt > $completedAt
] | order(completedAt asc)[0]{
  _id,
  title,
  slug
}
`;

// ========================================
// TESTIMONIALS
// ========================================

export const testimonialsQuery = `
*[_type=="testimonial"] | order(_createdAt desc){
  _id,
  name,
  role,
  review
}
`;

// ========================================
// SERVICES
// ========================================

export const servicesQuery = `
*[_type=="service"] | order(order asc){
  _id,
  title,
  slug,
  coverImage,
  shortDescription
}
`;

export const serviceQuery = `
*[
  _type=="service" &&
  slug.current==$slug
][0]{
  _id,
  title,
  slug,
  coverImage,
  shortDescription,
  description,
  benefits
}
`;

export const relatedServicesQuery = `
*[
  _type=="service" &&
  slug.current!=$slug
][0...3]{
  _id,
  title,
  slug,
  coverImage
}
`;

export const serviceProjectsQuery = `
*[
  _type=="project" &&
  service->slug.current==$slug
]{
  _id,
  title,
  slug,
  coverImage,
  vehicle
}
`;

// ========================================
// FEATURED POST
// ========================================

export const featuredPostQuery = `
*[_type=="post" && featured==true][0]{
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
// ALL POSTS
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