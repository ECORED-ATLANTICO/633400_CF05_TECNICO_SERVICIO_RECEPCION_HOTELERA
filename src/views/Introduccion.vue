<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.px-5.py-4
      img(src="@/assets/curso/intro/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text El componente formativo #[em Software] hotelero y las reservaciones en hoteles permite al aprendiz comprender cómo la tecnología ha transformado la operación de los establecimientos de alojamiento y la gestión de reservas. Actualmente, los hoteles utilizan sistemas informáticos que facilitan el control de habitaciones, la administración de huéspedes, la generación de reportes y la integración con canales digitales de comercialización, optimizando los procesos operativos y la atención al cliente.

    .row.align-items-center.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/intro/img01.svg").mx-auto
      .col-lg
        p.mb-0 A lo largo de este componente se abordarán temas relacionados con la evolución del #[em software] hotelero, el funcionamiento de los sistemas PMS, la gestión digital de reservas, el control de ocupación y las nuevas herramientas tecnológicas utilizadas en hotelería. De esta manera, el aprendiz fortalecerá competencias técnicas y digitales necesarias para desenvolverse eficientemente en entornos operativos del sector de alojamiento.
      

</template>

<script>
export default {
  name: 'Introduccion',
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
