import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-shopify"],

  shopify: {
    // shopify domain
    domain: process.env.SHOPIFY_DOMAIN,

    /*
      ストアフロントアクセストークン
    */
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,

    /*
      unoptimized: true => SDKの拡張
      StorefrontAPIで使用できるすべてのフィールドがSDKを介して公開されるわけではありません。
      最適化されていないバージョンのSDKを使用すると、独自のクエリを簡単に作成できます。
      これを行うには、UMDUnoptimizedビルドを使用します。
      Doc: https://shopify.github.io/js-buy-sdk/
    */
    unoptimized: false,

    // 翻訳されたコンテンツを返すための言語を設定する
    language: "ja-JP",
  },
});
