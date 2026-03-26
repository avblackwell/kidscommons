import { defineType, defineField } from "sanity"

export default defineType({
  name: "membershipTier",
  title: "Membership Tier",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tier Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Annual Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured / Most Popular?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Orange", value: "orange" },
          { title: "Green", value: "green" },
          { title: "Purple", value: "purple" },
        ],
      },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `$${subtitle}/yr` : "",
    }),
  },
})
