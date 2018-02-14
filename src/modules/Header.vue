<template>
    <header class="header">
        <nav class="navbar header calzet is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand header">
                <a class="navbar-item" href="index.html">
                    <img src="dist/images/calzet-logo2.png" alt="Cal Zet" class="logo">
                </a>
                <div :class="['navbar-burger', 'burger', ' is-dark', 'header', {'is-active':toggled}]" data-target="navbarExampleTransparentExample" @click="togglenavmenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" :class="['navbar-menu', {'is-active':toggled}]">
                <div class="navbar-end">
                    <a v-for="tab in tabs" class="navbar-item" @click="setTab(tab.code)" :href="tab.link">{{tab.title[getLang.code]}}</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" style="width: 130px">
                            {{getLang.name}}
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a v-for="language in langsettings.languages"
                                :class="['navbar-item', { 'is-active': (language.code == getLang.code) }]" 
                                @click="setLang(language)"
                                href="#" :key="language.code">
                                <p style="margin-left: 8px"><img :src="'dist/images/flags/'+language.flag" alt="flag">
                                {{language.name}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item" style="padding-left: 25px">
                        <div class="field is-grouped">
                            <p class="control">
                                <a href="https://www.facebook.com/Cal-Zet-1691476634451525/"><i class="fab fa-facebook-f fa-lg"></i></a>
                            </p>
                            <p class="control">
                                <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                            </p>
                            <p class="control">
                                <a href="#"><i class="fab fa-google-plus-g fa-lg"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>            
        </nav>
    </header>
</template>
<script>

export default {
  name: 'customheader',
      props: ['currenttab'],
    data() {
        return {
            tabs: [
                {title: { CA: "Contacte", ES: "Contacto", AR: "Contacte", EN: "Contact"}, link: "./contacte.html", code: "ct"},
            ],
            langsettings: {
                languages: [
                    {name: "Català", code: "CA", flag: "catalonia.png"},
                    {name:"Castellano", code: "ES", flag: "es.png" },
                    {name:"Aranés", code: "AR", flag: "ar.png"},
                    {name:"English", code: "EN", flag: "eu.png"},
                ]
            },
            toggled: false,
        //currentTab: 'Inicio',
        }
    },
    methods: {
        setTab(code) {
            this.currentTab = code;
        }, 
        setLang(lang) {
            this.$store.dispatch('changeLang', lang);
            this.toggled = false;
        },
        togglenavmenu() {
            this.toggled = (this.toggled==true?false:true);
        },
    },
    computed: {
        getLang(){
            return this.$store.getters.getCurrentLang;
        },
    }
}
</script>