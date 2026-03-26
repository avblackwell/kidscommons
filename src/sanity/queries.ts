import { client } from "./client"

// Site settings (hours, contact info, social links)
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      title,
      description,
      phone,
      email,
      address,
      hours,
      socialLinks,
      ticketsUrl,
      membershipUrl,
      donateUrl,
      shopUrl
    }`
  )
}

// All exhibits
export async function getExhibits() {
  return client.fetch(
    `*[_type == "exhibit"] | order(order asc){
      _id,
      name,
      slug,
      description,
      image,
      order
    }`
  )
}

// All team members
export async function getTeamMembers() {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc){
      _id,
      name,
      title,
      email,
      photo,
      bio,
      order
    }`
  )
}

// Board members
export async function getBoardMembers() {
  return client.fetch(
    `*[_type == "boardMember"] | order(name asc){
      _id,
      name,
      title,
      emeritus
    }`
  )
}

// Events (upcoming)
export async function getUpcomingEvents() {
  const now = new Date().toISOString()
  return client.fetch(
    `*[_type == "event" && date >= $now] | order(date asc)[0...10]{
      _id,
      title,
      slug,
      date,
      endDate,
      description,
      image,
      location
    }`,
    { now }
  )
}

// Summer camps
export async function getSummerCamps() {
  return client.fetch(
    `*[_type == "summerCamp"] | order(startDate asc){
      _id,
      title,
      ageRange,
      startDate,
      endDate,
      price,
      description,
      spotsRemaining
    }`
  )
}

// School programs
export async function getSchoolPrograms() {
  return client.fetch(
    `*[_type == "schoolProgram"] | order(order asc){
      _id,
      title,
      gradeLevel,
      description,
      duration,
      standards,
      order
    }`
  )
}

// Membership tiers
export async function getMembershipTiers() {
  return client.fetch(
    `*[_type == "membershipTier"] | order(price asc){
      _id,
      name,
      price,
      description,
      benefits,
      featured,
      color
    }`
  )
}

// Generic page content (for pages managed in CMS)
export async function getPage(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      slug,
      body,
      seoTitle,
      seoDescription
    }`,
    { slug }
  )
}

// Job listings
export async function getJobListings() {
  return client.fetch(
    `*[_type == "jobListing" && !expired] | order(postedDate desc){
      _id,
      title,
      type,
      description,
      requirements,
      postedDate
    }`
  )
}
