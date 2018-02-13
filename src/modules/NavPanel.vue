<template>
    <div :class="['tabs','is-toggle','is-fullwidth','is-hidden-touch', {'fixedTabs':fixedTabs},{'calzet':fixedTabs}] ">
        <ul>
            <li v-for="tab in tabs" :class="{'is-active':currenttabnav == tab.code}" :key="tab.code">
                <a @click="setTabNavBar(tab.code)" :href="tab.link">
                    <span class="icon is-small">
                        <i :class="['fas', tab.icon]"></i>
                    </span>
                    <span>{{tab.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    //props: ['currenttab'],
    data() {
        return {
            tabs: [
                {name: "Descripció", code: "description", link: "#description", icon: "fa-info-circle"},
                {name: "La casa", code: "house", link: "#house", icon: "fa-home"},
                {name: "Habitacions", code: "rooms", link: "#rooms", icon: "fa-bed"},
                {name: "Tarifes", code: "prices", link: "#prices", icon: "fa-euro-sign" },
                {name: "Ubicació", code: "location", link: "#location", icon: "fa-compass"},
            ],
            fixedTabs: false,
            currenttabnav: "",
        //currentTab: 'Inicio',
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        setTabNavBar(code) {
            this.currenttabnav = code;  
        },
        handleScroll() {
            var scrollPos = document.body.scrollTop;
            var scrollTopContainer = document.getElementById("mainContainer").offsetTop;
            if(scrollPos>scrollTopContainer-2)
                this.fixedTabs = true;
            else   
                this.fixedTabs = false;

            /* TODO: Actualment, Ubicacio no s'arriba a seleccionar mai al fer scroll, 
                    ja que scrollTop es queda a uns pixels d'arribar al principi del div.
                    Si s'amplia footer, no fara falta fer aixo. 
            var halfInnerHeight = (window.innerHeight/2)*/
            
            var currentnav;
            this.tabs.forEach(function(item){
                var refElement = document.getElementById(item.code);                
                if (refElement.offsetTop <= scrollPos+42 && refElement.offsetTop + refElement.offsetHeight > scrollPos+42)  
                    currentnav = item.code;
            });
            this.currenttabnav = currentnav;
        }
    },
}
</script>
