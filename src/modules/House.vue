<template>
    <div class="content panel">
        <div class="headerpanel">
            <div>
                <span><i class="fas fa-home fa-3x"></i></span>
            </div>
            <div>
                <h5>La casa</h5>
            </div>
		</div>
        <p style="margin-top: 25px;">La casa esta distribuida en tres àmplies plantes.</p>
        <p>La planta baixa disposa de rebedor, dues habitacions i un bany.</p>
        <p>La planta central disposa de la cuina, el rebost, la sala menjador i una habitació.</p>
        <p>La planta alta disposa d’un bany, tres habitacions i la terrassa amb barbacoa.</p>
        <div id="gallery">
            <carousel :autoplay="true">
                <slide v-for="img in imgs" v-bind:data="img" v-bind:key="img.src">
                    <span class="label">
                        <img :src="'dist/images/house/'+img.src">
                    </span>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'panel',
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            imgs: [
                {src: "p1090867.jpg"},
                {src: "p1090832.jpg"},
                {src: "k20_2662.jpg"},
                {src: "k20_2651.jpg"},
            ]
        }
    }

}
</script>