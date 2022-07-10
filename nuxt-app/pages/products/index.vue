<script setup lang="ts">
const { data: products } = await useFetch("/api/shopify/get-products");
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
