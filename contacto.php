<?php include_once './templates/funciones.php'; ?>

<?php
$curp = '';
$alertas = [];
$resultadoMensaje = $_GET["message"] ?? null;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $curp = $_POST["curp"];
    
    if (!$curp) {
        $alertas[] = 'Debe ingresar su CURP';
    }

    if (strlen($curp) < 18 || strlen($curp) > 18) {
        $alertas[] = 'La CURP debe contener al menos 18 caracteres';
    }

    if (empty($alertas)) {
        sendMail();
        header('Location: /contacto.php?message=1');
        debuguear($resultadoMensaje);
    }
}
?>

<?php include_once './templates/head.php'; ?>

<section class="formulario">
    <h2 class="text-center">Contactenos</h2>

    <?php foreach ($alertas as $alerta) : ?>
        <div class="alerta">
            <?php echo $alerta; ?>
        </div>
    <?php endforeach; ?>

    <?php if (intval($resultadoMensaje) === 1) :  ?>
        <div class="message">
            <p>Su correo ha sido enviado</p>
        </div>
    <?php endif; ?>

    <form method="POST">
        <div class="campo__form">
            <label for="curp">CURP</label>
            <input type="text" name="curp" id="curp" placeholder="Ingrese su CURP">
        </div>
        <input type="submit" value="Envíar">
    </form>
</section>

<?php include_once './templates/footer.php'; ?>