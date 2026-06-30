// ========================================
// SERVICES
// ========================================



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
  service->{
    title
  }
}
`;

// ========================================
// ALL PROJECTS (Projects Page)
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
// SINGLE PROJECT (Slug Page)
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
  _type == "project" &&
  slug.current != $slug
] | order(completedAt desc)[0...3]{
  _id,
  title,
  slug,
  vehicle,
  coverImage,
  service->{
    title
  }
}
`;

// ========================================
// PREVIOUS PROJECT
// ========================================

export const previousProjectQuery = `
*[
  _type == "project" &&
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
  _type == "project" &&
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
*[_type == "testimonial"] | order(_createdAt desc){
  _id,
  name,
  role,
  review
}
`;


// services Querry
export const servicesQuery = `
*[_type=="service"]|order(order asc){

_id,
title,
slug,
coverImage,
shortDescription

}
`;
//services slug
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
//Related services
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

//service projects querry

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