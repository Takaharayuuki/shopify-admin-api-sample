<script setup lang="ts">
const nuxtApp = useNuxtApp();
const route = useRoute();

const product = await nuxtApp.$shopify.product.fetch(route.params.id);
</script>
<template>
  <NuxtLayout>
    <NuxtLink to="/products"> products </NuxtLink>
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
  </NuxtLayout>
</template>
