<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cocina Europea',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar  las técnicas, ingredientes y platos tradicionales de la cocina europea, destacando la diversidad cultural y gastronómica de las regiones del Norte, Centro y Sur de Europa.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los ingredientes principales del <em>gravlax</em>?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Azúcar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sal de mar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salmón.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pimienta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿De qué país es tradicional el <em>lutefisk</em>?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suecia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dinamarca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Noruega.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alemania.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de queso no se menciona en la receta de fondue del documento?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gruyere.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Parmesano',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Tilsiter</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Emmental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica de conservación se utiliza para preparar <em>chucrut</em>?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ahumado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fermentación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cocción al vapor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes ingredientes no forma parte del <em>Risotto</em> milanés?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Azafrán.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Anillos de calamar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Queso parmesano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vino blanco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Con qué se suelen servir los pierogi?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Queso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salsa de tomate.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantequilla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ensalada verde.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué especias se utilizan en las <em>köttbullar</em> según el documento?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orégano y tomillo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pimienta y clavo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nuez moscada y cardamomo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cilantro y perejil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza a los platos de Europa del Sur según el documento?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son dulces y ligeros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Destacan por sabores intensos y mediterráneos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tienen ingredientes fermentados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se preparan principalmente con carne de cerdo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Los <em>blinis</em> son originarios de Rusia.',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El <em>gravlax</em> se sirve tradicionalmente con ensalada de repollo.',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito del <em>kirsch</em> en la preparación del <em>fondue</em>?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Endulzar el queso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Agregar un toque aromático.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Espesar la mezcla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Colorear el queso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué se hace con el repollo antes de iniciar la fermentación para preparar <em>chucrut</em>?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se hierve',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se mezcla con azúcar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se corta en julianas y se sala.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se hornea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el tipo de arroz recomendado para la paella de mariscos?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Arborio</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bomba o <em>parbolizado</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Integral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Jazmín.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué debe hacerse con el vino blanco al preparar <em>risotto</em> milanés?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calentarlo previamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incorporarlo al arroz y remover constantemente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Agregarlo al final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usarlo solo como decoración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cómo se denomina el plato tradicional francés preparado con pollo marinado en vino tinto?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Risotto</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Quiche</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Coq au vin</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Ratatouille</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
