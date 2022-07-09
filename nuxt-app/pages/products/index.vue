<script setup lang="ts">
/* 
    useNuxtApp(): nuxt context(this)へのアクセス
    Nuxt2でinjectされた$appにアクセス可能
    参考: https://blog.logrocket.com/whats-new-nuxt-3/
  */
const nuxtApp = useNuxtApp();
console.log(nuxtApp);

// fetchAll()はPromiseが返ってくるためawaitを付け、戻り値を取得する
const products = await nuxtApp.$shopify.product.fetchAll();
console.log(products);
</script>
<template>
  <NuxtLayout>
    <ul v-for="(product, i) in products" :key="`product-${i}`">
      <li>
        <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">
          {{ product.title }}
        </NuxtLink>

        <ul v-for="(key, keyI) in Object.keys(product)" :key="`key-${keyI}`">
          <li v-if="key === 'images'">
            {{ key }}:
            <ol>
              <li
                v-for="(image, imageI) in product['images']"
                :key="`image-${imageI}`"
              >
                <ul
                  v-for="(imageKey, imageKeyI) in Object.keys(image)"
                  :key="`imageKey-${imageKeyI}`"
                >
                  <li>
                    {{ imageKey }}:
                    {{ image[imageKey] }}
                  </li>
                </ul>
              </li>
            </ol>
          </li>

          <li v-else-if="key === 'variants'">
            {{ key }}:
            <ol>
              <li
                v-for="(variant, variantI) in product['variants']"
                :key="`variant-${variantI}`"
              >
                <ul
                  v-for="(variantKey, variantKeyI) in Object.keys(variant)"
                  :key="`variantKey-${variantKeyI}`"
                >
                  <li>
                    {{ variantKey }}:
                    {{ variant[variantKey] }}
                  </li>
                </ul>
              </li>
            </ol>
          </li>

          <li v-else>
            {{ key }}:
            {{ product[key] }}
          </li>
        </ul>
      </li>
    </ul>
  </NuxtLayout>
</template>
