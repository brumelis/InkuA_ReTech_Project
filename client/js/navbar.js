const header = document.querySelector("header");

header.innerHTML = `
<div class="header">
  <img src="./assets/favicon.png" alt="logo1">
  <nav class="barra">
    <ul class="navegacion">
        <li class="enlace" id="perfil">
            <a href="#perfil" class="padre"><h5>Menu</h5></a>
            <div class="submenu">
              <a href="./">Inicio</a>
              <a href="./eventos.html">Eventos</a>
              <a href="./tutoriales.html">Tutoriales</a>
              <a href="./ubicaciones.html">Ubicaciones</a>
              <a href="./nosotros.html">Nosotros</a>
              <a href="./faq.html">FAQ</a>
              <a href="./contacto.html">Contacto</a>
              <a href="./donaciones.html">Donaciones</a>
            </div>
        </li>
    </ul>
  </nav>
</div>
`;
