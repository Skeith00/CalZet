import Vue from 'vue';
import CustomHeader from './modules/Header.vue';
import CustomFooter from './modules/Footer.vue';
import CustomTabPanel from './modules/TabPanel.vue';
import Home from './modules/Home.vue';
import House from './modules/House.vue';

/*import Rooms from './modules/Jumbotron.vue';
import House from './modules/Jumbotron.vue';
import Prices from './modules/Jumbotron.vue';
import Location from './modules/Jumbotron.vue';*/

new Vue({
    el: '#root',
    data: {
		showModal: false
    }, 
    components: {
        'customheader' : CustomHeader,
        'customfooter': CustomFooter,
        'customtabpanel': CustomTabPanel,
        'home': Home,
        'house': House,

    } 
});