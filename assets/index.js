fetch('casilleros.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo casilleros.json');
    }
    return response.json();
  })
  .then(data => {
    let currentGroupIndex = 0;
    const root = document.getElementById("root");
    // Colores para cada grupo
    const groupColors = ['#e6f4ea', '#e6f0fa', '#fff5e6']; // Verde claro, Azul claro, Amarillo claro

    // Función para renderizar la tabla del grupo actual
    function renderGroup() {
      const grupo = data.grupos[currentGroupIndex];
      const tableBackground = groupColors[currentGroupIndex] || '#f9f9f9'; // Fallback si hay más grupos
      const htmlContent = `
        <style>
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-table { animation: fadeIn 0.5s ease-out forwards; }
          .animate-row { animation: fadeIn 0.5s ease-out forwards; }
          .nav-button {
            background: #007bff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            cursor: pointer;
            border-radius: 4px;
            font-size: 1rem;
          }
          .nav-button:disabled {
            background: #cccccc;
            cursor: not-allowed;
          }
          .nav-button:hover:not(:disabled) {
            background: #0056b3;
          }
          table {
            width: 80%;
            margin: 1rem auto;
            border-collapse: collapse;
            background: ${tableBackground};
            border: 1px solid #ccc;
            border-radius: 8px;
          }
          th, td {
            padding: 0.75rem;
            border: 1px solid #ddd;
            text-align: left;
          }
          th {
            background: ${tableBackground === '#fff5e6' ? '#ffe0b2' : tableBackground === '#e6f0fa' ? '#b3d4fc' : '#c8e6c9'};
            font-weight: bold;
          }
          tr:nth-child(even) {
            background: ${tableBackground === '#fff5e6' ? '#fff0db' : tableBackground === '#e6f0fa' ? '#d6e6ff' : '#dcedc8'};
          }
        </style>
        <div style="font-family:sans-serif;padding:2rem;text-align:center">
          <h1 style="opacity:0;animation:fadeIn 0.5s ease-out forwards">Casilleros App</h1>
          <p style="opacity:0;animation:fadeIn 0.5s ease-out 0.2s forwards">
            Aplicación compilada lista para GitHub Pages. Última actualización: ${data.meta.updatedAt}
          </p>
          <div style="margin:1rem 0">
            <button class="nav-button" id="prevGroup" ${currentGroupIndex === 0 ? 'disabled' : ''}>&larr; Anterior</button>
            <button class="nav-button" id="nextGroup" ${currentGroupIndex === data.grupos.length - 1 ? 'disabled' : ''}>Siguiente &rarr;</button>
          </div>
          <table class="animate-table">
            <thead>
              <tr>
                <th colspan="4" style="text-align:center">Grupo ${grupo.grupo}</th>
              </tr>
              <tr>
                <th>Nombre</th>
                <th>ID</th>
                <th>No. Empleado</th>
                <th>Sexo</th>
              </tr>
            </thead>
            <tbody>
              ${grupo.integrantes.map((integrante, i) => `
                <tr class="animate-row" style="animation-delay:${0.3 + i * 0.1}s">
                  <td>${integrante.nombre}</td>
                  <td>${integrante.id}</td>
                  <td>${integrante.numEmpleado}</td>
                  <td>${integrante.sexo}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      root.innerHTML = htmlContent;

      // Agregar event listeners a los botones
      document.getElementById('prevGroup').addEventListener('click', () => {
        if (currentGroupIndex > 0) {
          currentGroupIndex--;
          renderGroup();
        }
      });
      document.getElementById('nextGroup').addEventListener('click', () => {
        if (currentGroupIndex < data.grupos.length - 1) {
          currentGroupIndex++;
          renderGroup();
        }
      });
    }

    // Renderizar el primer grupo
    renderGroup();
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById("root").innerHTML = `
      <div style="font-family:sans-serif;padding:2rem;text-align:center;color:red">
        <h1>Error al cargar los datos</h1>
        <p>${error.message}</p>
      </div>
    `;
  });