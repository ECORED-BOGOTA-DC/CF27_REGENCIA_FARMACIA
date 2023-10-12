<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Farmacovigilancia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Imágen decorativa')
      .col-lg-8
        p(data-aos="fade-left") La Organización Mundial de la Salud (OMS, 2002), define la farmacovigilancia como un método que alterna la recolección, seguimiento, investigación, análisis y evaluación de la información obtenida por parte de los trabajadores de la salud y de los pacientes, en todo lo relacionado con los efectos adversos a los medicamentos con el objetivo de prevenir los riesgos durante el tratamiento de los pacientes. 
        p(data-aos="fade-right") Existen diferentes métodos para el desarrollo de los procesos de farmacovigilancia:
        .row.justify-content-center.mb-4
          .col-lg-10
            ul.lista-ul--color
              li(data-aos="fade-left")
                i.fas.fa-atom(style='color: #7E5EE3') 
                p.mb-0 <b style="color: #7E5EE3"> Farmacovigilancia pasiva:</b> es la que se realiza cuando quien reporta obtiene la información de manera abierta o directa.
              li(data-aos="fade-left")
                i.fas.fa-atom(style='color: #7E5EE3') 
                p.mb-0 <b style="color: #7E5EE3"> Farmacovigilancia activa:</b> es cuando la entidad reporta, programa y realiza una acción que se encamina a obtener la información.
        .cajon.color-secundario.p-4(data-aos="flip-left")
          p.mb-0 El evento adverso no solo se presenta en los pacientes, también en el personal de salud, medio ambiente, inducido durante la utilización de medicamentos o dispositivos médicos. 

    .bg-fondo2.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-xxl.col-lg-6.col-sm-8.mb-xxl-0.mb-4
          .crd_hover_txt(data-aos="flip-right")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img2.svg", alt="Imágen decorativa")
            .crd_hover_txt--body
              h4.text-center.mb-5 Reacciones adversas a medicamentos
              p.mb-0 Efecto perjudicial que ocurre tras la administración de un fármaco en las dosis normales utilizadas en la especie humana, para la profilaxis, el diagnóstico o el tratamiento o el tratamiento de una enfermedad o para la modificación de alguna función fisiológica.

        .col-xxl.col-lg-6.col-sm-8.mb-xxl-0.mb-4
          .crd_hover_txt(data-aos="flip-up")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img3.svg", alt="Imágen decorativa")
            .crd_hover_txt--body
              h4.text-center.mb-3.mb-lg-5 Problemas de salud relacionados con medicamentos
              p.mb-0 Resultados clínicos negativos, derivados de la farmacoterapia que, producidos por diversas causas, conducen a la no consecución del objetivo terapéutico o a la aparición de efectos no deseados.

        .col-xxl.col-lg-6.col-sm-8.mb-xxl-0.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img4.svg", alt="Imágen decorativa")
            .crd_hover_txt--body
              h4.text-center.mb-4 Problema relacionado con la utilización del medicamento
              p.mb-0 Hace referencia a problemas relacionados con la prescripción, dispensación y administración de medicamentos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img(data-aos="fade-right") 
            img(src='@/assets/curso/temas/tema3/img5.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta-morada
            .p-4
              p(data-aos="fade-right") La vigilancia a los productos farmacéuticos posterior a su comercialización, garantiza la seguridad de los medicamentos en su destino final. El programa de farmacovigilancia se implementa en todas las instituciones prestadoras de servicio de salud, con el objetivo principal de vigilar a los diferentes actores del proceso:
              .row.justify-content-center.mb-4
                .col-lg-5
                  ul.lista-ul--color  
                    li(data-aos="fade-right") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Pacientes.
                    li(data-aos="fade-right") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Familiares.
                    li(data-aos="fade-right") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Cuidadores.
                    li(data-aos="fade-right") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Médico tratante.
                .col-lg-5
                  ul.lista-ul--color
                    li(data-aos="fade-left") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Clínicas.
                    li(data-aos="fade-left") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Hospitales.
                    li(data-aos="fade-left") 
                      i.fas.fa-atom(style='color: #7E5EE3') 
                      | Entes territoriales de salud (servicio farmacéutico, farmacias/droguerías).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p.mb-3(data-aos="fade-right") Las entidades prestadoras de servicios de salud deben articular en forma integral los programas de seguridad del paciente con los de farmacovigilancia, tecnovigilancia, reactivovigilancia y hemovigilancia, con el propósito determinante de relacionar la identificación, registro, análisis y gestión de los incidentes y eventos adversos que se pueden presentar durante la atención en salud, de tal manera que se aprenda del error y se aproveche la oportunidad de mejora.
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-right")
          p.mb-0 Para profundizar el tema de farmacovigilancia, se invita al aprendiz a consultar los documentos <b>¿Qué es la farmacovigilancia? Y Farmacovigilancia</b>, ubicados en el material complementario.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left") 
        figure
          img(src="@/assets/curso/temas/tema3/img6.svg", alt="Imágen decorativa")

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
