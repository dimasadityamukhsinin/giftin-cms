export default {
  name: "product",
  title: "Product",
  type: "document",
  __experimental_actions: ["update", "publish"], // disable for initial publish
  fieldsets: [
    {
      title: "Shopify",
      name: "shopify",
      description: "Synced from Shopify",
      options: { columns: 2, collapsible: true },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "shopify",
      readOnly: true,
    },
    {
      name: "id",
      title: "ID",
      type: "string",
      description: "This comes from Shopify and cannot be changed",
      readOnly: true,
      hidden: true,
    },
    {
      name: "productId",
      title: "Product ID",
      type: "number",
      description: "This comes from Shopify and cannot be changed",
      readOnly: true,
      hidden: true,
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      description: "This comes from Shopify and cannot be changed",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This comes from Shopify and cannot be changed",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
      description: "This comes from Shopify and cannot be changed",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: "productDescription",
      title: "Product Description",
      type: "blockContent",
      validation: Rule => Rule.required()
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
