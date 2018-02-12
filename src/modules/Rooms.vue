<template>
    <div class="content panel">
        <div class="headerpanel">
            <div>
                <span><i class="fas fa-bed fa-3x"></i></span>
            </div>
            <div>
                <h2>Habitacions</h2>
            </div>
		</div>
        <p style="margin-top: 25px;">A la nostra casa rural  hi ha una capacitat per a dotze persones distribuïdes en sis habitacions dobles, dues de les quals són matrimonials.</p>
        <gallery/>
    </div>
</template>

<script>
import Gallery from "./plugins/Gallery.vue";

export default {
    name: 'rooms',
    components :  {Gallery},
    data() {
        return {
            imgs: ["p1090855.jpg","dsc_0362.jpg"],
        }
    },
}
</script>