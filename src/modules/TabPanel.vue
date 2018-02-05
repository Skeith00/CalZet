<template>
    <div class="tabs is-toggle is-fullwidth">
        <ul>
            <li v-for="tab in tabs" :class="{'is-active':currenttab == tab.code}">
                <a @click="setTab(tab.code)" :href="tab.link">
                    <span class="icon is-small">
                        <i :class="['fas', tab.icon]"></i>
                    </span>
                    <span>{{tab.name}}</span>
                </a>
            </li>
        </ul>
    </div>

    <!--<header class="masthead clearfix">
      <div class="inner">
          <nav class="nav nav-masthead">
            <a :class="['nav-link', (currentTab == 'home')?'active':'']" @click="setTab('home')" href="#">Home</a>
            <a :class="['nav-link', (currentTab == 'features')?'active':'' ]" @click="setTab('features')" href="#">Features</a>
            <a :class="['nav-link', (currentTab == 'contact')?'active':'' ]" @click="setTab('contact')" href="#">Contact</a>
          </nav>-->
</template>
<script>
export default {
    name: 'customtabpanel',
    props: ['currenttab'],
    data() {
        return {
            tabs: [
                {name: "Descripció", code: "info", link: "#", icon: "fa-info-circle"},
                {name: "La casa", code: "home", link: "#", icon: "fa-home"},
                {name: "Habitacions", code: "room", link: "#", icon: "fa-bed"},
                {name: "Tarifes", code: "price", link: "#", icon: "fa-euro-sign" },
                {name: "Ubicació", code: "location", link: "#", icon: "fa-compass"},

            ],
        //currentTab: 'Inicio',
        }
    },
    methods: {
        setTab(code) {
            this.currentTab = code;  
        }
    },
}
</script>
