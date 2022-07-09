
  function collapseSuggestions() {
  var z = document.getElementById('suggestion-scriptlink');
  var y = document.getElementById('form-suggestions');
  if (y.style.display === 'block') {
    y.style.display = 'none';
    z.innerHTML = 'Has encontrado errores? Tienes enlaces para agregar? Otras sugerencias? Pulsa aquí ( ͡° ͜ʖ ͡°)';
  } else {
    y.style.display = 'block';
    z.innerHTML = 'Ya no quieres sugerir nada? Pulsa aquí (ಠ_ಠ)'
  }
} 

