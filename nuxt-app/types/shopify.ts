import type { Product, Image } from "shopify-buy";

// デフォルトの型に無いプロパティを追加
interface CustomImage extends Image {
  width: number;
  height: number;
}

export interface CustomProduct extends Product {
  descriptionHtml: string;
  images: Array<CustomImage>;
}
