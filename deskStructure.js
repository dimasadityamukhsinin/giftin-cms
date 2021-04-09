import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import { FiGift, FiCopy, FiGrid } from "react-icons/fi";

const hiddenTypes = [
  "product",
  "productVariant",
  "collection",
  "page",
  "post",
  "siteSettings",
];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(() => (
          <span style={{ fontSize: "1.6rem" }} role="img">
            🌐
          </span>
        )),
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Posts"))
        .icon(() => (
          <span style={{ fontSize: "1.6rem" }} role="img">
            📄
          </span>
        )),
      S.listItem()
        .title("Products")
        .icon(FiGift)
        .schemaType("product")
        .child(S.documentTypeList("product").title("Products")),
      S.listItem()
        .title("Product Variants")
        .icon(FiCopy)
        .child(
          S.documentTypeList("product")
            .title("By Product")
            .menuItems(S.documentTypeList("product").getMenuItems())
            .filter("_type == $type")
            .params({ type: "product" })
            .child((productId) =>
              S.documentList()
                .title("Variants")
                .menuItems(S.documentTypeList("productVariant").getMenuItems())
                .filter("_type == $type && productId == $id")
                .params({
                  type: "productVariant",
                  id: Number(productId.replace("product-", "")),
                })
                .child((documentId) =>
                  S.document()
                    .documentId(documentId)
                    .schemaType("productVariant")
                )
            )
        ),
      S.listItem()
        .title("Collection")
        .icon(FiGrid)
        .schemaType("collection")
        .child(S.documentTypeList("collection").title("Collections")),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
