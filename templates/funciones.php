<?php

function debuguear($variable): string
{
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

function sendMail() {
    //EMAIL
    $emailDestino = "";
    $asunto = "";
    $mensaje = "";
    $remitente = "";

   // $emailDestino = $correoFrom;
    $asunto = "Validación de sus documentos";
    $cabeceras = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    mail($emailDestino, $asunto, $mensaje, $cabeceras, $remitente);

}