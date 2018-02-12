<template>
    <div class="content panel">
        <div class="headerpanel">
            <div> 
                <span><i class="fas fa-compass fa-3x"></i></span>
            </div>
            <div>
                <h2>Ubicació</h2>
            </div>
		</div>
        <div>
            <!--https://developers.google.com/maps/documentation/embed/guide-->
            <p style="margin-top: 25px;">La casa està ubicada a Montellà de Cadí, la baixa Cerdanya.</p>
            <p>A 25km de Puigcerdà.</p>
            <p>A 25km de La Seu d’Urgell.</p>
            <p>A 35km d’Andorra.</p>
            <div align="center">
                <iframe id="maps"
                frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBcR1IwljyrooAU_kv_-F70qsUnpt_ILOg
                    &q=Montella
                    &attribution_source=Google+Maps+Embed+API
                    &attribution_web_url=https://calzet.wordpress.com/
                    &attribution_ios_deep_link_id=comgooglemaps://?daddr=Montella" allowfullscreen>
                </iframe>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'location',    
}
</script>