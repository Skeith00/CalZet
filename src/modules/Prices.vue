<template>
    <div class="content panel">
        <div class="headerpanel">
            <div>
                <span><i class="fas fa-euro-sign fa-3x"></i></span>
            </div>
            <div>
                <h5>Preus</h5>
            </div>
		</div>
        <div>
            <pricetable></pricetable>
            <pricetable></pricetable>
        </div>
    </div>     
</template>

<script>
import PriceTableVue from './plugins/PriceTable.vue';

export default {
    name: 'prices',
    components: {
       'pricetable': PriceTableVue
    }
}
</script>