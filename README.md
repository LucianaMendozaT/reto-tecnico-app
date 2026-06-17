## Reto Técnico Frontend
-----------------------------------------------------------------
## Tecnologías utilizadas: 
-React, Vite, React Router DOM, JavaScript, CSS, PokéAPI

## Instrucciones para ejecutar el proyecto:
1. Clonar el repositorio:
```bash
git clone https://github.com/LucianaMendozaT/reto-tecnico-app.git
```
2. Ingresar a la carpeta del proyecto:
```bash
cd reto-tecnico-app
```
3. Instalar dependencias:
```bash
npm install 
```
4. Ejecutar el proyecto:
```bash
npm run dev
```
5. Abrir en el navegador:
```url
http://localhost:5173
```

## Estructura del proyecto
```
src/api/pokemonApi.js
src/components/ErrorMessage.jsx
src/components/Loader.jsx
src/components/Navbar.jsx
src/components/PokemonCard.jsx
src/hooks/useFavorites.js
src/pages/Detalle.jsx
src/pages/Favoritos.jsx
src/pages/Inicio.jsx
src/routes/ AppRouter.jsx
src/styles/main.css
src/App.jsx
src/main.jsx
```

## Decisiones tomadas
Para el desarrollo utilice React Router DOM para la navegación entre páginas y se organizó los archivos por responsabilidades para mantener el proyecto más ordenado.

El llamado a las APIS fueron separadas en una carpeta específica para facilitar el mantenimiento del código. También se creó un hook personalizado para manejar la lógica de favoritos y el almacenamiento local.

Decidí utilizar CSS puro para mantener la aplicación sencilla y evitar dependencias adicionales.

## Autora
Luciana Andrea Mendoza Torres
