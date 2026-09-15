<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Integración tecnológica y distribución digital

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img01.png", data-aos="zoom-in")

      .col-lg-9
        p.mb-3 La transformación digital ha modificado significativamente la forma en que los establecimientos de alojamiento comercializan sus servicios y administran la información operativa. Actualmente, los hoteles no solo dependen de las reservas directas realizadas en recepción o por teléfono, sino que utilizan múltiples plataformas tecnológicas que permiten ampliar su alcance comercial y conectarse con clientes en diferentes partes del mundo. En este contexto, herramientas como las OTA, los motores de reserva, los sistemas GDS y los <em>Channel Manager</em> facilitan la distribución digital de habitaciones y optimizan la gestión de reservas en tiempo real.
        .bg-fondo-15.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0(data-aos="fade-right") La integración tecnológica también permite fortalecer la comunicación entre las diferentes áreas del hotel, centralizar la información y mejorar la experiencia del huésped. Según SiteMinder (2024), la conectividad digital y la automatización de procesos se han convertido en elementos esenciales para la competitividad de los establecimientos hoteleros modernos.



    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 OTA y motores de reserva


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.mb-3.mb-lg-0
        p.mb-3(data-aos="fade-right") Las OTA (#[em Online Travel Agencies]) son plataformas digitales que permiten comercializar servicios turísticos y hoteleros a través de internet. Estas agencias facilitan que los huéspedes consulten disponibilidad, comparen tarifas y realicen reservas desde cualquier lugar y dispositivo conectado a la red.

        .bg-fondo-16.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema4/img03.svg").mx-auto
            .col-lg
              p.mb-3 Entre las OTA más utilizadas en hotelería se encuentran: Booking, Expedia, Despegar, Airbnb y Hotels.com.
              p.mb-0 Estas plataformas funcionan como intermediarios entre el hotel y el cliente, ampliando la visibilidad del establecimiento y facilitando el acceso a mercados nacionales e internacionales. Sin embargo, generalmente cobran comisiones por cada reserva realizada.

      .col-lg-2.col-md-6
        figure
          img(src="@/assets/curso/tema4/img05.png", data-aos="zoom-in")

    .row.align-items-center.mb-5
      .col-lg-12
        p.mb-3 Por otro lado, los motores de reserva son herramientas integradas a la página web oficial del hotel que permiten gestionar reservas directas sin intermediarios. Gracias a estos sistemas, el huésped puede consultar disponibilidad, seleccionar habitaciones y realizar pagos directamente con el establecimiento.
        p.mb-0 La implementación de motores de reserva contribuye a fortalecer la venta directa y reducir la dependencia de plataformas externas. Además, permite mejorar el control tarifario y optimizar la rentabilidad del hotel.



    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 7.
          span Cuadro comparativo de OTA y motores de reservas
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Aspecto
                th OTA
                th Motor de reservas
            tbody
              tr
                td Tipo de plataforma
                td Intermediario digital
                td Herramienta propia del hotel
              tr
                td Alcance comercial
                td Alto alcance internacional
                td Enfocado en venta directa
              tr
                td Comisión
                td Sí
                td No
              tr
                td Control tarifario
                td Compartido
                td Total
              tr
                td Relación con el huésped
                td Intermediada
                td Directa

    .bg-full-width.bg-fondo-6.px-5.py-4.mb-5
      .container(data-aos="fade-right")
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Caso práctico

            p.mb-0 Un huésped encuentra una habitación del Hotel Mirador Plaza en Booking y realiza la reserva desde la plataforma. Simultáneamente, otro cliente reserva directamente desde la página web del hotel mediante el motor de reservas. Ambas reservas se sincronizan automáticamente con el PMS, actualizando la disponibilidad en tiempo real.

          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema4/img06.png", alt="").img-fluid.w-75.mx-auto


    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema4/img07.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a consultar el siguiente blog para ampliar sus conocimientos sobre las agencias de viaje en línea (OTA), cómo funcionan, cuáles son sus principales ventajas y algunos ejemplos:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://stays.net/blog/es/que-son-las-otas-y-cuales-son-las-principales/" target="_blank")
                  span Consultar blog
                  i.fas.fa-file-pdf

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 #[em Channel Manager]

    .row.align-items-center.mb-5.justify-content-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        img(src="@/assets/curso/tema4/img08.png").mx-auto
      .col-lg-9
        p.mb-3 El <em>Channel Manager</em> es una herramienta tecnológica que permite sincronizar automáticamente la disponibilidad, tarifas y reservas del hotel en diferentes canales de distribución digital. Su principal función es evitar inconsistencias entre plataformas y reducir riesgos de sobreventa.
        p.mb-0 Antes de la implementación de estos sistemas, los hoteles debían actualizar manualmente la información en cada OTA, lo que generaba mayor carga operativa y posibilidad de errores. Actualmente, el #[em Channel Manager] centraliza la distribución y permite que cualquier modificación realizada en el PMS se actualice automáticamente en todos los canales conectados.


    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 6.]
          span PMS conectado a OTA mediante <em>Channel Manager</em>  
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema4/img09.png", alt="La figura detalla una Infografía del ecosistema tecnológico hotelero donde el PMS o Property Management System se conecta mediante un Channel Manager con diferentes OTA y canales digitales como Booking, Expedia, Agoda, Airbnb y Hotels.com. El sistema sincroniza en tiempo real reservas, disponibilidad y tarifas. También integra áreas internas del hotel como recepción, Housekeeping, mantenimiento, administración y gerencia, permitiendo compartir información operativa de manera centralizada. La imagen destaca beneficios como reducción de errores, mayor control operativo y mejor experiencia del huésped.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema4/img10.png", alt="La figura detalla una Infografía del ecosistema tecnológico hotelero donde el PMS o Property Management System se conecta mediante un Channel Manager con diferentes OTA y canales digitales como Booking, Expedia, Agoda, Airbnb y Hotels.com. El sistema sincroniza en tiempo real reservas, disponibilidad y tarifas. También integra áreas internas del hotel como recepción, Housekeeping, mantenimiento, administración y gerencia, permitiendo compartir información operativa de manera centralizada. La imagen destaca beneficios como reducción de errores, mayor control operativo y mejor experiencia del huésped.")
        figcaption Nota. SENA, (2026).
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-12.mb-4.mb-lg-0
        p.mb-0(data-aos="fade-right") Por ejemplo, si una habitación es reservada desde Expedia, el sistema descuenta inmediatamente la disponibilidad en Booking, Airbnb y la página web del hotel. Esto facilita el control operativo y mejora la eficiencia comercial del establecimiento.

      .col-lg-7.col-md-12.order-3.order-lg-2
        .bg-fondo-10.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          .row.align-items-center.justify-content-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema2/img26.svg", data-aos="zoom-in").mx-auto
            .col-lg
              p.mb-2 Además de sincronizar inventario, algunos #[em Channel Manager] permiten:

              ul.lista-ul.mb-0  
                li
                  i.lista-ul__vineta
                  | Administrar promociones.
                li
                  i.lista-ul__vineta
                  | Controlar tarifas.
                li
                  i.lista-ul__vineta
                  | Analizar desempeño comercial.
                li
                  i.lista-ul__vineta
                  | Generar reportes de distribución.

      .col-lg-2.col-md-6.order-2.order-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img12.png", data-aos="zoom-in").mx-auto

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Para profundizar en los beneficios que representa trabajar con canales o #[em Channel Manager], lo invitamos a consultar el siguiente video:
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=d9PWJaiaxjU" target="_blank")
                  span Consultar video
                  i.fas.fa-play-circle

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Integración entre departamentos hoteleros

    .row.align-items-center.mb-5
      .col-lg-3.col-md-12.mb-4.mb-lg-0
        p.mb-0 Uno de los principales aportes de los sistemas tecnológicos en hotelería es la integración de información entre los diferentes departamentos del establecimiento. Gracias al PMS, áreas como recepción, reservas, #[em housekeeping], mantenimiento y facturación pueden compartir datos en tiempo real y coordinar sus actividades de manera más eficiente.

      .col-lg-9.col-md-12
        .bg-fondo-5.tarjeta.mb-0
          .p-4(data-aos="fade-right")
            SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
              .row.justify-content-center.align-items-center.p-4.p-lg-3
                .col-lg
                  p.mb-0 La integración tecnológica facilita que las actualizaciones realizadas por un departamento se reflejen inmediatamente en todo el sistema. Por ejemplo, cuando #[em housekeeping] cambia el estado de una habitación a “vacía limpia”, recepción puede visualizar automáticamente la disponibilidad y asignarla a una nueva reserva.
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema4/img13.svg", alt="").mx-auto
              .row.justify-content-center.align-items-center.p-4.p-lg-3
                .col-lg
                  p.mb-0 Esta conectividad mejora la comunicación interna, reduce tiempos de respuesta y optimiza la experiencia del huésped. Además, permite disminuir errores operativos relacionados con duplicidad de información o falta de coordinación entre áreas.
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src="@/assets/curso/tema4/img14.svg", alt="").mx-auto

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-color-23.p-4
          p.mb-0 La integración también favorece el seguimiento de solicitudes especiales, mantenimiento preventivo, pagos pendientes y control de ocupación, fortaleciendo la eficiencia administrativa y operativa del hotel.


    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Sistemas globales de distribución (GDS)


    .row.align-items-center.mb-5.justify-content-center
      .col-lg-2.col-md-6.mb-4.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/tema4/img15.png").mx-auto
      .col-lg-10
        p.mb-3 Los sistemas globales de distribución, conocidos como GDS (#[em Global Distribution System]), son plataformas tecnológicas utilizadas para comercializar servicios turísticos a nivel internacional. Estos sistemas permiten conectar hoteles, aerolíneas, agencias de viajes y empresas de transporte dentro de una misma red de distribución.
        p.mb-3 Los GDS facilitan que agencias y operadores turísticos consulten disponibilidad, tarifas y reservas en tiempo real, ampliando el alcance comercial de los establecimientos hoteleros. Entre los sistemas más reconocidos se encuentran: Amadeus, Sabre, Galileo y Worldspan.

        .bg-fondo-17.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-3(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema4/img16.svg", data-aos="zoom-in").mx-auto
            .col-lg-10.col-md-12
              p.mb-0 En hotelería, los GDS son especialmente utilizados para reservas corporativas, viajes de negocios y agencias mayoristas. Además, permiten integrar información tarifaria y disponibilidad desde el PMS hacia diferentes mercados internacionales.

        p.mb-0 Aunque actualmente las OTA han ganado gran participación en el mercado turístico, los GDS continúan siendo herramientas importantes dentro de la distribución global de servicios de alojamiento.


    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema4/img07.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Para profundizar en qué son los GDS en turismo y cuáles son los más importantes, lo invitamos a consultar el siguiente artículo especializado: 
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.entornoturistico.com/que-son-los-gds-en-turismo-y-cuales-son-los-mas-importantes/" target="_blank")
                  span Consultar blog
                  i.fas.fa-file-pdf


    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Tendencias tecnológicas en hotelería

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-12.mb-4.mb-lg-0
        p.mb-0(data-aos="fade-right") La evolución tecnológica continúa transformando la industria hotelera mediante herramientas digitales orientadas a mejorar la experiencia del huésped y optimizar la operación. Actualmente, muchos establecimientos implementan soluciones basadas en automatización, inteligencia artificial y análisis de datos para fortalecer su competitividad.

      .col-lg-7.col-md-12.mb-0
        .bg-fondo-10.px-lg-4.py-lg-4.px-3.py-3.br-15(data-aos="fade-down")
          .row.align-items-center.justify-content-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema4/img18.svg", data-aos="zoom-in").mx-auto
            .col-lg
              p.mb-2 Entre las principales tendencias tecnológicas en hotelería se destacan:
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.col-md-6
                  ul.lista-ul.mb-0  
                    li
                      i.lista-ul__vineta
                      p.mb-0 PMS en la nube (<em>Cloud</em> PMS).
                    li
                      i.lista-ul__vineta
                      p.mb-0 <em>Check-in</em> digital.
                    li
                      i.lista-ul__vineta
                      | Llaves móviles.
                    li
                      i.lista-ul__vineta
                      | Inteligencia artificial.
                .col-lg-6.col-md-6
                  ul.lista-ul.mb-0  
                    li
                      i.lista-ul__vineta
                      | #[em Chatbots].
                    li
                      i.lista-ul__vineta
                      | Automatización de procesos.
                    li
                      i.lista-ul__vineta
                      | Análisis de datos.
                    li
                      i.lista-ul__vineta
                      | Integración móvil.

    .row.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img20.png").mx-auto
      .col-lg-9
        p.mb-3 Estas herramientas permiten ofrecer experiencias más ágiles, personalizadas y conectadas, respondiendo a las nuevas expectativas de los huéspedes y a las dinámicas del mercado turístico actual.
        p.mb-0 Según Oracle Hospitality (2023), la digitalización hotelera continuará orientándose hacia sistemas inteligentes capaces de integrar operaciones, analizar comportamiento de clientes y automatizar procesos en tiempo real.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.order-lg-1
          .row.bg-fondo-11.align-items-center.justify-content-center.br-15
            .col-md-6.col-lg-4.mb-2.mb-lg-0.order-2.order-md-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img24.png", data-aos="fade-right")
            .col-lg-8.order-1.order-md-2.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer la comprensión sobre las herramientas digitales y las innovaciones tecnológicas aplicadas actualmente en la industria hotelera.
              
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Transformación digital y experiencia del huésped en la hotelería moderna"
                tiempo
                :audio="require('@/assets/curso/audio/PODCAST2_TRANSFORMACION_DIGITAL_Y_EXPERIENCIA_DEL_HUESPED_EN_LA_HOTELERIA_MODERNA.mp3')"
              )


    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Seguridad de la información y protección de datos en hotelería


    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-23(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-2
          p.mb-0 La transformación digital y el uso de sistemas tecnológicos en los establecimientos de alojamiento han incrementado significativamente la necesidad de proteger la información y garantizar la seguridad de los datos almacenados en los sistemas hoteleros. Actualmente, los hoteles administran información sensible relacionada con reservas, documentos de identidad, métodos de pago, historial de huéspedes y transacciones financieras, por lo que la seguridad informática se convierte en un aspecto fundamental para la operación y la confianza del cliente.
        .col-lg-5.p-0.order-1.order-lg-1
          img(src="@/assets/curso/tema4/img23.png", alt="")


    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 La ciberseguridad comprende el conjunto de prácticas orientadas a proteger redes, dispositivos, aplicaciones y bases de datos frente a amenazas, accesos no autorizados o ataques informáticos. Según Kaspersky Labs (2021), la seguridad de la información busca preservar la confidencialidad, integridad y disponibilidad de los datos almacenados y transmitidos a través de sistemas tecnológicos.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema4/img24.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 En hotelería, gran parte de la operación funciona mediante modelos cliente/servidor, donde la información se almacena en servidores centrales conectados a diferentes equipos y dispositivos utilizados por recepción, reservas, administración y otros departamentos. Esta conectividad facilita la operación en tiempo real, pero también puede exponer los sistemas a riesgos como #[em malware], robo de información, fraudes digitales o pérdida de datos. Por esta razón, los hoteles implementan mecanismos de protección como sistemas antivirus, #[em firewalls], controles de acceso y procesos de encriptación de la información.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema4/img25.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 Otro aspecto importante corresponde a la seguridad de las aplicaciones y plataformas utilizadas en la gestión hotelera. Los sistemas PMS, motores de reserva y plataformas de pago deben contar con protocolos de seguridad que permitan proteger la información de huéspedes y garantizar transacciones seguras. Un fallo en la protección de estas herramientas podría afectar la operación del hotel y comprometer la confianza de los clientes.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema4/img26.png", alt="").mx-auto


    .row.align-items-center.mb-5.justify-content-center
      .col-lg-3.col-md-8.order-2.order-lg-1
        img(src="@/assets/curso/tema4/img27.png").mx-auto
      .col-lg-9.order-1.order-lg-2.mb-5.mb-lg-0
        p.mb-3 La protección de datos personales constituye uno de los aspectos más sensibles dentro de la industria hotelera. Los huéspedes esperan que su información sea administrada de manera segura y confidencial durante todo el proceso de reserva y alojamiento. Casos de ataques informáticos a grandes cadenas hoteleras han evidenciado la importancia de fortalecer las medidas de seguridad digital y establecer políticas claras de protección de la información.
        
        .bg-fondo-17.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0(data-aos="fade-right") Asimismo, la seguridad operativa implica definir roles y permisos dentro del PMS, permitiendo que cada usuario acceda únicamente a la información necesaria para el desarrollo de sus funciones. Esta segmentación ayuda a reducir riesgos relacionados con manipulación indebida o filtración de datos.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img29.svg", data-aos="zoom-in").mx-auto
      .col-lg
        p.mb-0 Finalmente, la capacitación del personal constituye uno de los elementos más importantes dentro de la ciberseguridad hotelera. Muchas amenazas digitales ocurren por errores humanos relacionados con el manejo inadecuado de correos electrónicos, contraseñas o dispositivos externos. Por ello, es fundamental fortalecer buenas prácticas de seguridad informática y promover una cultura organizacional orientada a la protección de la información.
        

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 8.
          span Riesgos y medidas de seguridad en hotelería
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Riesgo digital
                th Posible afectación
                th Medida de protección
            tbody
              tr
                td Robo de información.
                td Exposición de datos de huéspedes.
                td Sistemas de encriptación.
              tr
                td #[em Malware] o virus.
                td Daños en el sistema PMS.
                td Antivirus y actualizaciones.
              tr
                td Accesos no autorizados.
                td Manipulación de información.
                td Contraseñas y permisos.
              tr
                td Fraudes digitales.
                td Pérdidas económicas.
                td Plataformas de pago seguras.
              tr
                td Pérdida de información.
                td Afectación operativa.
                td Copias de seguridad.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La transformación digital ha cambiado significativamente la manera en que operan los establecimientos de alojamiento, convirtiendo la tecnología en un elemento fundamental para la gestión de reservas, el control operativo y la atención al huésped. Actualmente, el manejo de herramientas como los sistemas PMS, los canales de distribución digital y las plataformas de integración tecnológica no solo facilita la organización de la información, sino que también fortalece la competitividad y la calidad del servicio dentro de la industria hotelera.

    .row.align-content-center
      .col-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img31.svg", data-aos="zoom-in").mx-auto
      .col-lg
        p.mb-0 En este contexto, el fortalecimiento de competencias tecnológicas y operativas representa una necesidad permanente para el talento humano del sector hotelero, ya que la evolución de la industria exige profesionales capaces de adaptarse a nuevos sistemas, dinámicas digitales y procesos automatizados. De esta manera, el conocimiento y apropiación de las herramientas tecnológicas aplicadas a la hotelería contribuyen al desarrollo de una operación más eficiente, organizada y orientada a las necesidades actuales del huésped y del mercado turístico.
</template>

<script>
export default {
  name: 'Tema4',
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
