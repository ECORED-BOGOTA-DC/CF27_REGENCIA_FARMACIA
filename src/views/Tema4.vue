<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Programa de tecnovigilancia
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-f.color-primario.pt-4.px-5.bloque-texto-tema4
          .bloque-texto-f__comillas
          h4.text-regular.bloque-texto-f__texto Es una estrategia de vigilancia post comercialización y evaluación sanitaria, para la identificación, evaluación, gestión y divulgación oportuna de la información de seguridad relacionada con el uso de los dispositivos médicos que se importan, fabrican y distribuyen en el país, afín de tomar medidas eficientes en aras de proteger la salud pública de los colombianos.
          .bloque-texto-f__autor
            p.mb-0 <b>Resolución 4816 de 2008, Artículo 1.</b>  
        .cajon.color-secundario.p-4
          p.mb-0 Para comprender la importancia de la tecnovigilancia, es muy importante revisar el concepto DM (Dispositivos médicos) los cuales incluyen a todos los equipos biomédicos utilizados en la asistencia a los pacientes en el entorno hospitalario, sin importar el nivel de complejidad en el que se encuentren (ver figura 1). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 1
          span Ciclo de vida de los dispositivos médicos  
        figure.col-lg-8(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen que contiene un esquema que contiene el ciclo de vida de los dispositivos médicos, el cual consta de:<br>Premercado.<br>Diseño y desarrollo.<br>Fabricación.<br>Registro sanitario.<br>Fabricantes e importadores.<br>INVIMA.<br>Eficacia, seguridad desempeño.<br>Postmercado.<br>Planeación.<br>Selección.<br>Adquisición.Instalación.<br>Uso.<br>Mantenimiento.<br>Disposición final.<br>Prestadores de servicios de salud-usuarios.<br>Efectividad seguridad desempeño.')
          p.text-center.mt-3 Nota. Programa Nacional de Tecnovigilancia INVIMA.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        .cajon.color-acento-contenido.p-4(data-aos="flip-right")
          p.mb-0 Se invita al aprendiz a consultar los documentos <b>ABC de dispositivos médicos</b> y <b>dispositivos médicos</b> que se encuentran en el material complementario.
        p.mt-3(data-aos="fade-right") La metodología de las estrategias de vigilancia epidemiológica estructuradas al interior del programa nacional de tecnovigilancia para eventos o incidentes puede ser:
        ul.lista-ul--color
          li(data-aos="fade-right")
            i.fas.fa-atom
            | Vigilancia proactiva.
          li(data-aos="fade-right") 
            i.fas.fa-atom
            | Vigilancia pasiva.
          li(data-aos="fade-right") 
            i.fas.fa-atom
            | Vigilancia activa.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      p.text-center(data-aos="fade-up") <b>Los principios del programa nacional de tecnovigilancia son (ver figura 2):</b>
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 2
          span Principios del programa de tecnovigilancia 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen con un esquema que contiene los principios del programa de tecnovigilancia, los cuales son:<br>Trazabilidad de los dispositivos médicos.<br>Sensibilidad y representatividad.<br>Formación e información permanente de los actores involucrados.<br>Información veraz, oportuna y confidencial.<br>Articulación entre los actores del programa nacional de tecnovigilancia.')
          

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.text-center.mt-3.mb-5(data-aos="fade-up") <b>Los niveles de operación del programa nacional de tecnovigilancia son:</b>
        ImagenInfografica.color-secundario(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='Imagen que contiene un esquema de los niveles de operación del programa nacional de tecnovigilancia, los cuales son:<br>Nacional (Programa nacional de tecnovigilancia farmacovigilancia):<br>• Ministerio de salud y protección social.<br>• INVIMA.<br>Departamental (Programa institucional de tecnovigilancia fármaco vigilancia):<br>• Secretarías departamentales y distritales de salud.<br>Local (Programa institucional de tecnovigilancia fármaco vigilancia):<br>• Fabricantes e importadores de DM.<br>• Prestadores de servicios de salud.<br>Usuarios (Reportar al INVIMA o a la secretaria de salud de su departamento):<br>• Pacientes.<br>• Operadores.<br>• Ciudadanos en general.')
              figcaption Resolución 4816 de 2008. Artículo 6°. Niveles de operación y conformación de estos.
          .tarjeta.color-secundario.p-3(x="23.5%" y="15%" numero="+")
            .h4.text-white Nacional
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Ministerio de salud y protección social.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | INVIMA.
          .tarjeta.color-secundario.p-3(x="23.5%" y="35%" numero="+")
            .h4.text-white Departamental
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Secretarias departamentales y distritales de salud.
          .tarjeta.color-secundario.p-3(x="23.5%" y="55%" numero="+")
            .h4.text-white Local
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Fabricantes e importadores de DM.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Prestadores de servicios de salud.
          .tarjeta.color-secundario.p-3(x="23.5%" y="81%" numero="+")
            .h4.text-white Usuarios
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Pacientes. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Operadores. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FFF;")
                | Ciudadanos en general.

    .h5.text-center.mb-5(data-aos="fade-up") De igual forma, existen conceptos complementarios y de gran importancia en la vigilancia, entre ellos:

    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema4/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Reactivovigilancia</span>

    .row.justify-content-center.align-items-center
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-right") Es el conjunto de actividades que tiene por objeto la identificación y cualificación de efectos indeseados ocasionados por defectos en la calidad de los reactivos de diagnóstico <i>in vitro</i>, así como la identificación de los factores de riesgo o características que puedan estar relacionadas con estos.
        .cajon.color-secundario.p-4(data-aos="flip-right")
          p.mb-0 El reporte se constituye en el insumo que le proporciona al INVIMA, a las Secretarías de Salud y Departamentales, al fabricante o a la institución prestadora de salud (IPS), información clara, veraz y confiable sobre el uso y desempeño de los dispositivos médicos que se comercializan en Colombia. Su importancia radica en que, a partir de dicha información, la autoridad sanitaria y demás responsables pueden tomar las medidas sanitarias necesarias para garantizar la salud de los usuarios de estos productos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='Imágen decorativa')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema4/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Sistema de reportes</span>

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img7.png')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Los reportes de eventos adversos generados por medicamentos, dispositivos médicos o equipos biomédicos, se realizan de acuerdo con el siguiente procedimiento que se aplica a todos los programas de farmacovigilancia, tecnovigilancia, reactivovigilancia y hemovigilancia. 

    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema4/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 2px solid #00BCD4'>Procedimiento</span>
      
      p(data-aos="fade-right") “Cuenta con un procedimiento estandarizado para la notificación, registro y procesamiento de EVENTOS, análisis clínico de la información y envío de reportes a la entidad reguladora correspondiente”. (<b>Resolución 1403 de 2007</b>).

      p(data-aos="fade-left") <b>Este procedimiento es:</b>

    LineaTiempoD.color-acento-contenido.mb-5(data-aos="zoom-in")
      .row.justify-content-center(numero="1" titulo="Notificación")
        .col-lg-8.order-lg-1.order-2
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
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img8.png', alt='Imagen con un ejemplo de un formato para la detección de eventos adversos, el cual consta de:<br>Módulo 1. Descripción de lo ocurrido.<br>Descripción del suceso adverso.<br>Acciones inseguras identificadas y/o fallas en barreras de seguridad.<br>1.<br>2.<br>3.<br>Factores contributivos.<br>1.<br>2.<br>3.<br>Modulo 2. Origen del reporte.<br>Fecha del reporte:<br>Hora del reporte:<br>Nombre de quien reporta:<br>Servicio que reporta:')

      .row.justify-content-center(numero="2" titulo="Registro y procesamiento")
        .col-lg-8.order-lg-1.order-2
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
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img10.png', alt='Texto que describa la imagen')

      .row.justify-content-center(numero="3" titulo="Clasificación y análisis")
        .col-lg-8.order-lg-1.order-2
          ul.lista-ul--color.text-small.fa-ul2
            li 
              i.fas.fa-atom
              p.bm-0 <b>Evento adverso prevenible (errores de medicación)</b>, debe ser analizados a través de una herramienta (análisis causal), como, entre otros. Determinar causas del origen al evento adverso; para generar <b style="color: #00BCD4; font-weight: 400">acciones correctas o preventivas</b>.
            li 
              i.fas.fa-atom
              p.mb-0 <b>Eventos adversos no prevenibles (reacciones adversas a medicamentos)</b>, establecer nivel de asociación entre el medicamento y el daño ocasionado, identificando los medicamentos o DM (equipos biomédicos), cuyos efectos colaterales o secundarios sean peligrosos para la salud del paciente; y de esta forma la clasificación como <b style="color: #7E5EE3; font-weight: 400">medicamentos de alto riesgo</b>.
            li 
              i.fas.fa-atom
              | Protocolo de Londres, espina de pescado.
            li 
              i.fas.fa-atom
              | INVIMA recomienda se analicen con base en la herramienta algoritmo de naranjo.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img11.svg', alt='Texto que describa la imagen') 

      .row.justify-content-center(numero="4" titulo="Protocolo de Londres")
        p.bm-0 Ejemplo de protocolo de Londres,  metodología para el análisis de eventos adversos.
        figure
          img(src='@/assets/curso/temas/tema4/img12.svg', alt='Imagen con un ejemplo de protocolo de Londres en la metodología para eventos adversos, la cual debe tener:<br>Organización y cultura:<br>Determinaciones generales<br>Procesos organizacionales<br>Fallas latentes<br>Factores contributivos:<br>Paciente<br>Tarea y tecnología<br>Individuo<br>Equipo<br>Ambiente<br>Condiciones que predisponen a realizar acciones inseguras<br>Problemas durante la prestación del servicio:<br>Acciones inseguras (acción u omisión)<br>Violaciones<br>Fallas activas<br>Barreras:<br>Físicas<br>Administrativas<br>Humanas<br>E.A.')

      .row.justify-content-center(numero="5" titulo="Oportunidad de mejora")
        p.bm-0 Elaboración del plan de mejoras.
        figure
          img(src='@/assets/curso/temas/tema4/img13.png', alt='Imágen decorativa')

      .row.justify-content-center(numero="6" titulo="Notificación")
        .col-lg-6.order-lg-1.order-2
          p.text-small Los reportes pueden enviarse por los siguientes medios.
          ul.lista-ul--color.text-small.fa-ul2
            li 
              i.fas.fa-atom
              | Mediante la página web del INVIMA www.invima.gov.co
            li 
              i.fas.fa-atom
              | Mediante el correo electrónico: invimafv@invima.gov.co
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img14.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.text-center(data-aos="fade-right") <b>Por otra parte, las entidades prestadoras de servicio deben contar con el siguiente esquema para el reporte de eventos adversos (ver figura 3):</b>
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura3.
          span Reporte de eventos adversos  
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img15.svg', alt='Imagen que contiene un esquema de reporte de eventos adversos, el cual consta de:<br>Reporte IPS<br>Reporte inmediato EA/IA Serio (72hrs)<br>INVIMA<br>Reporte periódico EA/IA No serio (Trimestral) SDS')
          p.text-center Nota. Programa Nacional de Tecnovigilancia INVIMA.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
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
