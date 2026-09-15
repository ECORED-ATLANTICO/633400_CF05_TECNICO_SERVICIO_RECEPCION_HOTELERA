<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-4(data-aos="fade-right") El componente formativo #[em Software] hotelero y las reservaciones en hoteles constituye un eje fundamental en la formación del aprendiz del programa de operaciones de servicios de alojamiento, debido a que la transformación digital ha modificado significativamente la gestión operativa y comercial de los establecimientos hoteleros. A través de este componente, el aprendiz fortalecerá conocimientos relacionados con el funcionamiento de los sistemas PMS, la operación digital de reservas, el control de ocupación y las herramientas tecnológicas utilizadas para la administración eficiente de la información hotelera.

        .row.align-items-center.justify-content-center.mb-0(data-aos="fade-right")
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/intro/img03.svg").mx-auto
          .col-lg
            p.mb-0 Asimismo, se favorecerá la apropiación de competencias técnicas y digitales orientadas al manejo de reportes operativos, monitoreo en tiempo real, integración tecnológica y distribución digital de servicios de alojamiento mediante OTA, #[em Channel Manager] y sistemas GDS. De igual manera, el aprendiz comprenderá la importancia de las tendencias tecnológicas aplicadas a la hotelería moderna, fortaleciendo habilidades para optimizar procesos operativos, mejorar la experiencia del huésped y responder a las dinámicas actuales del sector turístico y hotelero.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Software hotelero y las reservaciones en hoteles constituye un eje fundamental en la formación del aprendiz del programa de operaciones de servicios de alojamiento, debido a que la transformación digital ha modificado significativamente la gestión operativa y comercial de los establecimientos hoteleros. A través de este componente, el aprendiz fortalecerá conocimientos relacionados con el funcionamiento de los sistemas PMS, la operación digital de reservas, el control de ocupación y las herramientas tecnológicas utilizadas para la administración eficiente de la información hotelera. Asimismo, se favorecerá la apropiación de competencias técnicas y digitales orientadas al manejo de reportes operativos, monitoreo en tiempo real, integración tecnológica y distribución digital de servicios de alojamiento mediante OTA, Channel Manager y sistemas GDS. De igual manera, el aprendiz comprenderá la importancia de las tendencias tecnológicas aplicadas a la hotelería moderna, fortaleciendo habilidades para optimizar procesos operativos, mejorar la experiencia del huésped y responder a las dinámicas actuales del sector turístico y hotelero.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
