<?php
    namespace edita\editaController;
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
    session_start();
    use edita\editaModel AS ClaseEditaModelo;
    require_once __DIR__ . '/../../models/edita/editaModel.php';
    
    class editaController {
        function getConexionModelClass(){
            return $model_class = new ClaseEditaModelo\editaModel();
        }

        function guardaCambios($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardaCambios($data);
            return $result_model;
        }

        function traerElemtos($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traerElemtos($data);
            return $result_model;
        }
        
    }
?>