import $ from 'jquery';
import Vue from 'vue';
import CustomHeader from './modules/Header.vue';
import CustomFooter from './modules/Footer.vue';
import CustomPanel from './modules/Panel.vue';
import CustomNav from './modules/Nav.vue';
import CustomJumbo from './modules/Jumbotron.vue';

import 'bootstrap';

new Vue({
    el: '#root',
    data: {
		showModal: false
    }, 
    components: {
        'customheader' : CustomHeader,
        'customfooter': CustomFooter,
        'customnav': CustomNav,
        'custompanel':CustomPanel,
        'customjumbo': CustomJumbo,
    } 
});