<?php
    use edita\editaController as ClassControllerEdita;
    require_once  __DIR__ ."/../../controllers/edita/editaController.php";
    
    $arr_files = [];
    $arr_files1 = [];

    $NoDocs = $_POST['NoDocs'];
    $NoDocs1 = $_POST['NoDocs1'];
    $data = $_POST;

    if ($NoDocs > 0) {
        for ($i=0; $i < $NoDocs; $i++) { 
            array_push($arr_files , $_FILES['Adjunto_'.$i]);
        }
    }
    
    if ($NoDocs1 > 0) {
        for ($i=0; $i < $NoDocs1; $i++) { 
            array_push($arr_files1 , $_FILES['Adjunto1_'.$i]);
        }
    }

    $data['data_files'] = $arr_files;
    $data['data_files1'] = $arr_files1;

    $controller = new ClassControllerEdita\editaController();
    $result = $controller->guardaServicios($data);
    echo $result;
?> 