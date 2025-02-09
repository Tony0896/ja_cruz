<?php
    use contacto\contactoController as ClassControllerContacto;
    require_once  __DIR__ ."/../../controllers/contacto/contactoController.php";

    $data = $_POST;
    $controller = new ClassControllerContacto\contactoController();
    $result = $controller->saveDataContacto($data);
    echo $result;
?>