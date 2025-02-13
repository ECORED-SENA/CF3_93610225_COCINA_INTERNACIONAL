export default {
  global: {
    Name: 'Cocina Europea',
    Description:
      'La cocina europea destaca por su diversidad: del Norte, platos como <em>gravlax, blinis y kottbullar</em>; del Centro, <em>borsch, fondue y choucroute</em>; del Sur, paella, <em>coq au vin y risotto</em>. Combina ingredientes frescos con técnicas tradicionales, reflejando influencias culturales únicas en cada región, desde el uso de mariscos y quesos hasta recetas emblemáticas como el pollo al vino y <em>pierogi</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Europa del Norte',
        desarrolloContenidos: true,
        subMenu: [],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Europa Central',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Europa del Sur',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Europa del Norte',
      referencia:
        'Fede Cocina. (2020). Como Hacer Salmon Marinado <em>Gravlax</em>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UQxdNUFK0Vg&ab_channel=FedeCocina',
    },
    {
      tema: 'Europa del Norte',
      referencia:
        'Munchies. (2020). <em>How To Make Swedish Meatballs with Emma Bengtsson</em>. [Archivo de video] Youtube.',
      tipo: 'Video',
      descarga:
        'https://www.youtube.com/watch?v=715fmvx0TKw&ab_channel=Munchies',
    },
    {
      tema: 'Europa Central',
      referencia:
        'Recetas de Esbieta. (2021). <em>Borsch</em> o sopa de remolacha - Receta ORIGINAL. [Archivo de video] Youtube.',
      tipo: 'Video',
      descarga:
        'https://www.youtube.com/watch?v=DNDGjsGvOZo&ab_channel=RecetasdeEsbieta',
    },
    {
      tema: 'Europa Central',
      referencia:
        'Papá Felice - Sabor de Italia. (2022). Trucos y Secretos para un RISOTTO italiano a la Milanese PERFECTO. [Archivo de video] Youtube.',
      tipo: 'Video',
      descarga:
        'https://www.youtube.com/watch?v=yVwIJSsDrKY&ab_channel=Pap%C3%A1Felice-SabordeItalia',
    },
    {
      tema: 'Europa del Sur',
      referencia:
        'TULIO Recomienda. (2021). ¿Cómo hacer una Paella Casera?! | Receta Fácil y Rápida. [Archivo de video] Youtube.',
      tipo: 'Video',
      descarga:
        'https://www.youtube.com/watch?v=DNin1AD-WUQ&ab_channel=TULIORecomienda',
    },
  ],
  glosario: [
    {
      termino: '<em>Blinis</em>',
      significado:
        'panqueques rusos elaborados con harina, leche, levadura y mantequilla.',
    },
    {
      termino: '<em>Borsch</em>>',
      significado:
        'sopa de remolacha tradicional en Europa del este, especialmente en Polonia y Rusia.',
    },
    {
      termino: '<em>Chucrut</em>',
      significado:
        'repollo fermentado con sal, servido habitualmente con salchichas alemanas.',
    },
    {
      termino: '<em>Fondue</em>',
      significado:
        'mezcla de quesos fundidos con ajo, vino blanco y kirsch, típica de suiza.',
    },
    {
      termino: '<em>Gravlax</em>',
      significado:
        'preparación de salmón marinado con sal, azúcar, eneldo y limón, originaria del norte de Europa.',
    },
    {
      termino: '<em>Köttbullar</em>',
      significado:
        'albóndigas suecas preparadas con carne de ternera y cerdo, especias y acompañadas de salsa.',
    },
    {
      termino: '<em>Lutefisk</em>',
      significado:
        'bacalao seco tratado con soda, cocinado al vapor y típico de noruega y Finlandia.',
    },
    {
      termino: 'Paella de mariscos',
      significado:
        'plato español a base de arroz, mariscos y condimentos mediterráneos como ajo y perejil.',
    },
    {
      termino: '<em>Pierogi</em>',
      significado:
        '<em>raviolis</em> polacos rellenos de carne o puré de papa, hervidos y servidos con mantequilla',
    },
    {
      termino: '<em>Risotto milanés</em>',
      significado:
        'arroz cremoso italiano preparado con azafrán, mantequilla y queso parmesano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Directo al Paladar. (2019). <em>Un viaje por la Unión Europea a través de sus 27 platos nacionales (y sus mejores recetas)</em>.',
      link:
        'https://www.directoalpaladar.com/viajes/viaje-union-europea-27-plato-nacionales',
    },
    {
      referencia:
        'Cultura Colectiva. (2018). <em>15 recetas de platillos típicos europeos</em>.',
      link:
        'https://culturacolectiva.com/estilo-de-vida/comida/15-recetas-de-platillos-tipicos-europeos/',
    },
    {
      referencia:
        'Viajero Casual. (s.f.). <em>30 platos de comida típica europea</em>.',
      link: 'https://viajerocasual.com/comidas-tipicas-de-europa/',
    },
    {
      referencia:
        'Las Comidas Típicas. (s.f.). <em>Descubre las deliciosas recetas de comida típica europea</em>.',
      link:
        'https://www.lascomidastipicas.com/comida-tipica-de-europa-recetas/',
    },
    {
      referencia:
        'Viajes Por Europa. (s.f.). <em>Los 10 platos más típicos de Europa</em>.',
      link: 'https://www.viajesporeuropa.eu/platos-mas-tipicos-de-europa/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
