
<?php
    use edita\editaController as ClassControllerEdita;
    require_once  __DIR__ ."/../../controllers/edita/editaController.php";

    $data = $_POST;
    $controller = new ClassControllerEdita\editaController();
    $result = $controller->cambiaURLRed($data);
    echo $result;
?>