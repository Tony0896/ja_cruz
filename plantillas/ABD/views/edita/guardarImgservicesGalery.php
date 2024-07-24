
<?php
    use edita\editaController as ClassControllerEdita;
    require_once  __DIR__ ."/../../controllers/edita/editaController.php";
    
    $arr_files = [];

    $NoDocs = $_POST['NoDocs'];
    $data = $_POST;

    if ($NoDocs > 0) {
        for ($i=0; $i < $NoDocs; $i++) { 
            array_push($arr_files , $_FILES['Adjunto_'.$i]);
        }
    }

    $data['data_files'] = $arr_files;

    $controller = new ClassControllerEdita\editaController();
    $result = $controller->guardarImgservicesGalery($data);
    echo $result;
?>