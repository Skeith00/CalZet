<template>

<nav class="navbar navbar-default">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" data-target="#navbar-menu" data-toggle="collapse" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <!-- Collection of nav links and other content for toggling -->
    <div id="navbar-menu" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
            <li v-for="tab in tabs" :class="(currenttab == tab.tab)?'active':''"><a @click="setTab(tab.tab)" :href="tab.link">{{tab.tab}}</a></li>
        </ul>
        <!--<ul class="nav navbar-nav navbar-right">
            <li><a href="#">Login</a></li>
        </ul>-->
    </div>
</nav>

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
    name: 'customnav',
    props: ['currenttab'],
    data() {
        return {
            tabs: [
                {tab: "Inicio", link: "./index.html"},
                {tab: "Habitacions", link: "./habitacions.html"},
                {tab: "La casa", link: "./casa.html"},
                {tab: "Tarifes", link: "./tarifes.html"},
                {tab: "Ubicació", link: "./ubicacio.html"},
                {tab: "Contacte", link: "./contacte.html"},
            ],
        //currentTab: 'Inicio',
        }
    },
    methods: {
        setTab(name) {
            this.currentTab = name;  
        }
    },
}
</script>
