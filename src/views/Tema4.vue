<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Programa de tecnovigilancia
    
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='alt')
      .col-lg-8
        .bloque-texto-f.color-primario.pt-4.px-5.bloque-texto-tema4
          .bloque-texto-f__comillas
          h4.text-regular.bloque-texto-f__texto Es una estrategia de vigilancia post comercialización y evaluación sanitaria, para la identificación, evaluación, gestión y divulgación oportuna de la información de seguridad relacionada con el uso de los dispositivos médicos que se importan, fabrican y distribuyen en el país, afín de tomar medidas eficientes en aras de proteger la salud pública de los colombianos.
          .bloque-texto-f__autor
            p.mb-0 <b>(Resolución 4816 de 2008, Artículo 1)</b>
          

        .cajon.color-acento-botones.p-4
          p Para comprender la importancia de la tecnovigilancia, es muy importante revisar el concepto sobre DM (Dispositivos médicos) los cuales incluyen a todos los equipos biomédicos utilizados en la asistencia a los pacientes en el entorno hospitalario, sin importar el nivel de complejidad en el que se encuentren (ver figura 1). 


    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-3
          h5 Figura 1
          span Ciclo de vida de los dispositivos médicos  

        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='alt')
          p.text-center.mt-3 Nota. Programa Nacional de Tecnovigilancia INVIMA.

    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p Se invita al aprendiz a consultar los documentos <b>ABC de dispositivos médicos y dispositivos médicos</b> que se encuentran en el material complementario.

        p.mt-3 La metodología de las estrategias de vigilancia epidemiológica estructuradas al interior del programa nacional de tecnovigilancia para eventos o incidentes puede ser:

        ul.lista-ul--color
          li 
            i.fas.fa-atom
            | Vigilancia proactiva.
          li 
            i.fas.fa-atom
            | Vigilancia pasiva.
          li 
            i.fas.fa-atom
            | Vigilancia activa.
       
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='alt')

    .row.justify-content-center.align-items-center
      p.text-center <b>Los principios del programa nacional de tecnovigilancia son (ver figura 2): </b>

      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-3
          h5 Figura 2
          span Principios del programa de tecnovigilancia 

        figure
          img(src='@/assets/curso/temas/tema4/img4.svg', alt='alt')
          p.text-center.mt-3.mb-3 <b>Los niveles de operación del programa nacional de tecnovigilancia son:</b>

        figure
          img(src='@/assets/curso/temas/tema4/img5.png', alt='alt')
          p.text-center.mt-3.mb-3 Resolución 4816 de 2008. Artículo 6°. Niveles de operación y conformación de estos.

        p.text-center.mt-3.mb-3 <b>De igual forma, existen conceptos complementarios y de gran importancia en la vigilancia, entre ellos:</b>

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p Es el conjunto de actividades que tiene por objeto la identificación y cualificación de efectos indeseados ocasionados por defectos en la calidad de los reactivos de diagnóstico in vitro, así como la identificación de los factores de riesgo o características que puedan estar relacionadas con estos.

        .cajon.color-acento-botones.p-4
          p Se invita al aprendiz a consultar los documentos <b>ABC de dispositivos médicos y dispositivos médicos</b> que se encuentran en el material complementario.
       
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='alt')


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
