<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del #[em software] hotelero

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-21.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La transformación digital ha generado importantes cambios en la industria hotelera, permitiendo automatizar procesos que anteriormente se realizaban de manera manual. Actualmente, los establecimientos de alojamiento utilizan herramientas tecnológicas para gestionar reservas, controlar la ocupación, administrar huéspedes y facilitar la operación diaria del hotel. En este contexto, el #[em software] hotelero se convierte en una herramienta fundamental para optimizar la organización de la información y mejorar la calidad del servicio prestado al cliente.
  
    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema1/img02.svg").mx-auto
      .col-lg
        p.mb-0 El uso de sistemas informáticos en hotelería no solo facilita el control operativo, sino que también permite integrar diferentes áreas del establecimiento, como reservas, recepción, #[em housekeeping], facturación y comercialización digital. Según Kasavana y Cahill (2017), los sistemas de gestión hotelera contribuyen a mejorar la productividad, reducir errores operativos y fortalecer la toma de decisiones dentro de la organización.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto de #[em software] hotelero

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img03.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") El #[em software] hotelero es un sistema informático diseñado para apoyar y automatizar los procesos operativos, administrativos y comerciales de los establecimientos de alojamiento. Estas herramientas permiten centralizar la información relacionada con reservas, huéspedes, disponibilidad de habitaciones, tarifas, pagos y reportes, facilitando una gestión más organizada y eficiente.
        
        .bg-fondo-2.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-3
          p.mb-0 En hotelería, el #[em software] más utilizado es el PMS (#[em Property Management System]), el cual funciona como una plataforma central desde donde se administra gran parte de la operación del hotel. Este sistema permite registrar reservas, realizar #[em check-in] y #[em check-out], controlar la ocupación y generar reportes operativos en tiempo real.

        p.mb-0 El crecimiento del turismo y la necesidad de agilizar los procesos de atención al cliente impulsaron la implementación de sistemas tecnológicos en los hoteles. Actualmente, incluso pequeños establecimientos utilizan #[em software] especializado para optimizar sus operaciones y mejorar la experiencia del huésped.

    
    .row.mb-5
      .col-lg-12
        p.mb-0 El #[em software] hotelero o PMS centraliza la información y automatiza los procesos clave para una operación eficiente en el establecimiento de alojamiento. Sus funciones básicas son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img05.svg' alt="", style="width: 100px;").mx-auto
            h4.text-center #[b Gestión de reservas]
            p.text-center Permite registrar, modificar y consultar reservas de manera rápida y segura.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img06.svg' alt="", style="width: 100px;").mx-auto
            h4.text-center #[b Control de ocupación]
            p.text-center Muestra en tiempo real la disponibilidad y el estado de las habitaciones.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img07.svg' alt="", style="width: 100px;").mx-auto
            h4.text-center #[b Facturación]
            p.text-center Facilita la generación de cuentas, cobros, pagos y cierre de cajas.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img08.svg' alt="", style="width: 100px;").mx-auto
            h4.text-center #[b Integración] 
            p.text-center Se conecta con otros sistemas del hotel y canales de venta (OTA, #[em Channel Manager], etc.).

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img09.svg' alt="", style="width: 100px;").mx-auto
            h4.text-center #[b Reportes]
            p.text-center Genera reportes operativos, financieros y administrativos para la toma de decisiones.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img10.svg' alt="", style="width: 100px;").mx-auto
            h4.text-center #[b Registro de huéspedes]
            p.text-center Administra la información de los huéspedes, sus datos y preferencias.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.bg-color-23.p-4(data-aos="fade-right")
          p.mb-3 Estas funciones trabajan de forma integrada para optimizar la operación del hotel, mejorar la experiencia del huésped y aumentar la eficiencia del negocio.
          p.mb-0 Entre los principales beneficios del PMS se destacan la automatización de procesos, la reducción de errores, el ahorro de tiempo, la mejora de la experiencia del huésped, la optimización de la ocupación y la centralización de la información hotelera.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Evolución histórica del #[em software] hotelero

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") La evolución del #[em software] hotelero está directamente relacionada con el crecimiento de la industria turística y con los avances tecnológicos aplicados a la administración de servicios. En sus inicios, los hoteles realizaban el control de reservas y ocupación de forma manual mediante libros físicos, tableros y formatos impresos, lo que hacía más lentos los procesos operativos y aumentaba la posibilidad de errores.
        p.mb-0 Con el avance de la informática en las décadas de 1970 y 1980, comenzaron a implementarse los primeros sistemas computarizados para el control de habitaciones y huéspedes. Posteriormente, la llegada de internet permitió integrar las reservas en línea, las agencias digitales y los sistemas globales de distribución, facilitando la comercialización de servicios hoteleros a nivel mundial.

      .col-lg-3.col-md-8
        figure
          img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in")

    .row.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/tema1/img13.png").mx-auto
      .col-lg-10
        .bg-fondo-4.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          .col-lg-11.col-md-12
            p.mb-3 Actualmente, muchos hoteles utilizan sistemas PMS en la nube (#[em Cloud] PMS), los cuales permiten acceder a la información desde diferentes dispositivos y gestionar operaciones en tiempo real. Además, la incorporación de inteligencia artificial, automatización y análisis de datos continúa transformando la operación hotelera y las experiencias de los huéspedes.
            p.mb-0 A continuación, se presenta la evolución de los sistemas de gestión hotelera:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p(numero="Antes de 1970" titulo="Reservas manuales") La gestión hotelera se realizaba de forma manual, mediante registros en papel y comunicación directa, lo que hacía el proceso lento y altamente dependiente del factor humano.
          p(numero="1970 – 1980" titulo="Primeros sistemas computarizados") Se introducen aplicaciones básicas para asignación de habitaciones, generación de reportes e inicio de la facturación, usando equipos de gran tamaño y #[em software] elemental.
          p(numero="1990 – 1995" titulo="Integración de internet") Surgen sistemas como Fidelio™ en entornos MS-DOS, que integran módulos clave como reservas, recepción, caja y control de habitaciones, respondiendo a la expansión del mercado hotelero.
          p(numero="1996 – 1999" titulo="Aparición de Opera™") Se anuncia Opera™, generando altas expectativas en el sector por su propuesta integral; aunque innovador, en sus inicios no logró cumplir completamente lo esperado por los usuarios.
          p(numero="2000 – 2005" titulo="Reservas en línea y OTA") Opera™ se consolida como PMS líder, integrando estabilidad, múltiples interfaces y bases de datos avanzadas como Oracle, impulsando la gestión hotelera digital y las reservas en línea.
          p(numero="2006" titulo="Diversificación del <em>software</em> hotelero") Con el avance de la computación en la nube, surgen nuevas soluciones a nivel nacional e internacional, como Zeus® y Ezee™, ampliando el portafolio tecnológico del sector.
          p(numero="Actualidad" titulo="Cloud PMS e inteligencia artificial") Los sistemas actuales automatizan integralmente operaciones como reservas, facturación, ventas, alimentos y bebidas, inventarios, talento humano, mantenimiento y calidad, apoyados en la nube y la IA.
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img16.png", data-aos="zoom-in")

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Tipos de #[em software] utilizados en hotelería

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema1/img17.svg").mx-auto
      .col-lg
        p.mb-3 Los establecimientos hoteleros utilizan diferentes tipos de #[em software] según las necesidades operativas y el tamaño del negocio. Algunos sistemas están enfocados en la gestión integral de la operación, mientras que otros apoyan procesos específicos como reservas, comercialización o relación con clientes.
        p.mb-0 Entre los principales tipos de #[em software] utilizados en hotelería se encuentran:

    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 PMS (#[em Property Management System])
              p.mb-0 Es el sistema principal de gestión hotelera. Permite controlar reservas, recepción, ocupación, facturación y reportes operativos.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img19.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 CRS (#[em Central Reservation System])
              p.mb-0 Sistema centralizado utilizado para administrar reservas provenientes de diferentes canales de distribución.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img20.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 #[em Channel Manager]
              p.mb-0 Herramienta que sincroniza disponibilidad y tarifas entre diferentes OTA y plataformas digitales.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img21.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 CRM hotelero
              p.mb-0 #[em Software] utilizado para administrar la relación con los clientes y gestionar estrategias de fidelización.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img22.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 ERP hotelero
              p.mb-0 Sistema que integra procesos administrativos, financieros y operativos dentro del hotel.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img23.png", alt="").mx-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.mb-4
        p.mb-0 A continuación, se presenta una tabla comparativa de los diferentes #[em softwares] hoteleros:

      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 1.
          span Cuadro comparativo de #[em software] hotelero
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th #[em Software]
                th Función principal
                th Qué gestiona
            tbody
              tr
                td PMS
                td Operación hotelera
                td Reservas, #[em check-in]/#[em check-out], habitaciones, facturación
              tr
                td CRS (#[em Central Reservation System])
                td Centralización de reservas
                td Reservas desde web, agencias y #[em call center]
              tr
                td #[em Channel Manager]
                td Distribución #[em online]
                td Disponibilidad y tarifas en OTAs
              tr
                td CRM hotelero
                td Gestión de clientes
                td Datos del cliente, historial, preferencias
              tr
                td ERP hotelero
                td Administración integral
                td Finanzas, inventario, RRHH, compras

    .bg-full-width.bg-fondo-6.px-5.py-4.mb-3
      .container(data-aos="fade-right")
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Caso práctico

            p.mb-0 Un hotel utiliza un PMS conectado a un #[em Channel Manager] y a diferentes OTA. Cuando un huésped realiza una reserva desde Booking, el sistema actualiza automáticamente la disponibilidad en todas las plataformas, evitando sobreventas y facilitando el control de ocupación.

          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema1/img25.png", alt="").img-fluid.w-75.mx-auto

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Funciones del PMS en la operación hotelera

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img26.svg").mx-auto
      .col-lg
        p.mb-3 El PMS constituye el núcleo operativo del #[em software] hotelero, ya que centraliza la información y permite coordinar las diferentes áreas del establecimiento. Este sistema facilita la automatización de tareas y mejora la eficiencia en la prestación del servicio.
        p.mb-0 Entre las funciones más importantes del PMS se encuentran:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 1.]
          span Funciones del PMS
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema1/img27.svg", alt="La figura 1 detalla las principales funciones del PMS, las cuales son:\n- Registro y control de reservas.\n- Gestión de check-in y check-out.\n- Asignación de habitaciones.\n- Control de tarifas y disponibilidad.\n- Generación de reportes.\n- Seguimiento del historial de huéspedes.\n- Integración con plataformas de reservas online.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img28.svg", alt="La figura 1 detalla las principales funciones del PMS, las cuales son:\n- Registro y control de reservas.\n- Gestión de check-in y check-out.\n- Asignación de habitaciones.\n- Control de tarifas y disponibilidad.\n- Generación de reportes.\n- Seguimiento del historial de huéspedes.\n- Integración con plataformas de reservas online.")
        figcaption Nota. SENA, (2026).

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-23(data-aos="fade-right")
        .col-lg-7.p-4.order-1.order-lg-1
          p.mb-0 Gracias a estas funciones, el personal puede acceder rápidamente a la información y brindar una atención más organizada y eficiente al huésped relacionada con la gestión de solicitudes de reservas, el ingreso y salida de los huéspedes, el estado de las habitaciones, la facturación y todos los reportes de información operativa del establecimiento de alojamiento. 
        .col-lg-5.p-0.order-2.order-lg-2
          img(src="@/assets/curso/tema1/img29.png", alt="")

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Para ampliar más sus conocimientos sobre los módulos esenciales de PMS claves en un establecimiento de alojamiento, lo invitamos a consultar el siguiente video:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=x_07Cn5P--E" target="_blank")
                  span Consultar video
                  i.fas.fa-play-circle

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Ventajas y desafíos de la transformación digital hotelera


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img31.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La implementación de #[em software] hotelero ha permitido optimizar la operación de los establecimientos de alojamiento y mejorar la experiencia de los huéspedes. Entre las principales ventajas se destacan la automatización de procesos, el acceso rápido a la información, el control de ocupación y la integración con canales digitales de comercialización.

        .bg-fondo-7.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 Sin embargo, la transformación digital también representa desafíos relacionados con la capacitación del personal, la inversión tecnológica y la adaptación constante a nuevas herramientas y tendencias del mercado. Además, el uso de sistemas informáticos exige garantizar seguridad de la información y actualización permanente de los procesos operativos.

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img33.svg").mx-auto
      .col-lg
        p.mb-3 Según Oracle Hospitality (2023), la digitalización hotelera continuará evolucionando hacia sistemas más inteligentes, conectados y automatizados, orientados a mejorar la experiencia del cliente y optimizar la gestión operativa.
        p.mb-0 A continuación, se comparte una tabla que detalla las ventajas y desafíos de la transformación digital en la hotelería.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 2.
          span Ventajas y desafíos del #[em software] hotelero
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Aspecto
                th Ventajas del #[em software] hotelero
                th Desafíos o dificultades
                th Impacto en la operación hotelera
            tbody
              tr
                td Automatización de procesos
                td Permite realizar tareas de manera más rápida y organizada, reduciendo procesos manuales repetitivos.
                td Requiere capacitación constante del personal para utilizar correctamente las herramientas tecnológicas.
                td Mejora la productividad y disminuye errores operativos en reservas y recepción.
              tr
                td Gestión de reservas
                td Centraliza las reservas provenientes de diferentes canales en un solo sistema.
                td La mala configuración del sistema puede generar duplicidad o pérdida de reservas.
                td Facilita el control de ocupación y la disponibilidad de habitaciones.
              tr
                td Control de información
                td Permite acceder en tiempo real a datos de huéspedes, tarifas y ocupación.
                td Dependencia tecnológica frente a fallas de internet o del sistema.
                td Favorece una toma de decisiones más rápida y organizada.
              tr
                td Integración de áreas
                td Conecta departamentos como recepción, #[em housekeeping], facturación y reservas.
                td La falta de integración adecuada puede afectar la comunicación entre áreas.
                td Mejora la coordinación operativa y el flujo de información.
              tr
                td Comercialización digital
                td Facilita la conexión con OTA, motores de reserva y #[em Channel Manager].
                td Aumenta la dependencia de plataformas externas y comisiones de venta.
                td Incrementa la visibilidad del hotel y las posibilidades de comercialización.
              tr
                td Experiencia del huésped
                td Agiliza procesos de #[em check-in], facturación y atención personalizada.
                td Los errores tecnológicos pueden afectar directamente la satisfacción del cliente.
                td Contribuye a brindar un servicio más eficiente y competitivo.
              tr
                td Generación de reportes
                td Produce informes automáticos sobre ocupación, ventas y desempeño operativo.
                td La interpretación incorrecta de los datos puede afectar las decisiones administrativas.
                td Permite realizar seguimiento y análisis del comportamiento del hotel.
              tr
                td Seguridad de la información
                td Los sistemas modernos permiten respaldar y proteger datos de clientes y operaciones.
                td Existen riesgos relacionados con ciberseguridad y protección de datos.
                td Favorece el manejo seguro y organizado de la información hotelera.
              tr
                td Actualización tecnológica
                td Los sistemas evolucionan constantemente incorporando nuevas funciones y automatizaciones.
                td Implica costos permanentes de actualización y mantenimiento.
                td Mantiene al hotel competitivo frente a las tendencias del mercado.
              tr
                td Optimización de ingresos
                td Facilita el control tarifario y la implementación de estrategias de #[em revenue management].
                td Un mal manejo de tarifas puede generar pérdidas económicas o sobreventas.
                td Ayuda a mejorar la rentabilidad y ocupación del establecimiento.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img34.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El #[em software] hotelero se ha convertido en una herramienta indispensable para la administración y operación de los establecimientos de alojamiento, permitiendo automatizar procesos y mejorar la gestión de reservas, huéspedes y ocupación. La evolución tecnológica ha transformado la manera en que los hoteles interactúan con los clientes y administran la información, fortaleciendo la competitividad y eficiencia del sector. En este sentido, el conocimiento y manejo de herramientas digitales constituye una competencia fundamental para el desempeño profesional en el área de servicios de alojamiento.


    .bg-full-width.bg-fondo-6.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 Caso práctico
              p.mb-0 Un hotel utiliza un PMS conectado a un #[em Channel Manager] y a diferentes OTA. Cuando un huésped realiza una reserva desde Booking, el sistema actualiza automáticamente la disponibilidad en todas las plataformas, evitando sobreventas y facilitando el control de ocupación.
            .col-lg-3.col-md-6.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img35.png", alt="").img-fluid.mx-auto
          
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-0 Con el propósito de mejorar la operación, el hotel implementó un sistema PMS conectado a un #[em Channel Manager] y a diferentes plataformas de reservas en línea. Después de la implementación, las reservas comenzaron a sincronizarse automáticamente, el estado de las habitaciones podía visualizarse en tiempo real y los reportes operativos se generaban de manera automática. Además, el tiempo de #[em check-in] se redujo y el hotel logró mejorar el control de ocupación y la experiencia de los huéspedes.
            .col-lg-3.col-md-6.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img36.png", alt="").img-fluid.mx-auto

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-10
        .cajon.bg-color-23.p-4
          p.mb-0 Este caso evidencia cómo el uso del #[em software] hotelero contribuye a optimizar los procesos operativos, fortalecer la comunicación entre áreas y aumentar la eficiencia administrativa dentro de los establecimientos de alojamiento.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
