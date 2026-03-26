import { defineType, defineField } from "sanity"

export default defineType({
  name: "summerCamp",
  title: "Summer Camp",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Camp Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ageRange",
      title: "Age Range",
      type: "string",
      description: 'e.g. "4-6", "7-9", "10-12"',
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "spotsRemaining",
      title: "Spots Remaining",
      type: "number",
      description: "Leave blank to hide availability.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "ageRange" },
  },
})
