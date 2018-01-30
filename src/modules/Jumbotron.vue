<template>
    <div class="jumbotron">
        <h1 class="display-3">Montellà de Cadí</h1>
        <p class="lead">Montellà és una vila del municipi cerdà de Montellà i Martinet. Es troba a una altitud de 1.153 metres sobre el nivell del mar.</p>
        <hr class="my-4">
        <div v-for="sight in sights">
            <p>{{sight.name}}</p>
            <ul>
                <li v-for="activitie in sight.activities" v-text="activitie"></li>
            </ul>
        </div>
        <!--<p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>-->
    </div>  
</template>

<script>
export default {
    name: 'jumbotron',
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
