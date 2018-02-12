import Vue from 'vue';
import CustomHeader from './modules/Header.vue';
import CustomFooter from './modules/Footer.vue';
import Navbar from './modules/NavPanel.vue';
import Home from './modules/Home.vue';
import House from './modules/House.vue';
import Rooms from './modules/Rooms.vue';
import Prices from './modules/Prices.vue';
import Location from './modules/Location.vue';

/*import Rooms from './modules/Jumbotron.vue';*/

new Vue({
    el: '#root',
    data: {
        showModal: false,
    }, 
    components: {
        'customheader' : CustomHeader,
        'customfooter': CustomFooter,
        Navbar,
        'home': Home,
        'house': House,
        Rooms,
        Prices,
        Location
    }
});
