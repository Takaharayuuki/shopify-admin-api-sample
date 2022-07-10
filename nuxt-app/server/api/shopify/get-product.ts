import type { IncomingMessage, ServerResponse } from "http";
import { CustomProduct } from "~/types/shopify";

import client from "./client";
import Url from "url";

export default async (
  req: IncomingMessage,
  _res: ServerResponse,
  _next: any
) => {
  console.log("/api/shopify/get-project");

  const currentUrl = Url.parse(req.url, true);
  const productId = currentUrl.query.id;
  let product: CustomProduct | undefined;

  // productIdが存在 && 型stringの場合
  if (productId && typeof productId === "string") {
    await client.product
      .fetch(productId)
      .then((response: CustomProduct) => (product = response));
  }

  return product;
};
