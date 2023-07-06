<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, la #[b farmacovigilancia] y la #[b tecnovigilancia] son estrategias clave para garantizar la seguridad y eficacia de los medicamentos y dispositivos médicos. Estos programas buscan recopilar, analizar y evaluar la información sobre eventos adversos y problemas técnicos, y tomar medidas para prevenir y mitigar los riesgos asociados con su uso. La implementación adecuada de estos programas requiere la colaboración y capacitación del personal de salud, así como el cumplimiento de los requisitos normativos establecidos. El siguiente esquema proporciona una breve revisión de los temas abordados.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
