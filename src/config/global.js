export default {
  global: {
    componenteFormativo: 'Farmacovigilancia y tecnovigilancia',
    descripcionCurso:
      'En el entorno comunitario y hospitalario, la automedicación, la no adherencia al tratamiento y el error en la prescripción y administración de medicamentos, han generado factores que afectan y aumentan los riesgos en la salud de las personas. Las entidades prestadoras de servicios de salud deben asumir la responsabilidad para mejorar esta problemática, capacitando al personal de salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo: 'Marco normativo colombiano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos generales ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Farmacovigilancia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Programa de tecnovigilancia',
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
        download: 'downloads/331502_CF27_DU.zip',
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
      tema: 'Marco normativo colombiano',
      referencia:
        'Circular 48 de 2020. [Ministerio de salud y protección social]. Instrucciones para la vigilancia post comercialización de medicamentos, dispositivos médicos y reactivos in vitro de uso y consumo humano con registro sanitario, permiso de comercialización y declarados como vitales no disponibles. 7 de diciembre de 2020.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/circular-48-de-2020.pdf',
    },
    {
      tema: 'Conceptos generales',
      referencia:
        'Escobar, K. (2012). Dr. house atiende a mujer con asma. ([Video]). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1UyH-Yq-26o',
    },
    {
      tema: 'Farmacovigilancia',
      referencia: 'MINSALUD. ¿Qué es la farmacovigilancia?',
      tipo: 'PDF',
      descarga:
        '/downloads/anexos/Anexo2_CF027_farmacovigilancia_profesionales_de_la_salud.pdf',
    },
    {
      tema: 'Farmacovigilancia',
      referencia: 'MINSALUD. (s.f.). Farmacovigilancia.',
      tipo: 'PDF',
      descarga:
        '/downloads/anexos/Anexo1_CF027_farmacovigilancia_pacientes.pdf',
    },
    {
      tema: 'Farmacovigilancia',
      referencia: 'INVIMA. (2013). <i>ABC de dispositivos médicos.</i>',
      tipo: 'PDF',
      descarga:
        '/downloads/anexos/Anexo3_CF027_ABC_de_los_dispositivos_médicos.pdf',
    },
    {
      tema: 'Farmacovigilancia',
      referencia: 'MINTRABAJO. (s.f.). Dispositivos médicos.',
      tipo: 'PDF',
      descarga: '/downloads/anexos/Anexo4_CF027_Dispositivos_médicos.pdf',
    },
    {
      tema: 'Farmacovigilancia',
      referencia:
        'Resolución 10204 de 2017.  [Instituto Colombiano Agropecuario]. Por medio de la cual se establece el Sistema Nacional de Farmacovigilancia para medicamentos y biológicos de uso veterinario. 24 de agosto de 2017.',
      tipo: 'PDF',
      descarga: '/downloads/anexos/Anexo6_CF027_Resolucion_ica_10204_2017.pdf',
    },
    {
      tema: 'Farmacovigilancia',
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. Mayo 14 del 2007.',
      tipo: 'PDF',
      descarga:
        '/downloads/anexos/Anexo7_CF027_resolucion_minproteccion_1403_2007.pdf',
    },
    {
      tema: 'Programa de tecnovigilancia',
      referencia: 'INVIMA. (2016). FOREAM. formato reporte de sospecha.',
      tipo: 'PDF',
      descarga:
        '/downloads/anexos/Anexo5_CF027_FOREAM_formato_reporte_de_sospecha.doc',
    },
  ],
  glosario: [
    {
      termino: 'EAM',
      significado:
        'Eventos adversos relacionados con medicamentos cualquier suceso médico desfavorable que puede aparecer durante el tratamiento con un producto farmacéutico, incluyendo los productos biológicos, pero que no necesariamente tiene una relación causal con el tratamiento.',
    },
    {
      termino: 'Iatrogenia (yatrogenia)',
      significado:
        'Daño no deseado ni buscado en la salud, causado o provocado, como efecto secundario inevitable, por un acto médico legítimo y avalado, destinado a curar o mejorar una patología determinada.',
    },
    {
      termino: 'ICA',
      significado: ' Instituto Colombiano Agropecuario.',
    },
    {
      termino: 'INVIMA',
      significado:
        ' Instituto Nacional de Vigilancia de Medicamentos y Alimentos',
    },
    {
      termino: 'IPS',
      significado: ' Institución prestadora de salud.',
    },
    {
      termino: 'LASA',
      significado: ' Look Alike, Sound Alike.',
    },
    {
      termino: 'OMS',
      significado: ' Organización Mundial de la Salud.',
    },
    {
      termino: 'PRIM',
      significado: ' Problemas de Salud Relacionados con Medicamentos.',
    },
    {
      termino: 'PRUM',
      significado: ' Problema Relacionado con La Utilización del Medicamento.',
    },
    {
      termino: 'RAM',
      significado:
        ' Reacciones Adversas a Medicamentos respuesta a un fármaco o medicamento, que es perjudicial e involuntaria, ocurre a las dosis normalmente usadas en el hombre para profilaxis o terapia de alguna enfermedad o para modificar las funciones del organismo.',
    },
    {
      termino: 'Teratogénico',
      significado:
        'Agente capaz de causar un defecto congénito. Generalmente, se trata de algo que es parte del ambiente al que está expuesta la madre durante el embarazo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Resolución 4002 de 2007. [Ministerio de la Protección Social]. Por la cual se adopta el Manual de Requisitos de Capacidad de Almacenamiento o Acondicionamiento para Dispositivos Médicos. 8 de noviembre de 2007.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_4002_de_2007.pdf',
    },
    {
      referencia:
        'Resolución 4816 de 2008. [Ministerio de la protección social]. Por la cual se reglamenta el Programa Nacional de Tecnovigilancia. 12 de diciembre de 2008.',
      link:
        'http://www.saludcapital.gov.co/DSP/Tecnovigilancia/Resoluci%C3%B3n%204816%20de%202008.pdf',
    },
    {
      referencia:
        'Resolución número 2003   de 2014. [Ministerio de Salud y Protección Social]. Por la cual se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud. 28 mayo de 2014.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202003%20de%202014.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Emilia Sarmiento Mora',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Lida Alzáte Suárez',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
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
