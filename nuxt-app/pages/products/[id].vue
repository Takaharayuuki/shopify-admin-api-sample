<template>
  <NuxtLayout>
    <NuxtLink to="/products"> products </NuxtLink>

    <template v-if="product">
      <ul>
        <li>
          {{ product.title }}
          {{ product.variants[0].price }}円

          <ul>
            <li>ID: {{ product.id }}</li>
            <li
              v-for="(image, imageI) in product.images"
              :key="`image-${imageI}`"
              :style="{ display: 'inline-block', marginRight: '.5rem' }"
            >
              <img
                :src="image.src"
                :alt="`${product.title}-${imageI}`"
                :width="image.width / 20"
                :height="image.height / 20"
              />
            </li>

            <li v-html="product.descriptionHtml" />
          </ul>
        </li>
      </ul>
    </template>

    <template v-else>
      <p>商品は見つかりませんでした。</p>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
/**
 * $fetch options params
 * Doc: https://github.com/unjs/ohmyfetch#%EF%B8%8F-adding-params
 */
const { data: product } = await useFetch("/api/shopify/get-product", {
  params: route.params,
});
</script>
