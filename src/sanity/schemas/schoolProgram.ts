import { defineType, defineField } from "sanity"

export default defineType({
  name: "schoolProgram",
  title: "School Program",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Program Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gradeLevel",
      title: "Grade Level",
      type: "string",
      description: 'e.g. "Pre-K - K", "1st - 3rd", "4th - 5th"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "45 minutes", "1 hour"',
    }),
    defineField({
      name: "standards",
      title: "Indiana Standards Addressed",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "gradeLevel" },
  },
})
