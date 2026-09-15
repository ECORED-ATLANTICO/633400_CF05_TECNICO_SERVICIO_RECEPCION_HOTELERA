<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto operativo: domina los procedimientos de reservas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión del aprendiz de los conceptos clave relacionados con usuarios turísticos, servicio al cliente, comunicación, negociación, cotización y venta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es una función principal del PMS en un hotel?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar reservas, ocupación y reportes operativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar todos los cargos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar únicamente redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué son las OTA en el contexto hotelero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plataformas internas para controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Agencias de viajes en línea que comercializan servicios hoteleros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistemas exclusivos de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programas contables del hotel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Para qué sirve un <em>channel manager</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para registrar únicamente pagos en efectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para sincronizar disponibilidad y tarifas en diferentes canales digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para asignar turnos al personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reemplazar el servicio de recepción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué beneficio ofrece el <em>check-in</em> digital?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa los tiempos de espera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reduce trámites presenciales y agiliza la llegada del huésped.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de confirmar reservas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impide actualizar los datos del huésped.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es el propósito del <em>forecasting</em> hotelero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proyectar niveles futuros de ocupación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar uniformes del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los reportes operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bloquear canales de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Por qué es importante el historial del huésped?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite conocer preferencias y mejorar la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la reserva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque solo sirve para fines contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque impide modificar datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué función cumplen los sistemas GDS?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitan la distribución global de servicios turísticos y hoteleros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlan exclusivamente la limpieza de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registran únicamente quejas de huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminan la intermediación digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es una función del área de <em>housekeeping</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comercializar paquetes turísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar limpieza, alistamiento y estado de habitaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Crear tarifas promocionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar reservas externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Para qué sirven los reportes generados por el PMS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para apoyar la toma de decisiones operativas y administrativas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar el contacto con el huésped.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para eliminar la supervisión del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para impedir cambios en reservas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué papel cumple la automatización hotelera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina por completo la supervisión humana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Apoya procesos operativos, pero requiere control y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituye todas las áreas del hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo aplica para grandes cadenas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es la utilidad de las alertas operativas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar situaciones que requieren atención inmediata.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cancelar automáticamente todas las reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la comunicación entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar los reportes administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Por qué es importante la seguridad de la información?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque protege datos del huésped y del establecimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque solo aplica a hoteles internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque permite divulgar información sin autorización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque elimina el uso de contraseñas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué ha favorecido la transformación digital en los hoteles?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La desintegración de los procesos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La integración entre áreas y la mejora del servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La eliminación del servicio al cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción de los canales de reserva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué permiten las llaves móviles?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceder a la habitación mediante dispositivos digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar el registro del huésped.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bloquear el PMS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar únicamente pagos virtuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué es un motor de reservas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una herramienta que permite gestionar reservas directas en canales digitales del hotel.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un sistema usado exclusivamente por agencias de viajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un programa para administrar nómina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una aplicación solo para housekeeping.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué ventaja ofrece integrar el PMS con otros sistemas hoteleros?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuye la coordinación entre áreas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita el flujo de información y mejora la operación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impide generar reportes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina la gestión de reservas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué información debe actualizarse en los canales digitales de reserva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disponibilidad, tarifas y condiciones del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el nombre del hotel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo fotografías antiguas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Información ajena a la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué riesgo puede generar una mala sincronización entre canales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor control de inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sobreventas, errores tarifarios o inconsistencias en reservas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejor experiencia del huésped.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución de reclamos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cómo contribuye el software hotelero al servicio al cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite consultar información actualizada para responder mejor al huésped.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evita toda comunicación con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de registrar solicitudes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limita el seguimiento de reservas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es una buena práctica en el uso de sistemas hoteleros?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compartir contraseñas entre todos los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar información completa, actualizada y segura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Omitir cambios en las reservas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar datos sin verificar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
