<template>
<!--https://vuejs.org/v2/guide/transitions.html-->
    <div>
        <p>
            <a @click="prev">Previous</a> || <a @click="next">Next</a>
        </p>
            <div v-for="number in [currentNumber]" transition="fade" v-bind:key="number">
                <img :src="'dist/images/house/'+imgs[Math.abs(currentNumber) % imgs.length]"
                    @mouseover="stopRotation"
                    @mouseout="startRotation"/>
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