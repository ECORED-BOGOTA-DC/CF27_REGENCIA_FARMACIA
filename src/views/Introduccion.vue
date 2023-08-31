<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 El seguimiento al uso de medicamentos, homeopáticos, fitoterapéuticos, productos biológicos, dispositivos médicos (incluidos los sobre medida como ortesis y prótesis), equipos biomédicos, reactivos de diagnóstico <i>in vitro</i>, elementos de rayos X y de uso odontológico; al igual que todos los insumos utilizados en la asistencia domiciliaria, hospitalaria y extramural, también debe estar a cargo de la entidad prestadora de servicio, deben contar con programas de seguimiento, que contengan la consulta constante de las alertas y normas formuladas por el INVIMA.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      p Es importante resaltar, que incluso las características genéticas y la enfermedad del paciente, la no oportunidad de recursos, las condiciones culturales y sociales, inclusive, factores ajenos al paciente, como el proceso de producción, almacenamiento, exportación y distribución de los medicamentos, la falsificación o la baja calidad de los mismos, hacen parte de una gran cadena de eslabones que pueden generar incidentes y eventos adversos en la salud del individuo, lo cual da como resultado una atención riesgosa y con futuras complicaciones, que en algunos casos puede conllevar a la muerte.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
