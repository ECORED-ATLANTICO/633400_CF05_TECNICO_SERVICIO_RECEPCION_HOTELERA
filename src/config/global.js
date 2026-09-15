export default {
  global: {
    Name: '<em>Software</em> hotelero y las reservaciones en hoteles',
    Description:
      'El componente formativo <em>Software</em> hotelero y las reservaciones en hoteles fortalece en el aprendiz competencias relacionadas con el uso de herramientas tecnológicas aplicadas a la operación hotelera y la gestión digital de reservas. A través de este componente se abordarán temas relacionados con la evolución del <em>software</em> hotelero, el funcionamiento del PMS, la operación de reservas, el control de ocupación, los canales de distribución y la integración tecnológica en los establecimientos de alojamiento. Asimismo, el aprendiz afianzará habilidades para el manejo operativo de sistemas hoteleros y la administración eficiente de la información en contextos reales de servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
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
        titulo: 'Fundamentos del <em>software</em> hotelero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de <em>software</em> hotelero',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución histórica del <em>software</em> hotelero',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de <em>software</em> utilizados en hotelería',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Funciones del PMS en la operación hotelera',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ventajas y desafíos de la transformación digital hotelera',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operación de reservas en el <em>software</em> hotelero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Registro digital de reservas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Consulta de disponibilidad y tarifas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Confirmación y modificación de reservas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Cancelaciones, anulaciones y <em>no show</em> en el PMS',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Historial del huésped y seguimiento de reservas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Control operativo y monitoreo hotelero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<em>Dashboard</em> operativo hotelero',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<em>Forecasting</em> y pronóstico de ocupación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reportes operativos y administrativos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Control de habitaciones y <em>housekeeping</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Alertas operativas y seguimiento en tiempo real',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Integración tecnológica y distribución digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'OTA y motores de reserva',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<em>Channel Manager</em>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Integración entre departamentos hoteleros',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Sistemas globales de distribución (GDS)',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Tendencias tecnológicas en hotelería',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Seguridad de la información y protección de datos en hotelería',
            hash: 't_4_6',
          },
        ],
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF05_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Automatización hotelera',
      significado:
        'Uso de herramientas tecnológicas para realizar procesos operativos de manera automática y eficiente.',
    },
    {
      termino: 'Booking <em>Engine</em>',
      significado:
        'Motor de reservas integrado a la página web del hotel que permite realizar reservas directas en línea.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'Medio utilizado para comercializar habitaciones y servicios hoteleros, como OTA, agencias o venta directa.',
    },
    {
      termino: '<em>Channel Manager</em>',
      significado:
        'Sistema cuya función es unificar y sincronizar tarifas, disponibilidad y reservas en los diferentes canales de comercio electrónico.',
    },
    {
      termino: '<em>Check-in</em>',
      significado:
        'Proceso de registro e ingreso del huésped al establecimiento de alojamiento.',
    },
    {
      termino: '<em>Check-out</em>',
      significado:
        'Proceso de salida del huésped y cierre administrativo de su estadía.',
    },
    {
      termino: 'Cliente / Servidor',
      significado:
        'Modelo de arquitectura de <em>software</em> donde el programa se instala en un servidor central y desde allí se distribuyen recursos y servicios a los equipos de los usuarios.',
    },
    {
      termino: 'Código de reserva',
      significado:
        'Identificador alfanumérico generado por el sistema PMS para reconocer una reserva específica.',
    },
    {
      termino: '<em>Cloud</em> PMS',
      significado:
        'Sistema de gestión hotelera alojado en la nube que permite acceder a la información desde internet.',
    },
    {
      termino: 'CRM',
      significado:
        'Sigla de <em>Customer Relationship Management</em>; sistema utilizado para gestionar la relación y seguimiento de clientes.',
    },
    {
      termino: '<em>Dashboard</em> hotelero',
      significado:
        'Panel visual del PMS que muestra indicadores operativos y administrativos en tiempo real.',
    },
    {
      termino: 'Distribución digital',
      significado:
        'Comercialización de habitaciones y servicios hoteleros mediante plataformas tecnológicas y canales <em>online</em>.',
    },
    {
      termino: '<em>Forecasting</em>',
      significado:
        'Proyección o pronóstico de ocupación hotelera basado en datos históricos y reservas confirmadas.',
    },
    {
      termino: 'GDS',
      significado:
        'Sigla de <em>Global Distribution System</em>; sistema global utilizado para comercializar servicios turísticos y hoteleros.',
    },
    {
      termino: 'Gestión de ocupación',
      significado:
        'Proceso de control y seguimiento de habitaciones disponibles, ocupadas y proyectadas.',
    },
    {
      termino: 'Historial del huésped',
      significado:
        'Registro de información relacionada con preferencias, estadías y comportamiento de un cliente en el hotel.',
    },
    {
      termino: '<em>Housekeeping</em>',
      significado:
        'Departamento encargado de la limpieza, orden y acondicionamiento de habitaciones y áreas del hotel.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'Tecnología capaz de analizar información y automatizar procesos mediante aprendizaje y algoritmos digitales.',
    },
    {
      termino: 'Integración tecnológica',
      significado:
        'Conexión entre sistemas y departamentos para compartir información operativa en tiempo real.',
    },
    {
      termino: 'Llave móvil',
      significado:
        'Herramienta digital que permite al huésped acceder a su habitación mediante dispositivos móviles.',
    },
    {
      termino: 'Motor de reservas',
      significado:
        'Plataforma tecnológica utilizada para gestionar reservas directas desde la página web del hotel.',
    },
    {
      termino: 'OTA',
      significado:
        'Sigla de <em>Online Travel Agency</em>; agencia de viajes <em>online</em> que comercializa servicios turísticos y hoteleros.',
    },
    {
      termino: 'PMS',
      significado:
        'Sigla de <em>Property Management System</em>; sistema utilizado para administrar la operación hotelera y las reservas.',
    },
    {
      termino: 'Reporte operativo',
      significado:
        'Informe generado por el PMS que consolida información relacionada con ocupación, reservas y operación hotelera.',
    },
    {
      termino: 'Reserva digital',
      significado:
        'Solicitud de alojamiento registrada mediante plataformas tecnológicas o sistemas PMS.',
    },
    {
      termino: '<em>Revenue Management</em>',
      significado:
        'Estrategia de gestión de ingresos basada en análisis de demanda, tarifas y ocupación hotelera.',
    },
    {
      termino: 'Sobreventa (<em>Overbooking</em>)',
      significado:
        'Situación en la que el hotel vende más habitaciones de las disponibles.',
    },
    {
      termino: 'Tendencias tecnológicas',
      significado:
        'Innovaciones digitales y herramientas emergentes aplicadas a la operación hotelera moderna.',
    },
    {
      termino: 'Tiempo real',
      significado:
        'Actualización inmediata de la información dentro de un sistema tecnológico hotelero.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bardi, J. A. (2010). Hotel front office management. John Wiley & Sons.',
    },
    {
      referencia: 'Cloudbeds. (2024). Hospitality technology resources.',
      link: 'https://www.cloudbeds.com/',
    },
    {
      referencia:
        'Cross, R. (1997). Revenue management: Hard-core tactics for market domination. Broadway Books.',
    },
    {
      referencia: 'Kasavana, M. L. (2011). Hospitality Upgrade.',
    },
    {
      referencia:
        'Kasavana, M. L., & Cahill, J. J. (2017). Managing computers in the hospitality industry. AHLEI.',
    },
    {
      referencia:
        'Kaspersky Labs. (2021). ¿Qué es la ciberseguridad? Kaspersky Latinoamérica.',
      link:
        'https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security',
    },
    {
      referencia:
        'Kotler, P., Bowen, J., & Makens, J. (2017). Marketing for hospitality and tourism (7.ª ed.). Pearson.',
    },
    {
      referencia:
        'Levy-Bonvin, J. (2003). The role of technology in the hospitality industry. Hospitality Net.',
      link: 'https://www.hospitalitynet.org/opinion/4017990.html',
    },
    {
      referencia:
        'Mastel Hospitality. (2019). Evolution of OPERA PMS – Oracle Hospitality.',
    },
    {
      referencia:
        'Moll, S. V. (1984). Front-of-the-house computer systems: A user’s guide. Hospitality Review, 2(2), Art. 5.',
    },
    {
      referencia: 'Oracle Hospitality. (2020). What is a hotel PMS?',
      link:
        'https://www.oracle.com/in/industries/hospitality/what-is-hotel-pms.html',
    },
    {
      referencia:
        'Oracle Hospitality. (2023). Property Management Systems (PMS).',
      link: 'https://www.oracle.com/hospitality/',
    },
    {
      referencia:
        'Puorto, S. (2018). A brief history of property management systems. PhocusWire.',
      link:
        'https://www.phocuswire.com/A-brief-history-of-property-management-systems',
    },
    {
      referencia:
        'SiteMinder. (2024). Hotel distribution and channel management guide.',
      link: 'https://www.siteminder.com/',
    },
    {
      referencia:
        'Solomon, M. R. (2020). Consumer behavior: Buying, having, and being (13.ª ed.). Pearson.',
      link: 'https://books.google.com/books?id=6K9yDwAAQBAJ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
