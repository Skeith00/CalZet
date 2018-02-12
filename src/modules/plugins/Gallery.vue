<template>
<!--https://vuejs.org/v2/guide/transitions.html-->
    <div @mouseover="stopRotation"
         @mouseout="startRotation"
         class="galleryComponent">
            <div @click="prev" class="arrow">
                <i class="fas fa-chevron-left fa-5x"/>
            </div>
            <div class="gallery">
                <transition name="slide-fade" mode="out-in">
                    <img :src="'dist/images/house/'+$parent.imgs[Math.abs(currentNumber) % $parent.imgs.length]" :key="'dist/images/house/'+$parent.imgs[Math.abs(currentNumber) % $parent.imgs.length]"/>
                </transition>
            </div>
            <div @click="prev" class="arrow">
                <i class="fas fa-chevron-right fa-5x"/>
            </div>
    </div>
</template>
<script>
export default {
    name: 'gallery',
    data() {
        return {
            currentNumber: 0,
            timer: null,
            imgs: ["p1090867.jpg","p1090832.jpg","k20_2662.jpg","k20_2651.jpg"]
        }
    },
    mounted() {
        this.startRotation();
    },
    methods: {
        startRotation() {
            this.timer = setInterval(this.next, 3000);
        },
        stopRotation() {
            clearInterval(this.timer);
            this.timer = null;
        },
        next() {
            this.currentNumber += 1
        },
        prev() {
            this.currentNumber -= 1
        }
    }
}
</script>