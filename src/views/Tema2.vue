<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Europa Central
    
    p.mb-5 La gastronomía de esta región combina ingredientes locales con influencias de diferentes países vecinos.

    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in" alt="imagen decorativa")
        h3(data-aos="fade-left") #[em Borsch]
    
    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-7.col-xl-8.pe-lg-3.mb-4.order-2.order-lg-1
        p(data-aos="fade-left") Es una espectacular sopa de remolacha, aunque se prepara en Rusia y algunos países de Europa, la versión de la cual vamos a hablar en esta actividad tiene que ver con el referente polaco.
        .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-3.mb-4(style="background: #F9E69F" data-aos="fade-right")
          .col-auto
            img(src="@/assets/curso/temas/tema2/img-2.svg" alt="imagen decorativa").img65
          .col-12.col-md
            p Un consomé de carne es el punto de partida, en el cual se adicionará remolacha pelada y cortada en cubos, apio, zanahoria, cebolla cabezona, una pequeña cantidad de clavos de olor, laurel y tomillo. Cocinar hasta ablandar, retirar los clavos de olor y el laurel. Licuar y hemir nuevamente.
        p.mb-0(data-aos="fade-right") #[strong Importante].
          br
          | Siempre que licúe alguna crema, lleve al fuego nuevamente y hierva para prevenir algún tipo de fermentación generada por efecto de la oxigenación lograda en la preparación dentro de la licuadora por el movimiento de las cuchillas. Servir con tostadas de pan, con aros de cebolla, salmón y limón.
      .col-lg-5.col-xl-4.order-1.order-lg-2.mb-4
        img(src="@/assets/curso/temas/tema2/img-1.png" data-aos="fade-left" alt="sopa de remolacha de origen ucraniano").mx-auto

    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in" alt="imagen decorativa")
        h3(data-aos="fade-left") #[em Fondue]
    
    .d-flex.flex-wrap.justify-content-center.mb-4
      .col-lg-8.col-xl-7.pe-lg-3.order-2.order-lg-1
        p(data-aos="fade-right") Mezcla de quesos suizos fundidos con ajo, vino blanco y #[em kirsch], acompañada de pan.
        .lista-ingredientes.mb-4(data-aos="fade-left")
          .d-flex.flex-wrap.align-items-center
            .col
              p.fw-bold #[em Fondue] para 4 personas:
              ul.ul-marker-check
                li Queso #[em gruyere]: 200 g
                li Queso #[em emmental]: 200 g
                li Queso #[em tilsiter]: 200 g
            .col-auto.d-none.d-md-flex
              img(src="@/assets/curso/temas/tema2/img-4.svg" alt="imagen decorativa").img65
        p.mb-0(data-aos="fade-right") Hablar de fondue es referirse a una combinación de quesos maduros muy populares en Suiza, como #[em appenzeller, emmental] y otros tantos, que se funden en un recipiente especial denominado #[em caquelon]. Este recipiente se frota con dientes de ajo, se adiciona vino blanco y un licor de cerezas llamado kirsch.
      .col-lg-4.col-xl-5.order-1.order-lg-2.mb-4
        img.mb-auto(src="@/assets/curso/temas/tema2/img-3.png" data-aos="fade-left" alt="Delicioso y cremoso queso derretido")

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-4.col-xl-5.mb-4
        img.mb-auto(src="@/assets/curso/temas/tema2/img-5.png" data-aos="fade-left" alt="Deliciosos bocadillos de queso derretido")
      .col-lg-8.col-xl-7.ps-lg-3
        p.p-3(style="background: #C6E697" data-aos="fade-right") Todo se incorpora haciendo movimientos continuos para evitar que se pegue por efecto del fuego. Algunos suizos dicen que esta mezcla debe hacerse en forma de ocho dentro del #[em caquelon]. Una vez homogénea, se sirve al centro de la mesa.
        .d-flex.flex-wrap.justify-content-center.align-items-center.gap-4(data-aos="fade-right")
          .col-auto.d-none.d-md-block
            img(src="@/assets/curso/temas/tema2/img-6.svg" alt="imagen decorativa").img65
          .col-12.col-md
            p Se introducen trozos de pan que deben salir cubiertos por esta fantástica combinación de quesos y sus aromas. También cuenta la tradición que a quien se le caiga uno de los trozos de pan dentro de la preparación deberá invitar el vino para todos.
    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in" alt="imagen decorativa")
        h3(data-aos="fade-left") #[em Chucrut]
    
    p(data-aos="fade-left") Es repollo fermentado acompañado de salchichas alemanas, preparado mediante deshidratación con sal y fermentación.

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-7.col-xl-8.pe-lg-3.mb-4.order-2.order-lg-1
        .lista-ingredientes.mb-3(data-aos="fade-left")
          .d-flex.flex-wrap.align-items-center
            .col
              p.fw-bold Ingredientes para 6 personas:
              ul.ul-marker-check
                li Repollo: 1 kg
                li Sal: 15 g
            .col-auto.d-none.d-md-flex
              img(src="@/assets/curso/temas/tema2/img-8.svg" alt="imagen decorativa").img65
        p El proceso de preparación es. 
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.v--green(data-aos="fade-right")
              span.fw-bold(style="color: black") 1
            | Lavar muy bien el repollo y quitar algunas de las hojas externas y las partes cafés o negras, que pueden contener algún tipo de hongo.
          li
            .lista-ol--cuadro__vineta.v--green(data-aos="fade-right")
              span.fw-bold(style="color: black") 2
            | Cortar en julianas y pesar. Por cada 1000 g de repollo, adicionar 15 g de sal y llevar a un frasco de vidrio, presionando con un mortero para que los líquidos propios del repollo salgan por efecto de la deshidratación causada por la sal. Esto ocasionará la salmuera.
          li
            .lista-ol--cuadro__vineta.v--green(data-aos="fade-right")
              span.fw-bold(style="color: black") 3
            | Tapar y esperar mínimo cuatro semanas para consumir. Habitualmente se sirve con salchichas alemanas, de donde es originaria esta técnica.
      .col-lg-5.col-xl-4.order-1.order-lg-2.mb-4
        img(src="@/assets/curso/temas/tema2/img-7.png" data-aos="fade-left" alt="Sauerkraut en un cuenco en una mesa de madera Comida tradicional alemana").mx-auto

    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in" alt="imagen decorativa")
        h3(data-aos="fade-left") #[em Pierogi]
    
    .d-flex.flex-wrap.mx-auto(style="background-color: #E8F5D5")
      img(src="@/assets/curso/temas/tema2/img-9.jpg" data-aos="fade-right" alt="A close up of a food").col-lg-4
      .px-4.py-3.col-lg-8.mb-0(data-aos="fade-left")
        img(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 85px" alt="imagen decorativa").mb-3
        p.mb-0 Son raviolis polacos rellenos de carne o puré de papa, hervidos y servidos con mantequilla. Se trata de una masa sencilla a partir de huevo, harina de trigo, sal y agua. Se rellenan de carne de ternera o una mezcla de esta con cerdo, incluso con puré de papa en algunos casos. Posteriormente, se hierven en abundante agua hasta que suban a la superficie.
</template>

<script>
export default {
  name: 'Tema2',
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
