<template>
    <div class="content panel">
        <div class="headerpanel">
            <div>
                <span><i class="fas fa-euro-sign fa-3x"></i></span>
            </div>
            <div>
                <h2>Preus</h2>
            </div>
		</div>
        <div class="containerPrices">
            <pricetable v-for="rate in rates" v-bind="rate" :key="rate.name"></pricetable>
        </div>
    </div>     
</template>

<script>
import PriceTableVue from './plugins/PriceTable.vue';

export default {
    name: 'prices',
    components: {
       'pricetable': PriceTableVue
    },
    data() {
        return {
            rates: [
                {name: 'Tarifa General', price: '22', comment:''},
                {name: 'Temporada d’hivern', price: '23', comment:'Mínim 6 persones, a partir de la tercera nit 20€'},
            ]
        }
    }

}
</script>