# Mi Coach Financiero Virtual

Un prototipo interactivo de una aplicación web para ayudar a los usuarios a mejorar sus hábitos financieros a través de autoevaluación, objetivos SMART, microacciones, simuladores de ahorro, recordatorios y seguimiento emocional.

## Características

### Autoevaluación Financiera
- Formulario con preguntas sobre hábitos financieros actuales
- Evaluación de comportamientos impulsivos y emocionales con el dinero
- Análisis de metas a corto, mediano y largo plazo
- Cálculo automático de puntaje y categorización (Principiante/Intermedio/Avanzado)
- Persistencia de resultados en localStorage

### Objetivo SMART
- Definición clara de metas de ahorro específicas
- Ejemplo: Ahorrar monedas de $500 y $1000 semanalmente

### Microacciones Semanales
- Plan paso a paso para implementar el hábito del ahorro
- Actividades semanales progresivas
- Seguimiento de progreso

### Estrategias Emocionales
- Carrusel de productos como recompensas motivadoras
- Frases motivadoras para mantener la disciplina
- Enfoque en el bienestar emocional financiero

### Simulador de Ahorro
- Cálculo de ahorro proyectado basado en aportes iniciales y semanales
- Historial de simulaciones guardado
- Función de limpiar para nuevas simulaciones

### Recordatorios
- Creación de recordatorios personalizados con temporizador
- Notificaciones automáticas basadas en minutos configurados
- Lista persistente de recordatorios activos

### Seguimiento (Checklist)
- Lista de actividades semanales para seguimiento
- Marcado de tareas completadas
- Persistencia del estado de progreso

### Bitácora Emocional Financiera
- Registro diario de emociones relacionadas con finanzas
- Reflexiones sobre situaciones financieras
- Historial ordenado por fecha

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Estilos responsivos y modernos
- **JavaScript (ES6+)**: Funcionalidades interactivas
- **Vite**: Herramienta de desarrollo rápida
- **localStorage**: Persistencia de datos del lado del cliente

## Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd proyecto_ser
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador y ve a `http://localhost:5173` (o el puerto que indique Vite)

## Estructura del Proyecto

```
proyecto_ser/
├── index.html          # Página principal
├── src/
│   ├── main.js         # Lógica JavaScript
│   └── style.css       # Estilos personalizados
├── public/
│   └── vite.svg        # Icono de Vite
├── vite.config.js      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind CSS
├── package.json        # Dependencias y scripts
└── README.md           # Este archivo
```

## Funcionalidades Interactivas

### Autoevaluación
- Responde las preguntas con valores del 1 al 4
- Haz clic en "Calcular Autoevaluación" para ver resultados
- Los resultados se guardan automáticamente

### Simulador de Ahorro
- Ingresa monto inicial, aporte semanal y número de semanas
- Haz clic en "Simular" para calcular el total
- Usa "Limpiar" para resetear los campos

### Recordatorios
- Escribe el texto del recordatorio
- Ingresa los minutos para la notificación
- Haz clic en "Crear" para activar el recordatorio

### Seguimiento
- Agrega actividades semanales
- Marca las casillas cuando completes tareas

### Bitácora
- Selecciona fecha, ingresa emoción y reflexión
- Haz clic en "Guardar Entrada" para registrar

## Diseño Responsivo

La aplicación está optimizada para:
- Escritorio (pantallas grandes)
- Tablet (pantallas medianas)
- Móvil (pantallas pequeñas)

## Persistencia de Datos

Todos los datos se guardan localmente en el navegador usando localStorage:
- Resultados de autoevaluación
- Historial de simulaciones
- Recordatorios activos
- Checklist de seguimiento
- Entradas de bitácora

## Próximas Mejoras

- [ ] Integración con base de datos para persistencia multi-dispositivo
- [ ] Gráficos interactivos para visualización de progreso
- [ ] Notificaciones push para recordatorios
- [ ] Exportación de datos en PDF
- [ ] Modo oscuro
- [ ] Integración con APIs financieras reales

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.
