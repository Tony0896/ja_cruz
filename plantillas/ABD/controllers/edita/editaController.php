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
        
        function traeServicios(){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeServicios();
            return $result_model;
        }

        function guardaServicios($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardaServicios($data);
            return $result_model;
        }

        function traeDetallesServicio($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeDetallesServicio($data);
            return $result_model;
        }

        function cambiaVisibleServicio($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->cambiaVisibleServicio($data);
            return $result_model;
        }
        
        function eliminaServicio($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->eliminaServicio($data);
            return $result_model;
        }

        function deleteImgServices($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->deleteImgServices($data);
            return $result_model;
        }
        
        function guardarImgservices($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardarImgservices($data);
            return $result_model;
        }
        
        function traeSeccionesGaleria(){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeSeccionesGaleria();
            return $result_model;
        }

        function guardaSeccionGaleria($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardaSeccionGaleria($data);
            return $result_model;
        }
        
        function traeSeccionesGaleriaWhitImg(){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeSeccionesGaleriaWhitImg();
            return $result_model;
        }

        function traeImgsService($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->traeImgsService($data);
            return $result_model;
        }
        
        function guardarImgservicesGalery($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->guardarImgservicesGalery($data);
            return $result_model;
        }

        function eliminaImagenGaleria($data){
            $model_edita = $this->getConexionModelClass();
            $result_model = $model_edita->eliminaImagenGaleria($data);
            return $result_model;
        }
        
    }
?>