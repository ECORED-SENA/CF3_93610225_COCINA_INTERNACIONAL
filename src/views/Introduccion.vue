<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .d-flex.flex-wrap.mb-5
      .col-12.col-xl-8.pe-lg-3.order-2.order-xl-1
        p.mb-4(data-aos="fade-right") La gastronomía europea es un reflejo de la riqueza cultural y la historia de sus regiones, ofreciendo una amplia variedad de sabores, ingredientes y técnicas culinarias. Desde los platos frescos y simples del norte hasta las recetas sofisticadas del sur, cada zona aporta una identidad única que ha trascendido fronteras y conquistado paladares en todo el mundo.
        .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-3.mb-4.mb-xl-0(style="background: #F9E69F" data-aos="fade-right")
          .col-auto
            img(src="@/assets/curso/temas/intro/img-2.svg" alt="imagen decorativa").img65
          .col-12.col-md
            p.mb-0 En Europa del Norte, predominan las preparaciones con pescados y técnicas de conservación, como el #[em gravlax] y el #[em lutefisk], acompañadas de recetas tradicionales como los #[em blinis] y las #[em kottbullar]. En Europa Central, se encuentran sopas contundentes como el #[em borsch] y delicias como el #[em fondue] y los #[em pierogi], que resaltan la influencia de ingredientes locales y tradiciones familiares.
        .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-3(data-aos="fade-right")
          .col-auto
            img(src="@/assets/curso/temas/intro/img-3.svg" alt="imagen decorativa").img65
          .col-12.col-md
            p.mb-0 Por su parte, Europa del Sur es conocida por sus sabores intensos y mediterráneos, con platos emblemáticos como la paella de mariscos, el #[em coq au vin] y el #[em risotto milanés]. Estos reflejan el uso de productos frescos, especias y combinaciones que han dado fama internacional a la cocina de países como España, Francia e Italia.
      .col-12.col-xl-4.mb-4.mb-xl-0.order-1.order-xl-2
        img(src="@/assets/curso/temas/intro/img-1.png" style="max-width: 400px;" data-aos="fade-left" alt="Receta de salmón ahumado Blinis con queso con crema y cebolla").mx-auto
    .container-animation
      .container-banner-footer(data-aos="fade-up")
        img(src="@/assets/curso/temas/intro/img-4.svg" alt="imagen decorativa")
        img(src="@/assets/curso/temas/intro/img-4.svg" alt="imagen decorativa")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
@keyframes moveImage1
  0%
    left: 0
  100%
    left: -100%
@keyframes moveImage2
  0%
    left: 100%
  100%
    left: 0
.container-animation
  width: 100%
  overflow: hidden
  .container-banner-footer
    min-width: 1200px
    min-height: 108px
    position: relative
    img:first-child
      position: absolute
      animation: moveImage1 20s linear infinite
      width: 200%
    img:last-child
      position: absolute
      animation: moveImage2 20s linear infinite
      width: 200%
</style>
