<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description"
    content="Somos Fabricantes Amplia Variedad de modelos mail: botiquines@elboticario.com.ar. Productos De Calidad. Fabricación Propia.">
  <meta name="keywords" content="elboticario, boticario, botiquines, botiquin, primeros auxilios, gabinetes, kits">
  <meta name="author" content="Alan Jiménez Córdoba">
  <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
  <link href="main.css" rel="stylesheet">
  <title>El Boticario</title>
</head>

<body>
  <header>
    <div class="container">
      <button data-action="toggle-menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
          <line x1="2" x2="22" y1="2" y2="2" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <line x1="2" x2="22" y1="22" y2="22" />
        </svg>
      </button>
  
      <img src="assets/logo.jpg" alt="Primeros auxilios, El Boticario">
      <nav>
        <a href="/">Inicio</a>
        <a href="/nosotros.html">Nosotros</a>
        <a href="/productos.html">Productos</a>
        <a href="/contacto.html">Contacto</a>
      </nav>
    </div>
  </header>
  <section id="contact-data">
    <span>Tel: (011) 4504-2689 / 11 5136 5428</span>
    <span>Whatsapp: 11 2288 1055</span>
    <span>botiquines@elboticario.com.ar</span>
  </section>

  <?php 
    $nombre = $_POST["nombre"];

    $email = $_POST["email"];

    $telefono = $_POST["telefono"];

    $asunto = $_POST["asunto"];

    $mensaje = $_POST["mensaje"];

    $para = "botiquines@elboticario.com.ar";

    $contenido = "    
    Nombre: ".$nombre."
    E-mail: ".$email."
    Teléfono: ".$telefono."
    Mensaje: ".$mensaje."
    ";

    mail($para, $asunto, utf8_decode($contenido));
      
  ?>
  <main id="send-form">
    <div>
      <h1><?php echo "<span class='nombre'>$nombre</span>"?>Tu mensaje fue enviado con éxito.</h1>
      <br>
      <span>Pronto te contestaremos.</span>
    </div>
  </main>
  <footer>
    <section>
      <h3>Emergencias</h3>
      <p><b>107:</b> Ciudad de Buenos Aires, Catamarca, Chaco, Chubut, Córdoba, Corrientes, Entre Ríos, Formosa, Jujuy,
        La Pampa,
        Misiones, La Rioja, Mendoza, Río Negro, Salta, San Juan, San Luis, Santa Cruz, Santa Fe, Santiago del Estero,
        Tierra del
        Fuego, Tucumán.</p>
      <p><b>911:</b> Provincia de Buenos Aires.</p>
      <p><b>106:</b> Neuquén.</p>
      <b>Número del servicio de emergencias de la obra social o prepaga.</b>
      <p><b>Centro Nacional de Intoxicaciones Hospital Posadas:</b> 0800 333 0160.</p>
      <p><b>Bomberos:</b> 100, 911 o número local.</p>
      <p><b>Policía:</b> 101, 911 o número local.</p>
    </section>

    <section>
      <h3>Envíos</h3>
      <p>Para solicitar el envío de alguno de nuestros botiquines, por favor, hacer click <a href="/contacto.html">acá</a>
        con la palabra <b>ENVIO</b> en el campo
        <b>'Asunto'</b> Y muy pronto nos comunicaremos con Ud. para coordinar el envío.</p>
    </section>

    <section>
      <h3>Rubros</h3>
      <b>Campings</b>
      <b>Colegios</b>
      <b>Comercios</b>
      <b>Deportes</b>
      <b>Vehículos</b>
      <b>Empresas</b>
      <b>Hogares</b>
      <b>Industrias</b>
      <b>Oficinas</b>
      <b>Restaurantes</b>
    </section>

    <section>
      <h3>Redes</h3>
      <a href="https://www.facebook.com/Botiquines-Primeros-Auxilios-El-Boticario-1468520870055662/"
        target="_blank"
        class="external">Botiquines Primeros Auxílios</a>
    </section>
    <section class="copyright">
      Copyright &copy; 2017 - Todos los derechos reservados
    </section>
  </footer>
  <script src="main.js"></script>
</body>

</html>