import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  language: "ja-JP",
});

export default client;
