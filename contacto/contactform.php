<!DOCTYPE html>
<html lang="es"> 
	<head>
		<title>Las pibas en la arcilla-contacto</title>
		<meta charset="UTF-8">
		<meta name="description" content="Contacto con emprendedoras ceramistas para conocer sus exposiciones y talleres">
		<meta name="keywords" content="ceramica, arcilla, contacto, emprendedora, talleres, muestras, conocer, conectar">
		<meta name="author" content="Las pibas en la arcilla">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" type="image/png" sizes="96x96" href="img/favicon-96x96.png">
		<link href="https://fonts.googleapis.com/css2?family=Almendra:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/reset.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>
	<body>
		<!--MENU-->
		<header id="contenedor-header">
			<nav class="navbar neutro navbar-expand-lg navbar-light">
				<a class="navbar-brand" href="index.html"><img src="img/logo-pibasarcilla.svg" alt="logo-pibasenlaarcilla"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
				  <ul class="navbar-nav">
					<li class="nav-item">
					  <a class="nav-link" href="expo2020.html">expo 2020</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="talleres.html">talleres</a>
					</li>
				 	<li class="li-brand">
				 	 <a class="nav-link" href="index.html"><img src="img/logo-pibasarcilla.svg" alt="logo-pibasenlaarcilla"></a>
				 	</li>
					<li class="nav-item">
						<a class="nav-link" href="shop.html">shop</a>
					</li>
					<li class="nav-item">
						<a class="current-page" href="contacto.html">contacto</a>
					</li>
				  </ul>
				</div>
			</nav>	
		</header>
		<!--CONTENIDO PAGINA-->
		<main id="contacto">
			<section id="contacto-flex">
				<article id="contacto-caja-texto">
					<img src="img/200x200-contacto.png" alt="ilsutracion de cartas">
					<div class="caja-parrafo-contacto-flex">
						<article>
							<h1 class="titulo-almendra-azul tracking-in-expand">Estamos cerca</h1>
							<p id="contacto-subtitulo" class="tracking-in-expand">Queremos despejar tus dudas</p>
							<p class="contacto-parrafo"> Si querés saber más sobre los talleres, incripciones, contactos o la expo  escribinos, te leemos y respondemos ni bien podamos.</p>
						</article>
						<article id="telefonos">
						<h2 class="subtitulo-azul-chico">Telefonos</h2>
							<ul>
								<li>+11 5648 8948</li>
								<li>+11 5648 8948</li>
								<li>+11 5648 8948</li>
							</ul>
						</article>
					</div>
				</article>
				<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "juliprinzo@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "Recibiste un mail de ".$name." ".$surname;

    mail($mailTo, $txt, $message, $headers);
    //header("Location: contacto.html?mailsend;");
    echo"<article id='gracias' style='width: 60%;''>
			<section>
				<h2 class='titulo-almendra-azul tracking-in-expand'>El mensaje ha sido enviado. Muchas gracias por escribirnos</h2>
			</section>
		</article>";
	} else {
	echo"<article id='error' style='width: 60%;''>
			<section>
				<h2 class='titulo-almendra-azul tracking-in-expand' style='color:red;'>El mensaje no pudo ser enviado</h2>
			</section>
		</article>";
	}

	
?>
				
			</section>
		</main>

		<!--FOOTER-->
		<footer>
			<section id="footer-flex">
				<a href="index.html"><img class="logo-chico" src="img/logo-pibasarcilla-gris.svg"></a>
				<div>
					<a class="titulo-almendra-gris" href="expo2020.html">Expo 2020</a>
					<ul class="texto-footer">
						<li>· Expositoras</li>
						<li>· Agenda 2020</li>
						<li>· Comprá tu entrada</li>
					</ul>
				</div>
				<div>
					<a class="titulo-almendra-gris" href="talleres.html">Talleres</a>
					<ul class="texto-footer">
						<li>· Talleres anuales</li>
						<li>· Workshops</li>
						<li>· Talleres para niñes</li>
					</ul>
				</div>
				<div>
					<a class="titulo-almendra-gris" href="shop.html">Shop</a>
					<ul class="texto-footer">
						<li>· Compra de piezas</li>
						<li>· Envíos a domicilio</li>
						<li>· Cuotas sin interés</li>
					</ul>
				</div>
				<div>
					<a class="titulo-almendra-gris" href="contacto.html">Contacto</a>
					<p class="texto-footer">Escribinos! Nos encantaría saber de vos.</p>
				</div>
			</section>
			<hr class="separador-gris">
			<p id="disenado-por">Diseñado por Julia Prinzo · 2020 · Las imágenes no son de mi autoria · La información utilizada no es real</p>
		</footer>
		<!--FIN-FOOTER-->
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<script src="js/javascript.js"></script>
		</body>
	</html>