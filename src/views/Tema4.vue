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
          

        .cajon.color-secundario.p-4
          p.mb-0 Para comprender la importancia de la tecnovigilancia, es muy importante revisar el concepto sobre DM (Dispositivos médicos) los cuales incluyen a todos los equipos biomédicos utilizados en la asistencia a los pacientes en el entorno hospitalario, sin importar el nivel de complejidad en el que se encuentren (ver figura 1). 


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
        .cajon.color-acento-contenido.p-4
          p.mb-0 Se invita al aprendiz a consultar los documentos <b>ABC de dispositivos médicos</b> y <b>dispositivos médicos</b> que se encuentran en el material complementario.

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

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema4/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Reactivovigilancia</span>

    .row.justify-content-center.align-items-center
      .col-lg-8
        p Es el conjunto de actividades que tiene por objeto la identificación y cualificación de efectos indeseados ocasionados por defectos en la calidad de los reactivos de diagnóstico in vitro, así como la identificación de los factores de riesgo o características que puedan estar relacionadas con estos.

        .cajon.color-secundario.p-4
          p.mb-0 Se invita al aprendiz a consultar los documentos <b>ABC de dispositivos médicos</b> y <b>dispositivos médicos</b> que se encuentran en el material complementario.
       
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='alt')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema4/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Sistema de reportes</span>

    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img7.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los reportes de eventos adversos generados por medicamentos, dispositivos médicos y /o equipos biomédicos, se realizan de acuerdo con el siguiente procedimiento que se aplica a todos los programas de farmacovigilancia, tecnovigilancia, reactivo vigilancia y hemovigilancia. 


    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema4/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Procedimiento</span>
      
      p “Cuenta con un procedimiento estandarizado para la notificación, registro y procesamiento de EVENTOS, análisis clínico de la información y envío de reportes a la entidad reguladora correspondiente”. (<b>Resolución 1403 de 2007</b>).

      p <b>Este procedimiento es:</b>

    LineaTiempoD.color-acento-contenido.mt-5
      .row(numero="1" titulo="Notificación")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color.text-small.fa-ul2
            li 
              i.fas.fa-atom
              | Identificación del evento adverso o incidente.
            li 
              i.fas.fa-atom
              | Registro en formato físico o magnético.
            li 
              i.fas.fa-atom
              | Cada entidad debe adoptar o adaptar un formato único para el reporte de eventos e incidentes que sierva para los diferentes programas de vigilancia (tecnovigilancia, reactivovigilancia, hemovigilancia entre otros).

          p.text-small Se presenta un ejemplo de un formato para la detección de eventos adversos.
      
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img8.png', alt='Texto que describa la imagen')


      .row(numero="2" titulo="Registro y procesamiento")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color.text-small.fa-ul2
            li 
              i.fas.fa-atom
              | Registro del evento adverso en la base de datos.

            li 
              i.fas.fa-atom
              | Cada institución prestadora de servicios de salud debe contar con su BD.

            li 
              i.fas.fa-atom
              | Evitar duplicar el subregistro de la información.

      
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img10.png', alt='Texto que describa la imagen')

      .row(numero="3" titulo="Clasificación y análisis")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color.text-small.fa-ul2
            li 
              i.fas.fa-atom
              p.bm-0 <b>Evento adverso prevenible (errores de medicación)</b>, debe ser analizados a través de una herramienta (análisis causal), como, entre otros. Determinar causas del origen al evento adverso; para generar <b style="color: #00BCD4; font-weight: 400">acciones correctas y/o preventivas</b>.


            li 
              i.fas.fa-atom
              p.mb-0 <b>Eventos adversos no prevenibles (reacciones adversas a medicamentos)</b>, establecer nivel de asociación entre el medicamento y el daño ocasionado, identificando los medicamentos y/o DM (equipos biomédicos), cuyos efectos colaterales o secundarios sean peligrosos para la salud del paciente; y de esta forma la clasificación como <b style="color: #7E5EE3; font-weight: 400">medicamentos de alto riesgo</b>.


            li 
              i.fas.fa-atom
              | Protocolo de Londres, espina de pescado.

            li 
              i.fas.fa-atom
              | INVIMA recomienda se analicen con base en la herramienta algoritmo de naranjo.


      
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema4/img11.svg', alt='Texto que describa la imagen') 

      .row(numero="4" titulo="Protocolo de Londres")
        .col-md-12.mb-4.mb-md-0
          p.bm-0 Ejemplo de protocolo de Londres,  metodología para el análisis de eventos adversos.

          figure
            img(src='@/assets/curso/temas/tema4/img12.png', alt='alt')

      .row(numero="5" titulo="Oportunidad de mejora")
        .col-md-12.mb-4.mb-md-0
          p.bm-0 Elaboración del plan de mejoras.

          figure
            img(src='@/assets/curso/temas/tema4/img13.png', alt='alt')

      .row(numero="6" titulo="Notificación")
        .col-md-6.mb-4.mb-md-0
          p.text-small Los reportes pueden enviarse por los siguientes medios.
          ul.lista-ul--color.text-small.fa-ul2
            li 
              i.fas.fa-atom
              | Mediante la página web del INVIMA www.invima.gov.co

            li 
              i.fas.fa-atom
              | Mediante el correo electrónico: invimafv@invima.gov.co

      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img14.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p.text-center <b>Por otra parte, las entidades prestadoras de servicio deben contar con el siguiente esquema para el reporte de eventos adversos (ver figura 3):</b>

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura3.
          span Reporte de eventos adversos  

        figure
          img(src='@/assets/curso/temas/tema4/img15.png', alt='alt')
          p.text-center Nota. Programa Nacional de Tecnovigilancia INVIMA.

        .cajon.color-acento-contenido.p-4.mt-3
          p.mb-0 El reporte se debe realizar a través del <b>formato reporte de sospecha de eventos adversos a medicamentos (FOREAM)</b>, este formato se puede encontrar en el material complementario, con el nombre FOREAM formato reporte de sospecha.





            
    


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
