import { FiGrid } from "react-icons/fi";

export default {
  name: "collection",
  title: "Collection",
  type: "document",
  __experimental_actions: ["update", "publish"], // disable for initial publish
  icon: FiGrid,
  fields: [
    {
      name: "title",
      title: "Collection Title",
      type: "string",
      readOnly: true,
    },
    {
      name: "collectionId",
      title: "Collection ID",
      type: "number",
      readOnly: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      readOnly: true,
    },
    {
      name: "product",
      title: "Product",
      type: "array",
      of: [
        {
          title: "Product",
          name: "product",
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title, slug }) {
      return {
        title: title,
        subtitle: slug,
      };
    },
  },
};
