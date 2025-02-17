<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    
    .row.justify-content-center.tarjeta.mb-4(style="background-color: #F6F6F6")
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/Sintesis.svg", alt="Síntesis de  la cocina europea como una fusión de tradiciones, ingredientes locales y técnicas únicas. Se destacan tres regiones: Europa del Norte, con platos como gravlax, blinis, lutefisk y köttbullar; Europa Central, con borsch, fondue, choucroute y pierogi; y Europa del Sur, con preparaciones como paella, coq au vin, risotto milanés y ensalada griega.")
    .d-flex.justify-content-center
      a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/bullets/icono-pdf.svg")
        .anexo__texto
          p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
