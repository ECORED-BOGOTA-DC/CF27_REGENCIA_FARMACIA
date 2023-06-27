<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo colombiano

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema1/img1.svg', alt='alt')

      p.mt-4 Todas las disposiciones normativas que hacen referencia al uso racional de medicamentos y dispositivos médicos son generadas por el Ministerio de Salud y Protección Social y el ente de control es el INVIMA, organismo regulador, encargado de las actividades de inspección, vigilancia y control al respecto; de esta forma se verifica que los posibles riesgos relacionados con el uso de productos farmacéuticos, disminuyan, protegiendo así la salud del individuo y la comunidad.

    .row.justify-content-center.align-items-center.mb-5
      h5.text-center Es importante tener en cuenta que:

      .col-lg-10
      .tarjeta.bg-Slyder1.p-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              p La responsabilidad del gobierno, se debe orientar a garantizar  la calidad de los medicamentos,  la tecnología biomédica y los dispositivos médicos, donde los esfuerzos de los laboratorios fabricantes y empresas comercializadoras,  aseguren que los productos farmacéuticos disponibles para los pacientes / clientes, sean seguros y efectivos, razón por la cual los programas nacionales de farmacovigilancia, tecnovigilancia  y reactivo vigilancia, son  un compromiso no solo del gobierno, sino de todo el sector farmacéutico; en la cual  la responsabilidad social y ética,  tiene una directa relación con la salud individual y colectiva de los colombianos.  

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              p La responsabilidad del gobierno, se debe orientar a garantizar  la calidad de los medicamentos,  la tecnología biomédica y los dispositivos médicos, donde los esfuerzos de los laboratorios fabricantes y empresas comercializadoras,  aseguren que los productos farmacéuticos disponibles para los pacientes / clientes, sean seguros y efectivos, razón por la cual los programas nacionales de farmacovigilancia, tecnovigilancia  y reactivo vigilancia, son  un compromiso no solo del gobierno, sino de todo el sector farmacéutico; en la cual  la responsabilidad social y ética,  tiene una directa relación con la salud individual y colectiva de los colombianos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              p Todos los actores implicados en la fabricación, importación, comercialización, distribución, prescripción, manipulación y uso de los medicamentos, dispositivos médicos, equipos biomédicos e insumos utilizado en la atención en salud, deben reportar al INVIMA y a los entes territoriales competentes, cuando se identifique algún evento o incidente adverso asociado al uso de estos.  Por otra parte, dentro de las políticas de calidad, el ministerio de salud y protección social, fija la política de seguridad centrada en el paciente, donde la prioridad es el reporte de eventos o incidentes adversos como elemento coyuntural entre la vigilancia en salud y la prestación de servicios para la salud.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              p Es importante resaltar que, aunque la prioridad es velar por la salud humana; no es menos importante en cuanto a salud pública se refiere, la salud del ambiente y de los animales, razón por la cual el ICA es el ente de inspección vigilancia y control; cuyo fin es prevenir y disminuir los riesgos originados del uso de medicamentos veterinarios, posterior a su venta.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='alt')







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
