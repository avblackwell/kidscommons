import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "kidscommons",
  title: "KidsCommons CMS",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Settings")
              ),
            S.divider(),

            // Content types
            S.documentTypeListItem("exhibit").title("Exhibits"),
            S.documentTypeListItem("event").title("Events"),
            S.documentTypeListItem("summerCamp").title("Summer Camps"),
            S.documentTypeListItem("membershipTier").title("Membership Tiers"),
            S.divider(),

            // Education
            S.documentTypeListItem("schoolProgram").title("School Programs"),
            S.divider(),

            // People
            S.documentTypeListItem("teamMember").title("Team Members"),
            S.documentTypeListItem("boardMember").title("Board Members"),
            S.divider(),

            // Other
            S.documentTypeListItem("jobListing").title("Job Listings"),
            S.documentTypeListItem("page").title("Pages"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
