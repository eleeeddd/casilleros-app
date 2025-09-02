# 📦 Casilleros App

Aplicación web para la gestión de **casilleros de personal**, divididos en grupos, con acceso individual mediante carrusel y generación de **códigos QR** para cada integrante.  

Diseñada para ser **responsiva** (se adapta a teléfono, tablet y computadora), optimizada para funcionar en **GitHub Pages** y con un **login de administrador**.

---

## ✨ Características principales
- 🔑 **Login único** para el administrador.  
- 👥 División de casilleros en **3 grupos**.  
- 📑 Visualización **individual** de integrantes en carrusel (con botones Anterior / Siguiente).  
- 🧑‍🤝‍🧑 Ícono de género automático (hombre o mujer).  
- 📱 **Responsive design** (móvil, tablet, PC).  
- 📷 **Código QR** para cada integrante, enlazando a su mini perfil independiente.  
- 🚪 Botón de **cerrar sesión** con confirmación.  

---

## 📂 Estructura del proyecto
```
casilleros-app/
├── public/
│   ├── casilleros.json   # Base de datos en formato JSON
│   └── .nojekyll         # Evita problemas con GitHub Pages
├── src/
│   ├── components/       # Componentes de React (Login, Viewer, Perfil)
│   ├── App.jsx           # Lógica principal
│   └── main.jsx          # Punto de entrada
├── index.html            # Entrada HTML
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md             # Documentación del proyecto
```

---

## ⚙️ Instalación y ejecución local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TUUSUARIO/casilleros-app.git
   cd casilleros-app
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Construir versión de producción:
   ```bash
   npm run build
   ```

Esto generará la carpeta `dist/` lista para ser publicada.

---

## 🌍 Publicación en GitHub Pages
1. Subir el proyecto a tu repositorio en GitHub.  
2. Generar el build:
   ```bash
   npm run build
   ```
   (esto creará la carpeta `dist/`).
3. Subir **el contenido de `dist/`** a tu rama principal (`main`).  
4. En GitHub, ir a:
   ```
   Settings → Pages → Branch → main → /(root)
   ```
5. Guardar y esperar unos minutos.  
6. La app quedará publicada en:
   ```
   https://TUUSUARIO.github.io/casilleros-app/
   ```

---

## 📑 Base de datos (JSON)
El archivo `public/casilleros.json` contiene los datos.  
Ejemplo de estructura:
```json
{
  "grupos": [
    {
      "grupo": "PRIMERO",
      "integrantes": [
        { "id": "PRIMERO-001", "nombre": "JUAN PÉREZ", "numEmpleado": "12345", "sexo": "M" },
        { "id": "PRIMERO-002", "nombre": "ANA GARCÍA", "numEmpleado": "67890", "sexo": "F" }
      ]
    }
  ]
}
```

---

## 👨‍💻 Tecnologías utilizadas
- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [React Router](https://reactrouter.com/)  
- [QRCode.react](https://www.npmjs.com/package/qrcode.react)  
- [Tailwind CSS](https://tailwindcss.com/)  

---

## 📜 Licencia
Este proyecto es de uso interno. Puedes adaptarlo libremente para tus necesidades.
