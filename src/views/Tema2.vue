<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Conceptos generales 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-left") Durante la hospitalización de un paciente, la administración de medicamentos es un proceso determinante y complejo, porque exige una comunicación e información recíproca, entre los diferentes actores del proceso, como son:
        .row.justify-content-center.mb-4
          .col-lg-5
            ul.lista-ul--color
              li(data-aos="fade-right")
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Proveedores
              li(data-aos="fade-right") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Químicos farmacéuticos.
              li(data-aos="fade-right") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Regentes.
              li(data-aos="fade-right") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Médicos.
          .col-lg-5
            ul.lista-ul--color
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Enfermeras jefes y auxiliares.
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Pacientes.
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Familiares o cuidadores.

        .cajon.color-secundario.p-4.mb-4(data-aos="flip-left")
          p.mb-0 La información incompleta o contradictoria, puede llevar a errores en la medicación con el riesgo claro de un posible evento adverso, que redunda en largas estancias hospitalarias o reingresos hospitalarios a corto o mediano plazo. 

        p(data-aos="fade-left") Durante el ciclo de atención del paciente, se genera un alto riesgo de ocurrencia de errores en la medicación, como son:

        .row.justify-content-center
          .col-lg-5
            ul.lista-ul--color
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | El ingreso.
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Traslado entre servicios.
          .col-lg-5
            ul.lista-ul--color
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Referencia y contrarreferencia incompleta.
              li(data-aos="fade-left") 
                i.fas.fa-atom(style='color: #7E5EE3') 
                | Egreso del paciente de la estancia hospitalaria.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Imágen decorativa')


    p.mb-5(data-aos="fade-right") Por lo anterior, es de imperiosa necesidad tener claridad sobre los conceptos que a nivel asistencial se utilizan como parte de la responsabilidad que implica la administración de los medicamentos, los cuales son:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsB.color-primario(style='background-color: #E6F7FE')
        .p-4.p-lg-5(titulo="Uso racional de los medicamentos" :icono="require('@/assets/curso/temas/tema2/img2.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              p.mb-5 Hace referencia al escenario en el cual el paciente recibe los medicamentos adecuados a sus necesidades clínicas, en la dosis requerida, por el período de tiempo adecuado y a un costo accesible.
              .row.justify-content-center
                .col-lg-10
                  figure
                    img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imágen decorativa')

        .p-4.p-lg-5(titulo="Adherencia al tratamiento" :icono="require('@/assets/curso/temas/tema2/img4.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              p.mb-5 Hace referencia directamente a la obediencia por parte del paciente al tomar la medicación de acuerdo con la dosificación prescrita por el médico; durante el tiempo indicado, sin que se interrumpa por la mejoría o no de los síntomas. 
              .row.justify-content-center
                .col-lg-10
                  figure
                    img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imágen decorativa')

        .p-4.p-lg-5(titulo="Automedicación" :icono="require('@/assets/curso/temas/tema2/img6.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              p.mb-5 Selección y uso de medicamentos sin prescripción médica, con el fin de prevenir, aliviar o tratar síntomas o enfermedades diagnosticadas por uno mismo o por terceros, generalmente familiares, amigos, vecinos o conocidos. Es una práctica cultural y muy arraigada, con resultados generalmente no favorables para el paciente.
              .row.justify-content-center
                .col-lg-10
                  figure
                    img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imágen decorativa')

        .p-4.p-lg-5(titulo="Reconciliación medicamentosa" :icono="require('@/assets/curso/temas/tema2/img8.svg')")
          .row.justify-content-center
            .col-lg-7.order-lg-1.order-2
              p.mb-5 Proceso asistencial que radica en revisar de forma integral el perfil farmacoterapéutico o historia actual medicamentosa del paciente cuando ingresa a una estancia hospitalaria; se logra con una lista completa de la medicación del paciente antes de ser hospitalizado, y se confronta con la prescrita por el médico en el momento del ingreso y evolución; esto con el fin de resolver las discrepancias encontradas. 
              .row.justify-content-center
                .col-lg-10
                  figure
                    img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img9.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imágen decorativa')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-secundario
          .tarjeta.tarjeta-morada.p-5(titulo="Discrepancia")
            p Diferencia entre los medicamentos que el paciente tomaba previamente y la medicación prescrita durante la atención asistencial u hospitalaria.  No significa necesariamente un error, muchas veces constituye la mala comunicación con el paciente, la familia o el cuidador.
          .tarjeta.tarjeta-morada.p-5(titulo="Interacciones")
            p Son factores que aumentan, disminuyen o retrasan una acción terapéutica, y pueden generar problemas de salud al paciente. La interacción medicamentosa puede generarse, incluso ante el consumo de producto fitoterapéuticos o tratamientos naturales.
          .tarjeta.tarjeta-morada.p-5(titulo="Duplicidad")
            p Cuando en la prescripción médica se encuentran dos medicamentos con mecanismo de acción similar, para tratar una misma enfermedad, lo que puede generar una interacción fármaco-fármaco.
          .tarjeta.tarjeta-morada.p-5(titulo="Segunda víctima")
            p Se refiere específicamente al personal de salud que ha cometido el error al administrar un medicamento sin intención alguna de causar daño, ya que el hecho de ser causa de morbimortalidad en la población asistida, genera aumento de los costos asistenciales por demandas, la posible pérdida laboral o pérdida del prestigio personal, lo que genera inseguridad y daño psicológico a quienes cometieron el error. En Colombia se han documentado casos de suicidios por estrés y depresión crónica post evento.
          .tarjeta.tarjeta-morada.p-5(titulo="Medicamentos LASA")
            p Se consideran de alto riego en el servicio farmacéutico, ya que son medicamentos que son parecidos en presentación (#[i Look Alike]), suenan o son parecidos en pronunciación (#[i Sound Alike]), lo que puede llegar a confundir a la hora de solicitarlos, dispensarlos y administrarlos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-secundario
          .tarjeta.tarjeta-morada.p-5(titulo="Error consciente")
            p Acción que involucra la voluntad de la persona, normalmente está relacionado con demasiada confianza en sí mismo. La conciencia no significa tener intencionalidad de causar lesión al paciente.
          .tarjeta.tarjeta-morada.p-5(titulo="Falla activa")
            p Errores resultantes de las acciones u omisiones de las personas. Evento que ocurre inmediatamente antes de un incidente o accidente.
          .tarjeta.tarjeta-morada.p-5(titulo="Error inconsciente")
            p Acción donde la persona no se da cuenta de la equivocación y no incluye la voluntad. Error: acciones equivocadas al realizar lo que no se debía hacer u omisiones al no hacer lo que se debía hacer, ya sea consciente o inconsciente. Para ver un ejemplo de un error inconsciente se recomienda al aprendiz ver el video de Dr. House, en el cual atiende a una mujer con asma, ubicado en el material complementario.
          .tarjeta.tarjeta-morada.p-5(titulo="Falla latente")
            p Falta no reconocida dentro de un sistema, la cual se convierte en evidente bajo circunstancias específicas. Depende de la estructura y los procesos.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imágen decorativa')

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img13.svg' alt='Imágen decorativa')
        h4.text-center Factor contributivo
        p.text-center Circunstancia, acción o influencia que se considera que ha desempeñado un papel en el origen o la evolución de un incidente o que ha aumentado el riesgo de incidente.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img14.svg' alt='Imágen decorativa')
        h4.text-center Factor de riesgo
        p.text-center Situación, característica o atributo que condiciona una mayor probabilidad de experimentar un daño a la salud de una o varias personas.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img15.svg' alt='Imágen decorativa')
        h4.text-center Atención insegura
        p.text-center Atención en salud en la cual se presenta un acontecimiento o una circunstancia que incrementa el riesgo de ocurrencia de un incidente o evento adverso.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img16.svg' alt='Imágen decorativa')
        h4.text-center Barrera de seguridad
        p.text-center Acción o circunstancia que reduce la probabilidad de presentación de un incidente o evento adverso.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img17.svg' alt='Imágen decorativa')
        h4.text-center Complicación
        p.text-center Es el daño o resultado clínico no esperado no atribuible a la atención en salud sino a la enfermedad o a las condiciones propias del paciente.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img18.svg' alt='Imágen decorativa')
        h4.text-center Incidente
        p.text-center Es una falla durante la prestación del servicio de salud que no alcanza a causar daño al paciente.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img19.svg' alt='Imágen decorativa')
        h4.text-center Evento adverso
        p.text-center Es la lesión o daño no intencional que se le produce a un paciente como resultado clínico no esperado durante el cuidado asistencial.
      .tarjeta.tarjeta-gris.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img20.svg' alt='Imágen decorativa')
        h4.text-center Evento centinela
        p.text-center Es un tipo de evento donde está presente una muerte o daño físico o psicológico severo de carácter permanente, que no estaba presente anteriormente y que requiere tratamiento o un cambio permanente.

    .row.justify-content-center.align-items-center.mb-5
      b.text-center.mb-4(data-aos="fade-right") Ahora, en relación a los resultados de una atención en salud que de manera no intencional que produjo daño, los eventos adversos pueden ser:
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img21.svg', alt='Imágen decorativa')
      .col-lg-8
        ul.lista-ul--color
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>Prevenible.</b> Resultado no deseado, no intencional que se habría evitado mediante el cumplimiento de los estándares de cuidado asistencial disponibles en un momento determinado.
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>Serio.</b> Constituye un daño no intencionado que pudo haber llevado a la muerte o al deterioro serio de la salud del paciente, con hospitalización, discapacidad o incapacidad parcial o permanente, o evento clínico importante.
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>No prevenible.</b> Resultado no deseado, no intencional que se presenta a pesar del cumplimiento de los estándares del cuidado asistencial.
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>Grave.</b> Lesiones que conllevan a muerte, incapacidad residual o intervención quirúrgica.
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>Leve.</b> Es un daño menor que no ocasiona una atención especial, incapacidad o prolongación en hospitalización.
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>Moderado.</b> Lesiones que ocasionan una atención en urgencias, un día de hospitalización y atención con especialista.
          li.l-p(data-aos="fade-left")
            i.fas.fa-atom(style='color: #FF9D00') 
            p.mb-0 <b>Evento centinela.</b> Es un tipo de evento adverso en donde está presente una muerte o un daño físico o psicológico severo de carácter permanente, que no estaba presente anteriormente y que requiere tratamiento un cambio permanente.

</template>

<script>
export default {
  name: 'Tema2',
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
