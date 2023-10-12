<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Marco normativo colombiano

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema1/img1.svg', alt='Imagen con el logo del Invima')

      p.mt-4(data-aos="fade-right") Todas las disposiciones normativas que hacen referencia al uso racional de medicamentos y dispositivos médicos son generadas por el Ministerio de Salud y Protección Social y el ente de control es el INVIMA, organismo regulador, encargado de las actividades de inspección, vigilancia y control al respecto; de esta forma se verifica que los posibles riesgos relacionados con el uso de productos farmacéuticos, disminuyan, protegiendo así la salud del individuo y la comunidad.

    .row.justify-content-center.align-items-center.mb-5
      h5.text-center.mb-4(data-aos="fade-up") Es importante tener en cuenta que:
      .tarjeta.bg-Slyder1.p-5(data-aos="fade-right")
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              p La responsabilidad del gobierno, se debe orientar a garantizar  la calidad de los medicamentos,  la tecnología biomédica y los dispositivos médicos, de manera que los esfuerzos de los laboratorios fabricantes y empresas comercializadoras,  aseguren que los productos farmacéuticos disponibles para los pacientes/clientes, sean seguros y efectivos, razón por la cual los programas nacionales de farmacovigilancia, tecnovigilancia  y reactivovigilancia, son  un compromiso no solo del gobierno, sino de todo el sector farmacéutico; en este contexto la responsabilidad social y ética,  tiene una directa relación con la salud individual y colectiva de los colombianos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa')
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              p Todos los actores implicados en la fabricación, importación, comercialización, distribución, prescripción, manipulación y uso de los medicamentos, dispositivos médicos, equipos biomédicos e insumos utilizados en la atención en salud, deben reportar al INVIMA y a los entes territoriales competentes, cuando se identifique algún evento o incidente adverso asociado al uso de estos.  Por otra parte, dentro de las políticas de calidad, el Ministerio de Salud y Protección Social, fija la política de seguridad centrada en el paciente, donde la prioridad es el reporte de eventos o incidentes adversos como elemento coyuntural entre la vigilancia en salud y la prestación de servicios para la salud.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imágen decorativa')
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              p Es importante resaltar que, aunque la prioridad es velar por la salud humana; no es menos importante en cuanto a salud pública se refiere, la salud del ambiente y de los animales, razón por la cual el ICA es el ente de inspección, vigilancia y control; cuyo fin es prevenir y disminuir los riesgos originados del uso de medicamentos veterinarios, posterior a su venta.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      b.text-center.mb-5(data-aos="fade-up") Las leyes que regulan estas políticas dentro del marco colombiano son:
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imágen decorativa')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-secundario
          .tarjeta.tarjeta-morada.p-5(titulo="Resolución 2003 de 2014")
            b (Deroga la Resolución 1441 de 2013).
            p Por la cual se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud. “Todo prestador debe contar con programas de seguimiento al uso de medicamentos, dispositivos médicos (incluidos los sobre medida) y reactivos de diagnóstico in vitro, mediante la implementación de programas de farmacovigilancia, tecnovigilancia y reactivovigilancia, que incluyan además la consulta permanente de las alertas y recomendaciones emitidas por el INVIMA”.

          .tarjeta.tarjeta-morada.p-5(titulo="Resolución 123 de 2012")
            b (Modifica el artículo 2° de la Resolución 1445 de 2006).
            p El manual de Acreditación en Salud Ambulatorio y Hospitalario actualiza, unifica y reemplaza los Manuales de Estándares de Acreditación para las Instituciones Prestadoras de Servicios de Salud Hospitalarias y Ambulatorias. 
            p “La organización cuenta con procesos de: gestión de equipos biomédicos, gestión de medicamentos y dispositivos médicos. Mejoramiento de la gestión de tecnovigilancia y farmacovigilancia”.

          .tarjeta.tarjeta-morada.p-5(titulo="Decreto 4725 de 2005")
            p Por el cual se reglamenta el régimen de registros sanitarios, permiso de comercialización y vigilancia sanitaria de los dispositivos médicos para uso humano. #[b Artículo 61. Del Programa Nacional de tecnovigilancia.] El ministerio con el apoyo del INVIMA. Diseñará el programa de tecnovigilancia que permita identificar los incidentes adversos no escritos, cuantificar el riesgo, proponer y realizar medidas de salud pública para reducir la incidencia y mantener informados a los usuarios, a otros profesionales de la salud, a las autoridades sanitarias a nivel nacional y a la población en general.

          .tarjeta.tarjeta-morada.p-5(titulo="Resolución 1043 de 2006")
            p Por la cual se establecen las condiciones que deben cumplir los prestadores de servicio de salud para habilitar sus servicios e implementar el componente de la atención y se dictan otras disposiciones. Los procedimientos de adquisición de dispositivos médicos incluyen la verificación del registro expedidos por el INVIMA y el programa de tecnovigilancia.

          .tarjeta.tarjeta-morada.p-5(titulo="Resolución 4002 de 2007")
            p Para todos los establecimientos importadores y comercializadores de los dispositivos médicos, deben cumplir con los requisitos de capacidad de almacenamiento o acondicionamiento.  Deben establecer los mecanismos que permitan clasificar y evaluar las quejas y los reportes de tecnovigilancia. Deben documentar, mantener registros de estos reportes, notificar al INVIMA y definir un responsable. 

          .tarjeta.tarjeta-morada.p-5(titulo="Resolución 4816 de 2008")
            p Reglamenta el programa nacional de tecnovigilancia.

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
