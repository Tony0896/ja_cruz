
<?php
    use edita\editaController as ClassControllerEdita;
    require_once  __DIR__ ."/../../controllers/edita/editaController.php";

    $controller = new ClassControllerEdita\editaController();
    $result = $controller->traeServicios();
    echo $result;
?>