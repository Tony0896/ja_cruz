<?php
    namespace contacto\contactoController;
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
    session_start();
    use contacto\contactoModel AS ClaseContactoModelo;
    require_once __DIR__ . '/../../models/contacto/contactoModel.php';
    
    class contactoController {
        function getConexionModelClass(){
            return $model_class = new ClaseContactoModelo\contactoModel();
        }

        function saveDataContacto($data){
            $model_contacto = $this->getConexionModelClass();
            $result_model = $model_contacto->saveDataContacto($data);
            return $result_model;
        }
    }
?>