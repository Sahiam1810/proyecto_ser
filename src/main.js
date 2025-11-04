// Funcionalidades para Mi Coach Financiero Virtual

// Sistema de Navegación por Secciones
function initializeNavigation() {
  const navButtons = document.querySelectorAll('.nav-button');
  const sections = document.querySelectorAll('main > section');

  function showSection(sectionId) {
    // Ocultar todas las secciones
    sections.forEach(section => {
      section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.remove('hidden');
    }

    // Actualizar estilos de botones
    navButtons.forEach(button => {
      button.classList.remove('bg-green-100', 'text-green-700');
      button.classList.add('bg-gray-200', 'text-gray-700');
    });

    // Resaltar botón activo
    const activeButton = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeButton) {
      activeButton.classList.remove('bg-gray-200', 'text-gray-700');
      activeButton.classList.add('bg-green-100', 'text-green-700');
    }
  }

  // Agregar event listeners a botones
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('data-section');
      showSection(sectionId);
    });
  });

  // Mostrar sección por defecto
  showSection('autoevaluacion');
}

// Barra de Progreso
function calcularProgreso() {
  const checklist = JSON.parse(localStorage.getItem('checklist') || '[]');
  const totalItems = checklist.length;
  const completedItems = checklist.filter(item => item.completado).length;

  let porcentaje = 0;
  if (totalItems > 0) {
    porcentaje = Math.round((completedItems / totalItems) * 100);
  }

  // Actualizar barra de progreso
  const barraProgreso = document.getElementById('barra-progreso');
  if (barraProgreso) {
    barraProgreso.style.width = `${porcentaje}%`;
  }

  // Actualizar texto
  const textoProgreso = document.getElementById('texto-progreso');
  if (textoProgreso) {
    if (totalItems === 0) {
      textoProgreso.textContent = 'Agrega actividades para ver tu progreso';
    } else {
      textoProgreso.textContent = `Progreso: ${porcentaje}% completado (${completedItems}/${totalItems} actividades)`;
    }
  }
}

// Inicializar todo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  calcularProgreso();
});

// Autoevaluación
const autoevaluacionForm = document.getElementById('autoevaluacion-form');
const resultadosAutoevaluacion = document.getElementById('resultados-autoevaluacion');

if (autoevaluacionForm) {
  autoevaluacionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const respuestas = {
      habito1: parseInt(document.getElementById('habito1').value),
      habito2: parseInt(document.getElementById('habito2').value),
      habito3: parseInt(document.getElementById('habito3').value),
      impulsivo1: parseInt(document.getElementById('impulsivo1').value),
      impulsivo2: parseInt(document.getElementById('impulsivo2').value),
      meta1: parseInt(document.getElementById('meta1').value),
      meta2: parseInt(document.getElementById('meta2').value),
      meta3: parseInt(document.getElementById('meta3').value)
    };

    const puntajeTotal = Object.values(respuestas).reduce((a, b) => a + b, 0);
    let categoria = '';
    if (puntajeTotal <= 12) categoria = 'Principiante';
    else if (puntajeTotal <= 20) categoria = 'Intermedio';
    else categoria = 'Avanzado';

    const resultados = {
      puntaje: puntajeTotal,
      categoria: categoria,
      fecha: new Date().toISOString()
    };

    localStorage.setItem('autoevaluacion', JSON.stringify(resultados));
    mostrarResultadosAutoevaluacion(resultados);
  });
}

function mostrarResultadosAutoevaluacion(resultados) {
  if (resultadosAutoevaluacion) {
    resultadosAutoevaluacion.innerHTML = `
      <h3>Resultados de Autoevaluación</h3>
      <p>Puntaje Total: ${resultados.puntaje}/24</p>
      <p>Categoría: ${resultados.categoria}</p>
      <p>Fecha: ${new Date(resultados.fecha).toLocaleDateString()}</p>
    `;
  }
}

// Cargar resultados previos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const resultadosPrevios = localStorage.getItem('autoevaluacion');
  if (resultadosPrevios) {
    mostrarResultadosAutoevaluacion(JSON.parse(resultadosPrevios));
  }
});

// Simulador de ahorro
const simularBtn = document.getElementById('simular');
const limpiarSimulacionBtn = document.getElementById('limpiar_simulacion');
const resultadoSimulacion = document.getElementById('resultado_simulacion');

if (simularBtn) {
  simularBtn.addEventListener('click', () => {
    const inicial = parseFloat(document.getElementById('monto_inicial').value) || 0;
    const semanal = parseFloat(document.getElementById('aporte_semanal').value) || 0;
    const semanas = parseInt(document.getElementById('semanas').value) || 0;

    const total = inicial + (semanal * semanas);
    resultadoSimulacion.textContent = `Total ahorrado: $${total.toFixed(2)}`;

    // Guardar en historial
    const historial = JSON.parse(localStorage.getItem('historial_simulaciones') || '[]');
    historial.push({ inicial, semanal, semanas, total, fecha: new Date().toISOString() });
    localStorage.setItem('historial_simulaciones', JSON.stringify(historial));
  });
}

if (limpiarSimulacionBtn) {
  limpiarSimulacionBtn.addEventListener('click', () => {
    document.getElementById('monto_inicial').value = '';
    document.getElementById('aporte_semanal').value = '';
    document.getElementById('semanas').value = '';
    resultadoSimulacion.textContent = '';
  });
}

// Recordatorios
const crearRecordatorioBtn = document.getElementById('crear_recordatorio');
const listaRecordatorios = document.getElementById('lista_recordatorios');

if (crearRecordatorioBtn) {
  crearRecordatorioBtn.addEventListener('click', () => {
    const texto = document.getElementById('rem_text').value.trim();
    const minutos = parseInt(document.getElementById('rem_min').value) || 0;

    if (texto && minutos > 0) {
      const recordatorio = {
        texto,
        minutos,
        timestamp: Date.now() + (minutos * 60000),
        id: Date.now()
      };

      const recordatorios = JSON.parse(localStorage.getItem('recordatorios') || '[]');
      recordatorios.push(recordatorio);
      localStorage.setItem('recordatorios', JSON.stringify(recordatorios));

      mostrarRecordatorios();
      document.getElementById('rem_text').value = '';
      document.getElementById('rem_min').value = '';

      // Notificación simple con setTimeout
      setTimeout(() => {
        alert(`Recordatorio: ${texto}`);
      }, minutos * 60000);
    }
  });
}

function mostrarRecordatorios() {
  const recordatorios = JSON.parse(localStorage.getItem('recordatorios') || '[]');
  listaRecordatorios.innerHTML = '';
  recordatorios.forEach(rem => {
    const li = document.createElement('li');
    li.textContent = `${rem.texto} - en ${rem.minutos} minutos`;
    listaRecordatorios.appendChild(li);
  });
}

// Cargar recordatorios al inicio
document.addEventListener('DOMContentLoaded', mostrarRecordatorios);

// Checklist de seguimiento
const agregarCheckBtn = document.getElementById('agregar_check');
const listaChecklist = document.getElementById('lista_checklist');

if (agregarCheckBtn) {
  agregarCheckBtn.addEventListener('click', () => {
    const texto = document.getElementById('check_text').value.trim();
    if (texto) {
      const item = {
        texto,
        completado: false,
        id: Date.now()
      };

      const checklist = JSON.parse(localStorage.getItem('checklist') || '[]');
      checklist.push(item);
      localStorage.setItem('checklist', JSON.stringify(checklist));

      mostrarChecklist();
      calcularProgreso(); // Actualizar progreso al agregar item
      document.getElementById('check_text').value = '';
    }
  });
}

function mostrarChecklist() {
  const checklist = JSON.parse(localStorage.getItem('checklist') || '[]');
  listaChecklist.innerHTML = '';
  checklist.forEach(item => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completado;
    checkbox.addEventListener('change', () => {
      item.completado = checkbox.checked;
      localStorage.setItem('checklist', JSON.stringify(checklist));
      calcularProgreso(); // Actualizar progreso cuando cambia checkbox
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(` ${item.texto}`));
    listaChecklist.appendChild(li);
  });
}

// Cargar checklist al inicio
document.addEventListener('DOMContentLoaded', mostrarChecklist);

// Bitácora emocional financiera
const bitacoraForm = document.getElementById('bitacora-form');
const listaBitacora = document.getElementById('lista-bitacora');

if (bitacoraForm) {
  bitacoraForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fecha = document.getElementById('bitacora-fecha').value;
    const emocion = document.getElementById('bitacora-emocion').value.trim();
    const reflexion = document.getElementById('bitacora-reflexion').value.trim();

    if (fecha && emocion && reflexion) {
      const entrada = {
        fecha,
        emocion,
        reflexion,
        id: Date.now()
      };

      const bitacora = JSON.parse(localStorage.getItem('bitacora') || '[]');
      bitacora.push(entrada);
      bitacora.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      localStorage.setItem('bitacora', JSON.stringify(bitacora));

      mostrarBitacora();
      bitacoraForm.reset();
    }
  });
}

function mostrarBitacora() {
  const bitacora = JSON.parse(localStorage.getItem('bitacora') || '[]');
  listaBitacora.innerHTML = '';
  bitacora.forEach(entrada => {
    const div = document.createElement('div');
    div.className = 'bitacora-entrada';
    div.innerHTML = `
      <h4>${entrada.fecha}</h4>
      <p><strong>Emoción:</strong> ${entrada.emocion}</p>
      <p><strong>Reflexión:</strong> ${entrada.reflexion}</p>
    `;
    listaBitacora.appendChild(div);
  });
}

// Cargar bitácora al inicio
document.addEventListener('DOMContentLoaded', mostrarBitacora);

// Funcionalidad para Objetivos SMART
const smartForm = document.getElementById('smart-form');
const listaObjetivosSmart = document.getElementById('lista-objetivos-smart');

if (smartForm) {
  smartForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const especifico = document.getElementById('smart-especifico').value.trim();
    const medible = document.getElementById('smart-medible').value.trim();
    const alcanzable = document.getElementById('smart-alcanzable').value.trim();
    const relevante = document.getElementById('smart-relevante').value.trim();
    const plazo = document.getElementById('smart-plazo').value;
    const tiempo = document.getElementById('smart-tiempo').value.trim();

    if (especifico && medible && alcanzable && relevante && plazo && tiempo) {
      const objetivo = {
        id: Date.now(),
        especifico,
        medible,
        alcanzable,
        relevante,
        plazo,
        tiempo,
        fechaCreacion: new Date().toISOString()
      };

      const objetivos = JSON.parse(localStorage.getItem('objetivos-smart') || '[]');
      objetivos.push(objetivo);
      localStorage.setItem('objetivos-smart', JSON.stringify(objetivos));

      mostrarObjetivosSMART();
      smartForm.reset();
    }
  });
}

function mostrarObjetivosSMART() {
  const objetivos = JSON.parse(localStorage.getItem('objetivos-smart') || '[]');
  if (listaObjetivosSmart) {
    listaObjetivosSmart.innerHTML = '';

    if (objetivos.length === 0) {
      listaObjetivosSmart.innerHTML = '<p class="text-gray-500">No tienes objetivos SMART creados aún.</p>';
      return;
    }

    objetivos.forEach(objetivo => {
      const colores = getColoresPorPlazo(objetivo.plazo);
      const div = document.createElement('div');
      div.className = `${colores.bg} p-4 rounded-lg border-l-4 ${colores.border}`;
      div.innerHTML = `
        <div class="flex justify-between items-start mb-2">
          <h4 class="text-lg font-semibold">${getPlazoTexto(objetivo.plazo)}</h4>
          <div class="flex space-x-2">
            <button class="editar-obj bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600" data-id="${objetivo.id}">Editar</button>
            <button class="eliminar-obj bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600" data-id="${objetivo.id}">Eliminar</button>
          </div>
        </div>
        <p><strong>Específico:</strong> ${objetivo.especifico}</p>
        <p><strong>Medible:</strong> ${objetivo.medible}</p>
        <p><strong>Alcanzable:</strong> ${objetivo.alcanzable}</p>
        <p><strong>Relevante:</strong> ${objetivo.relevante}</p>
        <p><strong>Tiempo:</strong> ${objetivo.tiempo}</p>
        <p class="text-sm text-gray-600 mt-2">Creado el: ${new Date(objetivo.fechaCreacion).toLocaleDateString()}</p>
      `;
      listaObjetivosSmart.appendChild(div);
    });

    // Agregar event listeners a botones
    document.querySelectorAll('.editar-obj').forEach(btn => {
      btn.addEventListener('click', (e) => editarObjetivo(parseInt(e.target.dataset.id)));
    });

    document.querySelectorAll('.eliminar-obj').forEach(btn => {
      btn.addEventListener('click', (e) => eliminarObjetivo(parseInt(e.target.dataset.id)));
    });
  }
}

function getPlazoTexto(plazo) {
  const textos = {
    'corto': 'Corto Plazo',
    'medio': 'Medio Plazo',
    'largo': 'Largo Plazo'
  };
  return textos[plazo] || plazo;
}

function getColoresPorPlazo(plazo) {
  const colores = {
    'corto': { bg: 'bg-green-50', border: 'border-green-500' },
    'medio': { bg: 'bg-yellow-50', border: 'border-yellow-500' },
    'largo': { bg: 'bg-blue-50', border: 'border-blue-500' }
  };
  return colores[plazo] || { bg: 'bg-gray-50', border: 'border-gray-500' };
}

function editarObjetivo(id) {
  const objetivos = JSON.parse(localStorage.getItem('objetivos-smart') || '[]');
  const objetivo = objetivos.find(obj => obj.id === id);

  if (objetivo) {
    document.getElementById('smart-especifico').value = objetivo.especifico;
    document.getElementById('smart-medible').value = objetivo.medible;
    document.getElementById('smart-alcanzable').value = objetivo.alcanzable;
    document.getElementById('smart-relevante').value = objetivo.relevante;
    document.getElementById('smart-plazo').value = objetivo.plazo;
    document.getElementById('smart-tiempo').value = objetivo.tiempo;

    // Cambiar botón a "Actualizar"
    const submitBtn = document.querySelector('#smart-form button[type="submit"]');
    submitBtn.textContent = 'Actualizar Objetivo SMART';
    submitBtn.dataset.editId = id;

    // Cambiar handler del form
    smartForm.removeEventListener('submit', crearObjetivoHandler);
    smartForm.addEventListener('submit', actualizarObjetivoHandler);
  }
}

function eliminarObjetivo(id) {
  if (confirm('¿Estás seguro de que quieres eliminar este objetivo?')) {
    const objetivos = JSON.parse(localStorage.getItem('objetivos-smart') || '[]');
    const nuevosObjetivos = objetivos.filter(obj => obj.id !== id);
    localStorage.setItem('objetivos-smart', JSON.stringify(nuevosObjetivos));
    mostrarObjetivosSMART();
  }
}

function crearObjetivoHandler(e) {
  e.preventDefault();
  const especifico = document.getElementById('smart-especifico').value.trim();
  const medible = document.getElementById('smart-medible').value.trim();
  const alcanzable = document.getElementById('smart-alcanzable').value.trim();
  const relevante = document.getElementById('smart-relevante').value.trim();
  const plazo = document.getElementById('smart-plazo').value;
  const tiempo = document.getElementById('smart-tiempo').value.trim();

  if (especifico && medible && alcanzable && relevante && plazo && tiempo) {
    const objetivo = {
      id: Date.now(),
      especifico,
      medible,
      alcanzable,
      relevante,
      plazo,
      tiempo,
      fechaCreacion: new Date().toISOString()
    };

    const objetivos = JSON.parse(localStorage.getItem('objetivos-smart') || '[]');
    objetivos.push(objetivo);
    localStorage.setItem('objetivos-smart', JSON.stringify(objetivos));

    mostrarObjetivosSMART();
    smartForm.reset();
  }
}

function actualizarObjetivoHandler(e) {
  e.preventDefault();
  const id = parseInt(e.target.querySelector('button[type="submit"]').dataset.editId);
  const especifico = document.getElementById('smart-especifico').value.trim();
  const medible = document.getElementById('smart-medible').value.trim();
  const alcanzable = document.getElementById('smart-alcanzable').value.trim();
  const relevante = document.getElementById('smart-relevante').value.trim();
  const plazo = document.getElementById('smart-plazo').value;
  const tiempo = document.getElementById('smart-tiempo').value.trim();

  if (especifico && medible && alcanzable && relevante && plazo && tiempo) {
    const objetivos = JSON.parse(localStorage.getItem('objetivos-smart') || '[]');
    const index = objetivos.findIndex(obj => obj.id === id);

    if (index !== -1) {
      objetivos[index] = {
        ...objetivos[index],
        especifico,
        medible,
        alcanzable,
        relevante,
        plazo,
        tiempo
      };
      localStorage.setItem('objetivos-smart', JSON.stringify(objetivos));
      mostrarObjetivosSMART();
    }

    // Resetear form
    smartForm.reset();
    const submitBtn = document.querySelector('#smart-form button[type="submit"]');
    submitBtn.textContent = 'Crear Objetivo SMART';
    delete submitBtn.dataset.editId;

    // Cambiar handler del form
    smartForm.removeEventListener('submit', actualizarObjetivoHandler);
    smartForm.addEventListener('submit', crearObjetivoHandler);
  }
}

// Cargar objetivos SMART al inicio
document.addEventListener('DOMContentLoaded', mostrarObjetivosSMART);

// Agregar handler inicial
if (smartForm) {
  smartForm.addEventListener('submit', crearObjetivoHandler);
}
