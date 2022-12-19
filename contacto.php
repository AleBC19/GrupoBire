<?php include_once './templates/funciones.php'; ?>
<?php /* debuguear($_SERVER['PHP_SELF']); */ ?>


<?php include_once './templates/head.php'; ?>

<section class="formulario">
    <h2 class="text-center">Contactenos</h2>

    <form action="" method="POST">
        <div class="campo__form">
            <label for="curp">CURP</label>
            <input 
                type="text"
                name="curp"
                id="curp"
                placeholder="Ingrese su CURP">
        </div>
        <input type="submit" value="Envíar">
    </form>
</section>


<?php include_once './templates/footer.php'; ?>