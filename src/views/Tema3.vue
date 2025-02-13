<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Europa del Sur

    p(data-aos="fade-right") Esta región destaca por la diversidad de sabores mediterráneos y una riqueza cultural que se refleja en cada plato.

    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h2(data-aos="fade-left" style="width: 220px") Paella de mariscos

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-7.col-xl-8.pe-lg-3.mb-4.order-2.order-lg-1
        p(data-aos="fade-left") Es un plato español de arroz con mariscos, sazonado con pimentón, ajo y perejil, cocinado en un consomé de langosta.
        .lista-ingredientes.mb-3(data-aos="fade-left")
          .d-flex.flex-wrap.align-items-start
            p.w-100.fw-bold Ingredientes para 7 personas:
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check.mb-0
                li Arroz bomba o parbolizado: 1 libra
                li Camarón tigre crudo: 100 g
                li Langostinos: 7 unidades
                li Anillos de calamar: 100 g
                li Mejillones: 100 g
                li Pimentón rojo: 50 g
                li Ajo: 10 g
                li Aceite de oliva: 100 ml
            .col-12.col-md-6.col-xl-7
              ul.ul-marker-check
                li Tomate rojo: 100 g
                li Perejil: 20 g
                li Sal: 10 g
                li Pimienta blanca: 3 g
                li Aceitunas verdes: 30 g
                li Cáscara de langostino o carcasa de langosta: 300 g
                li Mix de vegetales (apio, cebolla cabezona blanca, zanahoria, puerro): 150 g
                li Agua: 4 litros
      .col-lg-5.col-xl-4.order-1.order-lg-2.mb-4
        img(src="@/assets/curso/temas/tema3/img-1.png" data-aos="fade-left").mx-auto
    
    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-5.col-xl-4.mb-4
        img.mb-auto(src="@/assets/curso/temas/tema3/img-2.png" data-aos="fade-left")
      .col-lg-7.col-xl-8.ps-lg-3
        p(data-aos="fade-right") En el siguiente episodio, se explorará la preparación de un clásico lleno de historia y sabor: la paella de mariscos. Este plato emblemático combina texturas, colores y aromas que prometen conquistar cualquier paladar. A través de una guía paso a paso, descubrirán los secretos detrás de esta receta, aprendiendo cómo llevar a su mesa un bocado que evoca la riqueza de la cocina mediterránea.
        .tarjeta.d-flex.flex-wrap.justify-content-center.align-items-center.gap-4.p-4(data-aos="fade-right" style="background-color: #C6E697")
          .col-auto
            img(src="@/assets/curso/temas/tema3/img-3.svg")
          .col-12.col-xl
            p Lo invitamos a escuchar el siguiente Pódcast:
            .tarjeta.audio-t3.p-4
              TarjetaAudio.color-secundario.audio-c(
                texto="Preparación de paella de mariscos"
                :audio="require('@/assets/curso/temas/tema3/Audio-1.mp3')"
              )
    
    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h2(data-aos="fade-left" style="width: 220px") #[em Coq au vin]

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-7.col-xl-8.pe-lg-3.mb-4.order-2.order-lg-1
        p(data-aos="fade-left") Es un pollo francés marinado en vino tinto, cocido con tocino, cebolla y hierbas aromáticas.
        .lista-ingredientes.mb-3(data-aos="fade-left")
          .d-flex.flex-wrap.align-items-start
            p.w-100.fw-bold Ingredientes:
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check.mb-0
                li Pollo marinado con vino tinto
                li Cebolla cabezona salteada
                li Tocino de cerdo
                li Laurel
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check
                li Tomillo
                li Consomé de pollo
                li Harina de trigo
                li Pimienta
                li Perejil
                li Sal
            .col-auto.d-none.d-xl-flex
              img(src="@/assets/curso/temas/tema3/img-5.svg").img65
        p.mb-0 #[strong Preparación]
          br
          | El pollo se marina con vino y luego se dora muy bien. Se espolvorea harina y se dispone en una bandeja, a la que se le agrega el resto de los ingredientes. Se hornea durante 35 minutos con la bandeja tapada. Se sirve caliente, permitiendo disfrutar de la combinación de aromas.
      .col-lg-5.col-xl-4.order-1.order-lg-2.mb-4
        img(src="@/assets/curso/temas/tema3/img-4.png" data-aos="fade-left").mx-auto
      

    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h2(data-aos="fade-left" style="width: 220px") #[em Risotto milanés]

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-7.col-xl-8.pe-lg-3.mb-4.order-2.order-lg-1
        p(data-aos="fade-left") Arroz cremoso italiano preparado con azafrán, mantequilla y queso parmesano.
        .lista-ingredientes.mb-3(data-aos="fade-left")
          .d-flex.flex-wrap.align-items-start
            p.w-100.fw-bold Ingredientes para 5 personas:
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check.mb-0
                li Arroz arbóreo: 250 g
                li Consomé de pollo: 250 ml
                li Azafrán: 0.25 g
                li Espárragos verdes: 100 g
                li Mantequilla: 40 g
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check
                li Queso parmesano: 40 g
                li Vino blanco: 100 ml
                li Crema de leche: 40 g
                li Cebolla cabezona blanca: 30 g
                li Ajo: 5 g
            .col-auto.d-none.d-xl-flex
              img(src="@/assets/curso/temas/tema3/img-7.svg").img65
        p.mb-0 #[strong Preparación]
          br
          | El pollo se marina con vino y luego se dora muy bien. Se espolvorea harina y se dispone en una bandeja, a la que se le agrega el resto de los ingredientes. Se hornea durante 35 minutos con la bandeja tapada. Se sirve caliente, permitiendo disfrutar de la combinación de aromas.
      .col-lg-5.col-xl-4.order-1.order-lg-2.mb-4
        img(src="@/assets/curso/temas/tema3/img-6.png" data-aos="fade-left").mx-auto
    
    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-lg-3.mb-4
        img(src="@/assets/curso/temas/tema3/img-8.png" data-aos="fade-left").mx-auto
      .col-lg-9.ps-lg-3.mb-4
        p(data-aos="fade-left") El proceso de preparación es.
        ol.lista-ol--cuadro
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 1
            | Saltear la cebolla y el ajo finamente picados con mantequilla durante 1 minuto a fuego medio.
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 2
            | Adicionar el arroz y remover constantemente para permitir que se saltee.
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 3
            | Incorporar el vino blanco y no dejar de remover.
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 4
            | Adicionar el azafrán mezclado con sal y pulverizado previamente en un mortero.
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 5
            | Agregar el consomé de pollo caliente en pequeñas cantidades, permitiendo que el arroz lo absorba antes de agregar más. Este proceso toma alrededor de 13 minutos.
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 6
            | En el minuto 15, agregar los espárragos verdes pelados y el queso parmesano. Mezclar enérgicamente para obtener una preparación cremosa.
          li.mb-4(data-aos="fade-left")
            .lista-ol--cuadro__vineta.v--green
              span.fw-bold(style="color: black") 7
            | Servir caliente, asegurándose de que el arroz esté al dente.

    .d-flex.justify-content-start.mb-5
      .titulo-segundo-nivel
        img(src="@/assets/curso/temas/tema1/img-titulo.svg" data-aos="zoom-in")
        h2(data-aos="fade-left" style="width: 220px") Ensalada griega

    .d-flex.flex-wrap.justify-content-center
      .col-lg-7.pe-lg-3.mb-4.order-2.order-lg-1
        p(data-aos="fade-left") Es una mezcla fresca de tomate, queso feta, aceitunas, cebolla y pimentón, aliñada con limón y aceite de oliva.
        .lista-ingredientes.mb-4(data-aos="fade-left")
          .d-flex.flex-wrap.align-items-start
            p.w-100.fw-bold Ingredientes:
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check.mb-0
                li Tomates maduros
                li Queso feta
                li Aceitunas Kalamata
                li Cebolla cabezona roja
                li Orégano
            .col-12.col-md-6.col-xl-5
              ul.ul-marker-check
                li Alcaparras
                li Limón
                li Aceite de oliva
                li Sal
                li Pimentón verde
            .col-auto.d-none.d-xl-flex
              img(src="@/assets/curso/temas/tema3/img-10.svg").img65
        p.mb-0(data-aos="fade-left") #[strong Preparación]
          br
          | Todos los ingredientes se cortan en cubos y se mezclan. Se sirve frío, destacando la frescura de los ingredientes.
      .col-lg-5.order-1.order-lg-2.mb-4
        img(src="@/assets/curso/temas/tema3/img-9.png" data-aos="fade-left").mx-auto

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.audio-t3
  border: 3px solid #89A068
  background-color: #F3FAE9
  .audio-c
    border: none
    .tarjeta-audio__texto
      color: #12263F
</style>
