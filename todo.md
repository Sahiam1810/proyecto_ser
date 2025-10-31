# TODO: Mi Coach Financiero Virtual

## Información Recopilada
- Proyecto Vite con Tailwind CSS configurado.
- index.html tiene navegación por pestañas implementada en HTML.
- Funcionalidades existentes: autoevaluación, simulador de ahorro, recordatorios, checklist, bitácora emocional.
- Necesidad: Implementar JavaScript para navegación por pestañas y barra de progreso.

## Plan Detallado
1. **Sistema de Pestañas**: Implementar navegación sin scroll usando pestañas.
2. **Barra de Progreso**: Agregar cálculo y visualización de progreso en la pestaña de seguimiento.
3. **Actualización de JS**: Modificar src/main.js para manejar pestañas y progreso.
4. **Testing**: Verificar que todas las funcionalidades funcionen en las pestañas.

## Archivos a Editar/Crear
- src/main.js: Agregar lógica para pestañas y progreso.
- index.html: Ya actualizado con estructura de pestañas.
- src/style.css: Agregar estilos para pestañas activas si necesario.

## Lista de Tareas Desglosadas
- [x] **Autoevaluación**:
  - [x] Crear formulario con preguntas sobre hábitos financieros actuales
  - [x] Agregar preguntas sobre comportamientos impulsivos o emocionales con el dinero
  - [x] Incluir preguntas sobre metas a corto, mediano y largo plazo
  - [x] Agregar lógica JS para calcular y mostrar resultados de la autoevaluación:
    - [x] Recopilar respuestas del formulario
    - [x] Calcular puntaje o categorías basadas en respuestas
    - [x] Mostrar resultados en una sección dedicada
    - [x] Guardar resultados en localStorage para persistencia
- [x] **Plan de Mejora**:
  - [x] Refinar objetivo SMART (asegurar formato correcto)
  - [x] Agregar frases motivadoras en estrategias emocionales
  - [x] Implementar sección de recompensas (integrar con carrusel de productos)
  - [x] Mejorar mecanismo de seguimiento (alertas, checklist, gráficos simples)
- [x] **Prototipo - Funcionalidades JS**:
  - [x] Implementar simulador de ahorro (cálculos con JS):
    - [x] Obtener valores de inputs (monto inicial, aporte semanal, semanas)
    - [x] Calcular total ahorrado con fórmula: inicial + (aporte * semanas)
    - [x] Mostrar resultado en div dedicado
    - [x] Agregar botón limpiar para resetear inputs y resultado
    - [x] Guardar simulaciones previas en localStorage para historial
  - [x] Agregar funcionalidad a recordatorios (crear, mostrar lista):
    - [x] Capturar texto y minutos del input
    - [x] Crear objeto recordatorio con timestamp
    - [x] Agregar a lista y mostrar en ul
    - [x] Implementar notificaciones o alertas basadas en minutos
    - [x] Persistir recordatorios en localStorage
  - [x] Implementar checklist de seguimiento (agregar, marcar items):
    - [x] Capturar texto de input
    - [x] Agregar item a lista con checkbox
    - [x] Permitir marcar/desmarcar items
    - [x] Persistir estado en localStorage
  - [x] Crear bitácora emocional financiera (formulario para entradas, lista de reflexiones):
    - [x] Crear formulario para fecha, emoción, reflexión
    - [x] Agregar entrada a lista de reflexiones
    - [x] Mostrar entradas ordenadas por fecha
    - [x] Guardar en localStorage
- [x] **Interfaz y Estilos**:
  - [x] Mejorar diseño general con Tailwind CSS
  - [x] Agregar estilos personalizados en src/style.css si necesario
  - [x] Asegurar responsividad:
    - [x] Hacer layout adaptable a móviles (sm, md breakpoints)
    - [x] Ajustar grid del carrusel para diferentes pantallas
    - [x] Optimizar formularios y botones para touch en móviles
    - [x] Probar en diferentes resoluciones (desktop, tablet, mobile)
- [x] **Sistema de Pestañas**:
  - [x] Implementar navegación por pestañas en JavaScript:
    - [x] Seleccionar todos los botones de pestaña con clase 'tab-button'
    - [x] Agregar event listeners a cada botón para cambiar de pestaña
    - [x] Crear función showTab(tabName) que:
      - [x] Oculta todas las pestañas con clase 'tab-content'
      - [x] Muestra la pestaña específica removiendo 'hidden'
      - [x] Actualiza estilos activos de botones (agregar/remover clases Tailwind)
    - [x] Establecer pestaña por defecto (autoevaluacion) al cargar la página
  - [x] Reorganizar contenido en pestañas:
    - [x] Pestaña "Autoevaluación": Formulario de autoevaluación y resultados
    - [x] Pestaña "Plan": Objetivo SMART, microacciones, estrategias emocionales
    - [x] Pestaña "Herramientas": Simulador, recordatorios, bitácora
    - [x] Pestaña "Seguimiento": Checklist y barra de progreso
- [x] **Barra de Progreso**:
  - [x] Implementar cálculo de progreso:
    - [x] Crear función calcularProgreso() que:
      - [x] Obtiene checklist de localStorage
      - [x] Cuenta items totales y completados
      - [x] Calcula porcentaje: (completados / totales) * 100
      - [x] Actualiza barra de progreso con width en porcentaje
      - [x] Actualiza texto de progreso con porcentaje y mensaje
    - [x] Llamar calcularProgreso() cuando:
      - [x] Se carga la página
      - [x] Se agrega un item a checklist
      - [x] Se marca/desmarca un item en checklist
  - [x] Estilos para barra de progreso:
    - [x] Usar Tailwind para barra base (bg-gray-200)
    - [x] Barra de progreso con bg-green-500 y transición suave
    - [x] Texto descriptivo debajo de la barra
- [x] **Actualización de JS para Pestañas**:
  - [x] Modificar src/main.js para integrar con pestañas:
    - [x] Asegurar que funciones existentes funcionen en contexto de pestañas
    - [x] Agregar lógica de pestañas al inicio del archivo
    - [x] Verificar que elementos DOM se encuentren correctamente en pestañas activas
    - [x] Probar todas las funcionalidades en cada pestaña
- [x] **Presentación**:
  - [x] Crear README.md con descripción del proyecto
  - [x] Incluir instrucciones para ejecutar (npm run dev)
  - [x] Agregar screenshots o descripción de funcionalidades
- [x] **Testing y Ajustes Finales**:
  - [x] Probar navegación por pestañas:
    - [x] Verificar que se muestre contenido correcto al hacer click
    - [x] Confirmar que estilos activos funcionen
    - [x] Probar en móvil y desktop
  - [x] Probar barra de progreso:
    - [x] Agregar items a checklist y verificar actualización
    - [x] Marcar/desmarcar y ver cambios en barra
    - [x] Verificar persistencia con localStorage
  - [x] Verificar todas las funcionalidades existentes:
    - [x] Autoevaluación en pestaña correspondiente
    - [x] Simulador de ahorro
    - [x] Recordatorios
    - [x] Bitácora emocional
    - [x] Checklist
  - [x] Ajustes finales de estilos y código según pruebas

- [x] **Navegación por Secciones**:
  - [x] Implementar navegación por secciones en lugar de pestañas
  - [x] Agregar barra de navegación superior con botones para cada sección
  - [x] Ocultar/mostrar secciones según selección
  - [x] Actualizar estilos de botones activos
  - [x] Agregar barra de progreso en sección de seguimiento
  - [x] Actualizar estilos CSS para navegación y ocultamiento de secciones
