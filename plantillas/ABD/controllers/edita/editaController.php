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
        
        function traeRedesSociales(){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeRedesSociales();
            return $result_model;
        }

        function cambiaVisibleRed($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->cambiaVisibleRed($data);
            return $result_model;
        }
        
        function cambiaURLRed($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->cambiaURLRed($data);
            return $result_model;
        }

        function traePromos(){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traePromos();
            return $result_model;
        }

        function guardaPromo($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardaPromo($data);
            return $result_model;
        }
        
        function eliminaPromo($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->eliminaPromo($data);
            return $result_model;
        }

        function traeTestimonios(){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeTestimonios();
            return $result_model;
        }

        function guardaTestimonios($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardaTestimonios($data);
            return $result_model;
        }

        function eliminaTestimonio($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->eliminaTestimonio($data);
            return $result_model;
        }
        
    }
?>