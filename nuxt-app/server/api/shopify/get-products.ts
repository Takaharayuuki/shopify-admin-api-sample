import type { IncomingMessage, ServerResponse } from "http";
import { CustomProduct } from "~/types/shopify";

import client from "./client";

/**
 * req は Node.js の http リクエストオブジェクト
 * res は Node.js の http レスポンスオブジェクト
 * next は、次のミドルウェアを起動するために呼び出す関数
 * https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
 */
export default async (
  _req: IncomingMessage,
  _res: ServerResponse,
  _next: any
) => {
  console.log("/api/shopify/get-projects");

  let products: CustomProduct[] = [];

  await client.product
    .fetchAll()
    .then((response: CustomProduct[]) => (products = response));

  return products;
};
