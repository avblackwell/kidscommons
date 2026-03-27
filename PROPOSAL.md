# KidsCommons Website Redesign Proposal

**Prepared for:** KidsCommons Board of Directors & Staff
**Prepared by:** Alex Blackwell
**Date:** March 27, 2026

---

## Executive Summary

This proposal outlines a complete redesign and rebuild of the KidsCommons website. The new site replaces the existing WordPress installation with a modern, fast, and accessible platform built on current web technologies. The result is a site that loads faster, is easier to maintain, costs less to host, and provides a significantly better experience for families, educators, and supporters visiting kidscommons.org.

---

## Why Redesign?

The current KidsCommons website runs on WordPress with the "Modernize" theme. While it has served the museum well, it presents several challenges:

- **Performance:** WordPress sites carry significant overhead — plugins, database queries, and server-side rendering slow page loads. Families searching on their phones in the car need information fast.
- **Maintenance burden:** WordPress requires constant updates to core, themes, and plugins to stay secure. Falling behind on updates creates real security risks.
- **Hosting costs:** WordPress requires a web server and database, which cost more to host than a static site.
- **Content editing friction:** Making changes to the current site requires navigating WordPress's admin interface, which can be unintuitive for non-technical staff.
- **Design limitations:** The current theme constrains what the site can look and feel like, making it difficult to create a visual identity that truly reflects KidsCommons' vibrant, playful brand.

---

## What We're Building

### A Faster, Modern Website

The new site is built with **Astro**, a modern web framework that generates static HTML pages. This means:

- **Near-instant page loads** — pages are pre-built HTML files served directly from a CDN, not generated on-the-fly by a server
- **No database required** — eliminates an entire category of security vulnerabilities and maintenance
- **99.9%+ uptime** — static sites hosted on CDNs are virtually impossible to take down
- **Lower hosting costs** — static hosting (Netlify, Vercel, or Cloudflare Pages) is free or very low cost for sites of this size

### A Content Management System Staff Can Actually Use

Content is managed through **Sanity**, a modern headless CMS that provides:

- **A clean, intuitive editing interface** — staff can update hours, exhibits, team members, camp info, events, and more without touching code
- **Real-time collaboration** — multiple editors can work simultaneously
- **Image management** — automatic optimization, cropping, and responsive image generation
- **Structured content** — content is organized into clear types (exhibits, team members, events, camps, etc.) so editors always know where to go

### A Design That Reflects the KidsCommons Brand

The new design is built from scratch around the KidsCommons visual identity:

- **Brand color palette** — KidsCommons Red, Blue, Purple, and Green used consistently throughout, with light tints for section backgrounds
- **Circular design motif** — decorative circles and dots echo the KidsCommons logo throughout the site, creating a playful, cohesive visual language
- **Nunito typeface** — a friendly, rounded font that matches the museum's welcoming personality
- **Card-based layout** — information is organized into clean, scannable cards that work beautifully on any screen size
- **Wave dividers** — decorative SVG waves between sections add visual movement and energy

---

## Site Structure

The new site is organized around how visitors actually use it:

| Section | Pages | Purpose |
|---------|-------|---------|
| **Home** | Landing page | Hero banner, quick actions, exhibit previews, Museums for All highlight, education CTA, hours & location |
| **Visit** | Plan Your Visit, Hours & Admission, Exhibits, Session Tickets, Location & Parking, Museums for All | Everything a family needs to plan a trip |
| **Memberships** | Membership tiers & benefits | Family, Family Plus, and Grandparent options with clear pricing and sign-up |
| **Education** | Overview, School Programs, Field Trip Policy | Field trip booking, outreach programs, curriculum-aligned experiences |
| **Parties & Rentals** | Birthday parties, Facility rentals | Package details and booking information |
| **Summer Camps** | Registration, Policies, Scholarships | Camp listings, age groups, and sign-up |
| **About** | Mission & History, Our Team, Board, Annual Report, Strategic Plan, Careers, Contact | Organizational information and transparency |
| **Support** | Donate, Volunteer, Kroger Rewards, Donation Request | Ways for the community to give back |

---

## Key Features

### For Families
- **"Get Tickets" button** is prominent on every page, linking directly to the ticket shop
- **Hours and admission** are easy to find from any page
- **Exhibit previews** on the homepage give a taste of what's inside
- **Museums for All** program is highlighted — SNAP/EBT cardholders see clearly that reduced admission is available
- **Mobile-first design** — the site works beautifully on phones, which is how most families will find it

### For Educators
- **Dedicated education section** with clear program options and pricing
- **Three program types** presented clearly with current pricing, group minimums, and booking info — no guesswork for educators

### For Supporters
- **Donate, Volunteer, and Kroger Rewards** pages make it easy to contribute
- **Annual Report** page provides transparency
- **Newsletter signup** in the footer captures ongoing engagement

### For Staff
- **Sanity CMS** lets authorized staff update content without developer help
- **Structured content types** for: exhibits, team members, board members, events, summer camps, school programs, membership tiers, and job listings
- **Image optimization** is automatic — upload any image and the system handles resizing and compression

---

## Accessibility

The new site is built with accessibility as a core principle, not an afterthought:

- **Skip to main content** link for keyboard users
- **Semantic HTML** — proper use of header, nav, main, section, and footer elements
- **ARIA labels** on all interactive elements
- **Breadcrumb navigation** on interior pages for clear wayfinding
- **Keyboard navigation** — full support throughout, including the mobile menu (Escape key closes it)
- **Color contrast** — brand colors meet WCAG guidelines
- **Screen reader compatible** — content structure is logical and well-labeled


---

## Technical Architecture

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Astro 5 | Static site generation, component-based, excellent performance |
| **Styling** | Tailwind CSS 4 | Utility-first CSS, consistent design system, tiny CSS bundles |
| **Interactive components** | React 19 | Used sparingly — only for mobile navigation, newsletter signup, and contact form |
| **CMS** | Sanity | Modern headless CMS with real-time editing and structured content |
| **Icons** | Lucide | Clean, consistent icon set |
| **Hosting** | Static CDN (Netlify/Vercel/Cloudflare) | Fast, reliable, low-cost |

### Performance Benefits

| Metric | Current (WordPress) | New (Astro) |
|--------|-------------------|-------------|
| Time to First Byte | ~800ms+ (server-rendered) | ~50ms (CDN-served) |
| JavaScript Shipped | Heavy (jQuery, plugins, theme scripts) | Minimal (only interactive components) |
| Security Surface | Large (PHP, MySQL, plugins) | Minimal (static HTML) |
| Hosting Cost | $10-30+/month | Free-$5/month |
| Update Maintenance | Frequent (core + plugins + theme) | Low (content-only for staff) |

---

## What's Included

- Complete site design and build across all pages listed above
- Responsive design (mobile, tablet, desktop)
- Accessibility compliance
- Sanity CMS setup with all content schemas
- Sanity CMS content population support (staff provides content; developer assists with initial upload and formatting)
- Integration with existing ticket shop (shop.kidscommons.org)
- SEO fundamentals (sitemap, meta tags, canonical URLs, semantic HTML)
- Social media links (Facebook, Instagram)
- Google Maps embed on homepage and location page
- Event calendar integration
- Analytics setup
- Newsletter service integration
- Contact form backend integration
- Search functionality

---

## What's Not Included

- Redesign or development of the ticket shop (shop.kidscommons.org)
- Third-party service accounts (email marketing, analytics, etc.)
- Photography or copywriting — content is migrated from the existing site or provided by staff
- Domain registration or DNS management fees

---

## Ongoing Maintenance

Once launched, the site requires significantly less maintenance than WordPress:

- **Content updates** — handled by staff through Sanity CMS (no developer needed)
- **Security** — static sites have virtually no attack surface; no patching cycle
- **Hosting** — managed CDN platforms handle scaling, SSL, and uptime automatically
- **Code updates** — periodic dependency updates and feature additions as needed

---

## Pricing

**Total project cost: $7,000**

All work described in the "What's Included" section is covered.

### Payment Terms

- **$3,500 due upon signing**
- **$3,500 due at launch** when the site goes live

### Revisions

This proposal includes **two rounds of design revisions** during the build phase. Additional revision rounds can be accommodated at an hourly rate of $75/hour.

---

## Timeline

| Phase | Scope | Timeline |
|-------|-------|----------|
| Design & Architecture | Site structure, component system, brand integration | Complete |
| Page Development | All pages built and styled | Complete |
| CMS Integration | Sanity schemas and content connection | Week 1 after signing |
| Content Migration | Transfer and populate all content | Weeks 1–2 after signing |
| Testing & QA | Cross-browser, mobile, accessibility testing | Week 2 after signing |
| Launch | DNS transfer and go-live | 2–4 weeks after signing |

*Note: Launch timeline depends on timely delivery of content (photos, copy, etc.) from KidsCommons staff.*

---

## Summary

This redesign gives KidsCommons a website that matches the energy and quality of the museum itself — fast, welcoming, accessible, and easy to maintain. It replaces aging WordPress infrastructure with a modern stack that costs less, loads faster, and puts content control in the hands of staff. Most importantly, it makes it easier for families to find what they need, educators to book programs, and supporters to give back.

---
