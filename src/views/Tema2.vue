<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operación de reservas en el #[em software] hotelero

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-2
          p.mb-0 La operación de reservas en el #[em software] hotelero constituye un proceso esencial dentro de la gestión de los establecimientos de alojamiento, ya que integra actividades técnicas, administrativas y de servicio orientadas a garantizar la correcta asignación de recursos, la optimización de la ocupación y la satisfacción del huésped.
        .col-lg-5.p-0.order-1.order-lg-1
          img(src="@/assets/curso/tema2/img01.png", alt="")

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img02.svg").mx-auto
      .col-lg
        p.mb-0 Desde una perspectiva operativa, el uso del #[em Property Management System] (PMS) permite sistematizar la información, reducir errores humanos y facilitar la toma de decisiones en tiempo real, lo cual contribuye directamente a la eficiencia organizacional y a la competitividad del sector.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Registro digital de reservas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-fondo-8.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema2/img03.svg").mx-auto
            .col-lg
              p.mb-3 El registro digital de reservas consiste en el ingreso de la información del huésped dentro del sistema PMS, permitiendo almacenar y administrar datos relacionados con la estadía y los servicios contratados. Este procedimiento reemplaza los antiguos registros manuales y facilita el acceso rápido a la información desde diferentes áreas del hotel.
              p.mb-0 Durante el proceso de registro se ingresan datos como:

    .bg-full-width.bg-fondo-9.px-5.py-4.mb-5(data-aos="fade-right")
      .container
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.mb-4.mb-lg-0
            img(src='@/assets/curso/tema2/img05.png', alt="").mx-auto
          .col-lg-9.col-md-12
            p.mb-4 Durante el proceso de registro se ingresan datos como:
            SlyderF(columnas="col-lg-6 col-xl-4 col-md-12 col-sm-12")
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center   	Nombre del huésped.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center 	Fechas de ingreso y salida.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center 	Tipo de habitación requerida.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center 	Número de huéspedes.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center 	Tarifa aplicada.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center 	Forma de pago.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center 	Canal de reserva.
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema2/img06.svg' alt="", style="width: 100px;").mx-auto
                p.mb-0.text-center Requerimientos especiales.

    .row.align-items-center.mb-4.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-color-23.p-4
          p.mb-0 El sistema genera automáticamente un código de reserva y actualiza la disponibilidad de habitaciones en tiempo real, evitando inconsistencias en la ocupación.


    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img30.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Le invitamos a consultar el siguiente video, que registra un ejemplo práctico del proceso de ingreso de una reserva en PMS: 
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RKpZdrmdneY" target="_blank")
                  span Consultar video
                  i.fas.fa-play-circle


    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Consulta de disponibilidad y tarifas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") El PMS permite consultar en tiempo real la disponibilidad de habitaciones y las tarifas vigentes según fechas, temporadas y niveles de ocupación. Esta funcionalidad facilita la atención al cliente y mejora el control operativo del hotel.
        p.mb-0 La consulta de disponibilidad puede realizarse mediante:

      .col-lg-5.col-md-6.mb-4.mb-lg-0
        .bg-fondo-10.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          .row.align-items-center.justify-content-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema2/img26.svg", data-aos="zoom-in").mx-auto
            .col-lg

              ul.lista-ul.mb-0  
                li
                  i.lista-ul__vineta
                  | Fechas específicas.
                li
                  i.lista-ul__vineta
                  | Tipo de habitación.
                li
                  i.lista-ul__vineta
                  | Número de huéspedes.
                li
                  i.lista-ul__vineta
                  | Promociones.
                li
                  i.lista-ul__vineta
                  | Paquetes especiales.

      .col-lg-3.col-md-6
        .row.align-items-center
          .col-lg-auto.col-12.mb-3.mb-lg-3.d-none.d-lg-flex.d-md-flex
            img(src="@/assets/curso/tema2/img08.svg", style="max-width: 100px;" data-aos="zoom-in")
          .col-lg-12
            p.mb-0(data-aos="fade-left") Asimismo, el sistema permite aplicar tarifas dinámicas y actualizaciones automáticas según estrategias de #[em revenue management], evitando inconsistencias entre canales de venta.

    .row.justify-content-center.align-items-center
      .col-lg-12.col-xl-10.col-md-12
        .container
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
              h3.titulo-con-imagen__texto Tipos de tarifas que administra el PMS 

  

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-xl-10
        .row.justify-content-center.row-cols-lg-5.row-cols-md-2.row-cols-1.no-pointer
          .col.mb-4.mb-lg-0
            .tarjeta.tarjeta--boton.bg-color-21.p-3.h-100
              .row.justify-content-center.mb-3
                .col-12  
                  img(src='@/assets/curso/tema2/img09.png' alt="", style="width: 120px;").mx-auto
              h4.text-center #[em Rack]
              p.mb-0.text-center Tarifa pública del hotel.

          .col.mb-4.mb-lg-0  
            .tarjeta.tarjeta--boton.bg-color-21.p-3.h-100
              .row.justify-content-center.mb-3
                .col-12  
                  img(src='@/assets/curso/tema2/img10.png' alt="", style="width: 120px;").mx-auto
              h4.text-center Corporativa
              p.mb-0.text-center Convenios empresariales.

          .col.mb-4.mb-lg-0  
            .tarjeta.tarjeta--boton.bg-color-21.p-3.h-100
              .row.justify-content-center.mb-3
                .col-12   
                  img(src='@/assets/curso/tema2/img11.png' alt="", style="width: 120px;").mx-auto
              h4.text-center Promocional
              p.mb-0.text-center Descuentos especiales.

          .col.mb-4.mb-lg-0  
            .tarjeta.tarjeta--boton.bg-color-21.p-3.h-100
              .row.justify-content-center.mb-3
                .col-12  
                  img(src='@/assets/curso/tema2/img29.png' alt="", style="width: 120px;").mx-auto
              h4.text-center No reembolsable
              p.mb-0.text-center Tiene restricción por cancelación.

          .col.mb-4.mb-lg-0  
            .tarjeta.tarjeta--boton.bg-color-21.p-3.h-100
              .row.justify-content-center.mb-3
                .col-12  
                  img(src='@/assets/curso/tema2/img12.png' alt="", style="width: 120px;").mx-auto
              h4.text-center #[em Best Available Rate - BAR]
              p.mb-0.text-center Mejor tarifa disponible.

    .bg-full-width.bg-fondo-6.px-5.py-4.mb-3
      .container(data-aos="fade-right")
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Caso práctico

            p.mb-0 Un huésped solicita una habitación para un fin de semana festivo. El recepcionista consulta en el PMS la disponibilidad y observa que el hotel tiene alta ocupación. El sistema ajusta automáticamente las tarifas según la demanda y muestra las habitaciones disponibles para las fechas seleccionadas.

          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema2/img13.png", alt="").img-fluid.w-75.mx-auto

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Confirmación y modificación de reservas

    p.mb-4 Una vez registrada la información, el PMS permite confirmar la reserva y generar automáticamente un código de confirmación que sirve como soporte para el huésped y el hotel. La confirmación puede enviarse mediante correo electrónico, mensaje o impresión física.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 2.]
          span Flujo de confirmación de reserva en PMS  
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema2/img14.svg", alt="La figura 2 ilustra el flujo de confirmación de una reserva en PMS y sus pasos: Solicitud, Verificación, Registro, Confirmación y Código de reserva")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema2/img15.svg", alt="La figura 2 ilustra el flujo de confirmación de una reserva en PMS y sus pasos: Solicitud, Verificación, Registro, Confirmación y Código de reserva")
        figcaption Nota. SENA, (2026).


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-6.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-4(data-aos="fade-right") Posteriormente, el sistema también facilita la modificación de reservas cuando el huésped solicita cambios relacionados con:

        .row
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Fechas.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Tipo de habitación.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Número de huéspedes.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Servicios adicionales.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img17.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Forma de pago.


          p.mb-0 Cada modificación queda registrada automáticamente en el historial del sistema, permitiendo mantener control y trazabilidad de los cambios realizados.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Cancelaciones, anulaciones y #[em no show] en el PMS

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 El #[em software] hotelero permite gestionar cancelaciones y anulaciones de manera organizada, actualizando automáticamente la disponibilidad de habitaciones y aplicando las políticas establecidas por el hotel.
        <br><br>
        p.mb-0 Esta función tiene como objetivo mantener la disponibilidad de habitaciones actualizadas, aplicando políticas de cancelación de forma justa y oportuna para poder ofrecer una experiencia confiable al huésped.


    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 3.]
          span Proceso de cancelación y liberación de habitaciones   
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema2/img19.svg", alt="En la figura se ilustra el proceso de cancelación y liberación de habitaciones en un sistema PMS.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema2/img20.svg", alt="En la figura se ilustra el proceso de cancelación y liberación de habitaciones en un sistema PMS.")
        figcaption Nota. SENA, (2026).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-6.mb-4.mb-lg-0.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema2/img21.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") Las cancelaciones ocurren cuando el huésped decide suspender la reserva antes de la llegada. Por su parte, la anulación generalmente corresponde a errores administrativos o duplicidad de información dentro del sistema.

        p.mb-3(data-aos="fade-right") El PMS también permite registrar casos de #[em no show], situación en la cual el huésped no se presenta ni cancela la reserva. Estos registros son importantes para el análisis de ocupación y la aplicación de políticas de cobro o penalización.

        p.mb-0(data-aos="fade-right") En la siguiente tabla se describen las diferencias entre la cancelación, la anulación y el #[em no show] en un establecimiento de alojamiento. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 3.
          span Diferencias entre cancelación, anulación y #[em no show] en reservas hoteleras
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Concepto
                th Definición
                th Quién la realiza
            tbody
              tr
                td Cancelación
                td Eliminación voluntaria de una reserva previamente confirmada.
                td Huésped o cliente
              tr
                td Anulación
                td Eliminación de una reserva por motivos administrativos o error operativo.
                td Personal del hotel
              tr
                td #[em No show]
                td Ausencia del huésped sin previo aviso en la fecha de llegada.
                td Huésped (por omisión)



    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Historial del huésped y seguimiento de reservas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") Los sistemas PMS almacenan información histórica de los huéspedes, permitiendo realizar seguimiento de estadías, preferencias y comportamiento de consumo. Esta funcionalidad fortalece la personalización del servicio y facilita estrategias de fidelización.
        p.mb-3 Dentro del historial del huésped pueden registrarse:
        
        .row.mb-0
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img27.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Reservas anteriores.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img27.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Preferencias de habitación.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img27.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Solicitudes especiales.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img27.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Historial de pagos.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img27.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Frecuencia de visitas.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img27.svg' alt="")
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Observaciones operativas.

      .col-lg-3.col-md-6
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in")

    .row.align-items-center.mb-5
      .col-lg-12
        p.mb-0 El seguimiento de esta información permite brindar una atención más personalizada y mejorar la experiencia del cliente dentro del establecimiento.

 
    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.order-lg-1
          .row.bg-fondo-11.align-items-center.justify-content-center.br-15
            .col-md-6.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
              figure
                img(src="@/assets/curso/tema2/img24.png", data-aos="fade-right")
            .col-lg-8.order-1.order-md-1.order-lg-2.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 A continuación, lo invitamos a consultar el siguiente pódcast sobre la importancia del historial del huésped y el seguimiento de reservas en la operación hotelera: 
              
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Importancia del historial del huésped y el seguimiento de reservas en la operación hotelera"
                tiempo
                :audio="require('@/assets/curso/audio/PODCAST1_IMPORTANCIA_DEL_HISTORIAL_DEL_HUESPED_Y_EL_SEGUIMIENTO_DE_RESERVAS_EN_LA_OPERACION_HOTELERA.mp3')"
              )

    .row.align-items-center.mb-3
      .col-lg-12
        p.mb-0 La operación de reservas mediante #[em software] hotelero permite optimizar el control de ocupación, automatizar procesos y mejorar la administración de la información dentro de los establecimientos de alojamiento. Herramientas como el PMS facilitan el registro digital de reservas, la gestión de tarifas, las modificaciones, cancelaciones y el seguimiento de huéspedes, fortaleciendo la eficiencia operativa y la calidad del servicio. En este sentido, el manejo adecuado de estas herramientas constituye una competencia esencial para el desempeño técnico profesional en el área de recepción y reservas hoteleras.

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
