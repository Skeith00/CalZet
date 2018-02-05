<template>
    <div class="content panel">
        <div class="headerpanel">
            <div>
                <span><i class="fas fa-info-circle fa-3x"></i></span>
            </div>
            <div>
                <h5>Descripció</h5>
            </div>
		</div>
        <h2>Montellà de Cadí</h2>
        <p>Montellà és una vila del municipi cerdà de Montellà i Martinet. Es troba a una altitud de 1.153 metres sobre el nivell del mar.</p>
        <hr>
        <div class="columns is-desktop is-multiline is-centered">
            <div v-for="sight in sights"  style="margin: 25px;">
                <h4>{{sight.name}}</h4>
                <ul>
                    <li v-for="activitie in sight.activities" v-text="activitie"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
		    sights: [
			{
				name: 'Llocs d’interès:', activities: ["Església romànica de Sant Genís (segle XI).", "Parc dels Búnquers ( Memòria històrica)."],
			},
			{
				name: 'Camins i recorreguts que podem fer des de Montellà:', 
                activities: ["Prat d’Aguiló", "Camí vell a Martinet", "Camí del Tossal", "GR-150 (a Bastanist o Santa Eugènia)", 
                    "PR-124 (Pista a la Torre de Sant-Romà)","les Eres i Ridolaina (enllaç amb la ruta dels Segadors).","GR-150-1 (Comabona)"],
			},
			{
				name: 'Proximitat a les pistes d’esquí:', 
                activities: ["Esquí Nòrdic (Lles i Aransa) aproximadament a 14km.","Esquí Alpí (Molina i Masella)  aproximadament a 25km."],
			},
            {
                name: 'Altres pistes d’esqui alpí:', 
                activities: ["Esquí Alpí a Andorra (Pal i Arinsal).", "Esquí Alpí a França (Porté Puymorens,  Les Angles i Formigueres)."],
            }
		],
        }
    }
}
</script>
