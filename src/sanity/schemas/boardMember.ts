import { defineType, defineField } from "sanity"

export default defineType({
  name: "boardMember",
  title: "Board Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Role / Title",
      type: "string",
      description: 'e.g. "Chair", "Vice Chair", "Treasurer"',
    }),
    defineField({
      name: "emeritus",
      title: "Director Emeritus?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title" },
  },
})
