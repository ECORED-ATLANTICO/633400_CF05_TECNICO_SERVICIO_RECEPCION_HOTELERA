<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Control operativo y monitoreo hotelero

    .row.align-items-center.mb-3.justify-content-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        img(src="@/assets/curso/tema3/img01.png").mx-auto
      .col-lg-9
        p.mb-0 El control operativo y el monitoreo en tiempo real constituyen funciones esenciales dentro de la administración hotelera moderna, ya que permiten supervisar la ocupación, el estado de las habitaciones, las reservas y el comportamiento general de la operación. Gracias al uso de sistemas PMS, los hoteles pueden centralizar información, generar reportes automáticos y visualizar indicadores clave para apoyar la toma de decisiones. Estas herramientas tecnológicas facilitan la coordinación entre áreas operativas y contribuyen a mantener un servicio más organizado, eficiente y orientado a la satisfacción del huésped.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 #[em Dashboard] operativo hotelero


    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-23(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-1
          p.mb-0 El #[em dashboard] operativo hotelero es un panel visual integrado dentro del PMS que permite visualizar en tiempo real información relacionada con la operación del establecimiento. A través de gráficos, indicadores y alertas, el personal puede consultar rápidamente datos sobre ocupación, llegadas, salidas, habitaciones disponibles, ingresos y estados operativos.
        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema3/img02.png", alt="")


    .row.align-content-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img03.svg").mx-auto
      .col-lg
        p.mb-2 Este tablero facilita la supervisión de la operación diaria y mejora la capacidad de respuesta frente a situaciones que requieren atención inmediata. Además, permite identificar tendencias y apoyar la toma de decisiones estratégicas relacionadas con ventas, ocupación y disponibilidad.  
        p.mb-0 Información que puede mostrar un #[em dashboard] hotelero.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Indicador de ocupación")
            p.mb-0 El #[em dashboard] permite visualizar el porcentaje de habitaciones ocupadas en tiempo real, facilitando el control de disponibilidad y el análisis del comportamiento del hotel durante el día, la semana o la temporada. Esta información ayuda a tomar decisiones relacionadas con tarifas, ventas y distribución de habitaciones.
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Control de <em>check-in</em> y <em>check-out</em>")
            p.mb-0 El sistema muestra la cantidad de huéspedes que ingresarán y saldrán durante el día, permitiendo preparar habitaciones, organizar el personal y agilizar el proceso de recepción y coordinar procesos de limpieza y disponibilidad para nuevas reservas.
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Control operativo de <em>housekeeping</em>")
            p.mb-0 Permite identificar el estado actual de cada habitación y mejorar la coordinación entre recepción y #[em housekeeping].
            


    .row.mb-4.justify-content-center
      .col-lg-3.mb-4.mb-lg-0.col-md-6
        .tarjeta.bg-color-21.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12  
              img(src='@/assets/curso/tema3/img05.png' alt="", style="width: 120px;").mx-auto
          h4.text-center Seguimiento financiero
          p.mb-0.text-center El #[em dashboard] puede consolidar información económica relacionada con ventas de habitaciones y servicios adicionales.

      .col-lg-3.mb-4.mb-lg-0.col-md-6
        .tarjeta.bg-color-21.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12  
              img(src='@/assets/curso/tema3/img06.png' alt="", style="width: 120px;").mx-auto
          h4.text-center Seguimiento en tiempo real
          p.mb-0.text-center El sistema genera notificaciones automáticas sobre situaciones que requieren atención inmediata por parte del personal.
      
      .col-lg-3.mb-4.mb-lg-0.col-md-6
        .tarjeta.bg-color-21.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12  
              img(src='@/assets/curso/tema3/img07.png' alt="", style="width: 120px;").mx-auto
          h4.text-center Gestión de inventario hotelero
          p.mb-0.text-center Facilita el monitoreo de reservas activas y la disponibilidad futura del hotel.

      .col-lg-3.mb-4.mb-lg-0.col-md-6
        .tarjeta.bg-color-21.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12  
              img(src='@/assets/curso/tema3/img08.png' alt="", style="width: 120px;").mx-auto
          h4.text-center Experiencia del cliente
          p.mb-0.text-center Algunos PMS integran indicadores relacionados con opiniones y experiencia del huésped.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 #[em Forecasting] y pronóstico de ocupación
    
    .row.mb-5
      .col-lg-8
        p.mb-0 El #[em forecasting] hotelero consiste en el análisis y proyección de la ocupación futura del establecimiento mediante el uso de datos históricos, reservas confirmadas y tendencias de comportamiento del mercado. Esta herramienta permite anticipar niveles de demanda y apoyar la planeación operativa y comercial del hotel.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 4.]
          span Gráfico predictivo de pronóstico de ocupación 
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema3/img09.png", alt="La figura ilustra una gráfica comparativa de ocupación hotelera real y proyectada durante 30 días. En ella se incluyen indicadores de ocupación promedio reales del hotel del 70 %, ocupación proyectada del 76 % y una diferencia positiva del 6 %. Estos datos son utilizados para apoyar el análisis y pronóstico operativo del hotel.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema3/img10.png", alt="La figura ilustra una gráfica comparativa de ocupación hotelera real y proyectada durante 30 días. En ella se incluyen indicadores de ocupación promedio reales del hotel del 70 %, ocupación proyectada del 76 % y una diferencia positiva del 6 %. Estos datos son utilizados para apoyar el análisis y pronóstico operativo del hotel.")
        figcaption Nota. SENA, (2026).



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-1.order-lg-2.mb-3.mb-lg-0
        p.mb-4(data-aos="fade-right") Los sistemas PMS facilitan la generación automática de pronósticos de ocupación, permitiendo:

        .row.mb-3.mb-lg-2
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Planificar personal.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Ajustar tarifas.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Diseñar promociones.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Controlar disponibilidad.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Optimizar ingresos.

        p.mb-0 El #[em forecasting] también ayuda a reducir riesgos relacionados con sobreocupación o baja demanda.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Reportes operativos y administrativos


    .bg-full-width.bg-fondo-12.px-5.py-4
      img(src="@/assets/curso/tema3/img13.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Dentro de la operación hotelera, la generación de reportes constituye una herramienta fundamental para el control, análisis y seguimiento de las actividades diarias del establecimiento. Gracias a los sistemas PMS, los hoteles pueden consolidar información operativa y administrativa de manera automática, permitiendo obtener datos actualizados sobre reservas, ocupación, ingresos, estado de habitaciones y comportamiento de los huéspedes. Esta información facilita la toma de decisiones y contribuye a mejorar la organización interna del hotel.

    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 Los reportes operativos permiten supervisar las actividades relacionadas directamente con la prestación del servicio, especialmente en áreas como recepción, reservas y #[em housekeeping]. A través de estos informes, el personal puede conocer las llegadas y salidas programadas, las habitaciones disponibles, los cambios de estado y las novedades que requieren atención inmediata. Por ejemplo, el reporte diario de ocupación permite identificar cuántas habitaciones están disponibles, cuáles se encuentran ocupadas y cuáles requieren limpieza o mantenimiento.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img14.png", alt="").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 Por su parte, los reportes administrativos y financieros se enfocan en el análisis de ingresos, producción hotelera y comportamiento comercial del establecimiento. Estos informes permiten evaluar indicadores relacionados con ventas, tarifas promedio, cancelaciones, #[em no show] y desempeño de los canales de comercialización. Según Kasavana y Cahill (2017), la automatización de reportes facilita el análisis estratégico de la operación y mejora la capacidad de respuesta frente a cambios en la demanda hotelera.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/img15.png", alt="").mx-auto

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-3.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-3(data-aos="fade-right") Una de las principales ventajas de los reportes generados desde el PMS es la actualización en tiempo real de la información. Esto permite que los diferentes departamentos del hotel trabajen con datos centralizados y reduzcan errores derivados de registros manuales o desactualizados. Además, la información almacenada puede utilizarse para realizar análisis históricos y proyectar tendencias de ocupación y comportamiento de los huéspedes.

        p.mb-0(data-aos="fade-right") A continuación se presenta una tabla con los tipos de reportes hoteleros y su utilidad:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 4.
          span Tipos de reportes hoteleros y su utilidad
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Tipo de reporte
                th Información que presenta
                th Área que lo utiliza
                th Utilidad operativa
            tbody
              tr
                td Reporte de ocupación
                td Habitaciones ocupadas y disponibles
                td Recepción y reservas
                td Control de disponibilidad
              tr
                td Llegadas y salidas
                td #[em Check-in] y #[em check-out] programados
                td Recepción
                td Planeación operativa
              tr
                td Reporte financiero
                td Ingresos y pagos
                td Administración
                td Seguimiento económico
              tr
                td #[em No show] y cancelaciones
                td Reservas incumplidas
                td Reservas
                td Análisis de comportamiento
              tr
                td Reporte de #[em housekeeping]
                td Estado de habitaciones
                td Ama de llaves
                td Coordinación de limpieza
              tr
                td Reporte de tarifas
                td Tarifas y promociones aplicadas
                td Comercial
                td Control tarifario

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Control de habitaciones y #[em housekeeping]

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") El control de habitaciones representa una de las funciones operativas más importantes dentro de la administración hotelera, ya que permite supervisar permanentemente el estado de las habitaciones y coordinar la disponibilidad del hotel. Este proceso se realiza principalmente entre recepción y el departamento de #[em housekeeping] mediante el apoyo del sistema PMS.
        
        .bg-fondo-13.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 En los hoteles modernos, el PMS actualiza en tiempo real el estado operativo de cada habitación, facilitando la comunicación entre áreas y optimizando los tiempos de respuesta. Gracias a esta herramienta, el personal puede identificar cuáles habitaciones están disponibles, ocupadas, pendientes de limpieza, fuera de servicio o en mantenimiento. Esto permite organizar las tareas del personal de #[em housekeeping] y agilizar la asignación de habitaciones para nuevos huéspedes.
      .col-lg-3.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 5.]
          span Plano de control de habitaciones en PMS  
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema3/img19.png", alt="La figura detalla el plano visual de habitaciones de un hotel organizado por pisos y habitaciones numeradas. Cada habitación utiliza un color diferente para indicar su estado operativo en tiempo real: verde para vacía limpia, azul para vacía sucia, amarillo para ocupada, morado para mantenimiento, rojo para fuera de servicio y gris para bloqueada. El plano incluye una leyenda lateral con el significado de cada color y un resumen general del estado de ocupación del hotel.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema3/img20.png", alt="La figura detalla el plano visual de habitaciones de un hotel organizado por pisos y habitaciones numeradas. Cada habitación utiliza un color diferente para indicar su estado operativo en tiempo real: verde para vacía limpia, azul para vacía sucia, amarillo para ocupada, morado para mantenimiento, rojo para fuera de servicio y gris para bloqueada. El plano incluye una leyenda lateral con el significado de cada color y un resumen general del estado de ocupación del hotel.")
        figcaption Nota. SENA, (2026).
    
    p.mb-4(data-aos="fade-right") La integración tecnológica entre recepción y #[em housekeeping] contribuye significativamente a mejorar la experiencia del huésped, ya que permite reducir tiempos de espera durante el #[em check-in] y mantener un mejor control operativo de la ocupación. Además, facilita el seguimiento de novedades relacionadas con mantenimiento preventivo, daños o requerimientos especiales de las habitaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 5.
          span Estados operativos de habitaciones en el PMS
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Estado de habitación
                th Significado operativo
                th Acción requerida
            tbody
              tr
                td Vacía limpia
                td Habitación disponible para venta
                td Asignación a huésped
              tr
                td Vacía sucia
                td Habitación pendiente de limpieza
                td Intervención de #[em housekeeping]
              tr
                td Ocupada
                td Habitación en uso por huésped
                td Seguimiento operativo
              tr
                td Fuera de servicio
                td Habitación no disponible
                td Revisión técnica
              tr
                td En mantenimiento
                td Requiere reparación
                td Coordinación con mantenimiento
              tr
                td Bloqueada
                td Reservada o restringida
                td Control de disponibilidad

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Alertas operativas y seguimiento en tiempo real

    p.mb-4 Los sistemas PMS modernos incorporan herramientas de monitoreo y alertas automáticas que permiten supervisar en tiempo real diferentes situaciones operativas dentro del hotel. Estas notificaciones facilitan el seguimiento de procesos, ayudan a prevenir errores y mejoran la coordinación entre departamentos.


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-21.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las alertas operativas funcionan como mecanismos de control que informan al personal sobre eventos que requieren atención inmediata. Entre las situaciones más comunes se encuentran habitaciones pendientes de limpieza, #[em check-in] próximos, pagos pendientes, reservas duplicadas, sobreocupación o solicitudes especiales de huéspedes. Gracias a estas herramientas, el personal puede responder oportunamente y evitar afectaciones en la experiencia del cliente.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        PasosA.color-primario(tipo="l")
          .row(titulo="08:15 a. m. – Habitación pendiente de limpieza").align-items-center
            .col-lg.order-2.order-lg-1
              h3 08:15 a. m. – Habitación pendiente de limpieza
              p La habitación 305 presenta más de 30 minutos de retraso en limpieza. El área de #[em housekeeping] recibe la alerta para priorizar la atención y liberar la habitación lo antes posible.
            .col-auto.order-1.order-lg-2.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
          .row(titulo="08:45 a. m. – <em>Check-in</em> realizado").align-items-center
            .col-auto.order-1.order-lg-1.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
            .col-lg.order-2.order-lg-2.text-left
              h3 08:45 a. m. – #[em Check-in] realizado
              p El huésped de la reserva número 12540 realizó correctamente el proceso de #[em check-in]. La información queda actualizada en recepción y el sistema registra la habitación como ocupada.
          .row(titulo="09:00 a. m. – <em>Check-in</em> próximo").align-items-center
            .col-lg.order-2.order-lg-1
              h3 09:00 a. m. – #[em Check-in] próximo
              p El sistema informa la llegada programada de un huésped en los próximos 15 minutos para la reserva 12548 en la habitación 412. Recepción prepara el ingreso y verifica disponibilidad.
            .col-auto.order-1.order-lg-2.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
          .row(titulo="10:20 a. m. – Pago pendiente").align-items-center
            .col-auto.order-1.order-lg-1.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
            .col-lg.order-2.order-lg-2.text-left
              h3 10:20 a. m. – Pago pendiente
              p La reserva número 12490 presenta un pago pendiente de confirmación. El área de reservas debe validar la garantía y verificar el estado del cobro antes del ingreso del huésped.
          .row(titulo="11:10 a. m. – Habitación en mantenimiento").align-items-center
            .col-lg.order-2.order-lg-1
              h3 11:10 a. m. – Habitación en mantenimiento
              p La habitación 502 reporta daños en el sistema de aire acondicionado. El PMS registra la novedad y cambia temporalmente el estado de la habitación a mantenimiento.
            .col-auto.order-1.order-lg-2.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
          .row(titulo="12:30 p. m. – Sobreocupación prevista").align-items-center
            .col-auto.order-1.order-lg-1.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
            .col-lg.order-2.order-lg-2.text-left
              h3 12:30 p. m. – Sobreocupación prevista
              p El sistema proyecta una ocupación del 95 % para el día siguiente. La gerencia recibe una alerta preventiva para controlar disponibilidad y evitar sobreventas.
          .row(titulo="01:05 p. m. – Habitación lista").align-items-center
            .col-lg.order-2.order-lg-1
              h3 01:05 p. m. – Habitación lista
              p #[em Housekeeping] actualiza la habitación 305 como limpia y disponible para nuevas reservas o asignaciones de #[em check-in].
            .col-auto.order-1.order-lg-2.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
          .row(titulo="03:15 p. m. – Mantenimiento programado").align-items-center
            .col-auto.order-1.order-lg-1.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")
            .col-lg.order-2.order-lg-2.text-left
              h3 03:15 p. m. – Mantenimiento programado
              p La habitación 208 se encuentra temporalmente fuera de servicio por mantenimiento programado. El sistema restringe su venta hasta finalizar la intervención técnica.
          .row(titulo="04:10 p. m. – <em>No show</em>").align-items-center
            .col-lg.order-2.order-lg-1
              h3 04:10 p. m. – #[em No show]
              p El huésped de la reserva número 12470 no se presentó al #[em check-in] ni realizó cancelación previa. El PMS registra automáticamente el caso como #[em no show] y actualiza la disponibilidad.
            .col-auto.order-1.order-lg-2.d-lg-block.d-md-block.d-none.mb-4.mb-lg-0.mx-auto
              figure
                img(src='@/assets/curso/tema3/img22.svg', alt="")


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.col-md-6.mb-3.mb-lg-0.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema3/img25.png", data-aos="zoom-in")

      .col-lg-10.col-md-12
        .bg-fondo-14.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-3
          p.mb-0 El seguimiento en tiempo real también permite visualizar cambios operativos de manera inmediata. Por ejemplo, cuando #[em housekeeping] actualiza una habitación como limpia, recepción puede asignarla automáticamente a una nueva reserva. De igual manera, el sistema puede generar alertas cuando una reserva no cuenta con garantía o cuando existe riesgo de sobreventa en determinadas fechas.

        p.mb-0(data-aos="fade-right") La incorporación de este tipo de herramientas tecnológicas fortalece la eficiencia operativa del hotel y mejora la comunicación interna entre áreas. Además, permite realizar seguimiento constante al comportamiento de la operación y facilita la toma de decisiones frente a situaciones inesperadas o cambios en la ocupación.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 6.
          span Alertas más comunes en un PMS
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Tipo de alerta
                th Situación detectada
                th Acción recomendada
            tbody
              tr
                td Habitación pendiente
                td No ha sido limpiada
                td Priorizar #[em housekeeping]
              tr
                td Reserva sin garantía
                td Falta confirmación de pago
                td Contactar al huésped
              tr
                td Sobreocupación
                td Exceso de reservas
                td Reubicar o controlar disponibilidad
              tr
                td #[em Check-in] próximo
                td Llegada cercana del huésped
                td Preparar habitación
              tr
                td Pago pendiente
                td Factura no cerrada
                td Verificar cobro
              tr
                td Mantenimiento requerido
                td Reporte técnico activo
                td Coordinar reparación

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema3/img24.svg").mx-auto
      .col-lg
        p.mb-0 El control operativo y el monitoreo hotelero mediante sistemas PMS permiten supervisar en tiempo real la ocupación, las reservas y el estado de las habitaciones, facilitando una gestión más organizada y eficiente. Herramientas como #[em dashboards], reportes, #[em forecasting] y alertas operativas contribuyen a optimizar la toma de decisiones, fortalecer la coordinación entre áreas y mejorar la experiencia del huésped. En este sentido, el uso adecuado de estas herramientas tecnológicas representa una competencia fundamental para el desempeño técnico profesional en los servicios de alojamiento.


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

<style lang="sass"></style>
