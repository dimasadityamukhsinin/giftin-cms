import { FiGift } from "react-icons/fi";

export default {
  name: "productVariant",
  title: "Variant",
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
  icon: FiGift,
  fields: [
    {
      name: "productTitle",
      title: "Product Title",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "variantTitle",
      title: "Variant Title",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "productId",
      title: "Product ID",
      type: "number",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "variantId",
      title: "Variant ID",
      type: "number",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "price",
      title: "Price (Rp)",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
      readOnly: true,
      fieldset: "shopify",
    },
    {
      title: "Display Title",
      name: "title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      variantTitle: "variantTitle",
      productTitle: "productTitle",
    },
    prepare({
      title,
      variantTitle,
      productTitle = "(missing product)"
    }) {
      const getSubtitle = () => {
        if (title) {
          return title === variantTitle ? null : `(${variantTitle})`;
        } else {
          return productTitle;
        }
      };

      return {
        title: title ? title : variantTitle,
        subtitle: getSubtitle(),
      };
    },
  },
};
