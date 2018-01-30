<template>
  <header>  
    <div class="calzet-header">
      <a class="components-header component-logo" href="index.html">
        <img class="logo" src="dist/images/calzet-logo.png" alt="">
      </a>
      <nav class="components-header component-nav navbar">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav flex-row">
                  <li v-for="tab in tabs" :class="(currenttab == tab.tab)?'active':''"><a @click="setTab(tab.tab)" :href="tab.link">{{tab.tab}}</a></li>
                </ul>
              </div>
          </div>

          <!-- Collection of nav links and other content for toggling -->
      </nav>
    </div>
	</header>
</template>

<script>

export default {
  name: 'customheader',
      props: ['currenttab'],
    data() {
        return {
            tabs: [
                {tab: "Contacte", link: "./contacte.html"},
                {tab: "Habitacions", link: "./habitacions.html"},
                {tab: "La casa", link: "./casa.html"},
                {tab: "Tarifes", link: "./tarifes.html"},
                {tab: "Ubicació", link: "./ubicacio.html"},
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