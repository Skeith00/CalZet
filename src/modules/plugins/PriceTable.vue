<template>
    <section class="priceTable">
        <h3>
            {{name}}
        </h3>
        <p class="rate">
            {{price}}<span class="currency">€</span><span class="each">/persona</span>
        </p>
        <p v-if="comment!=''" class="description">{{comment}}</p>
    </section>
</template>
<script>
export default {
    props: ['name','price','comment'],
    name: "pricetable",
}
</script>
