<?php
namespace edita\editaModel;
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

    use conexionDB\Code AS ClaseConexionDB;
    require_once ( __DIR__ . './../../conexion/dataBase.php' );
    class editaModel{

        function guardaCambios($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $texto = $data['dataSend']['nuevoTexto'];
            $ID = $data['dataSend']['ID'];

            $sql = "UPDATE HomeData SET texto = '$texto', usuario_Mov = '$usuario_Mov', flag_usuarioMov = '$flag_usuarioMov', motivo_movimiento = 'Update campo', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function traerElemtos(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT ID, texto, flag_visible FROM HomeData WHERE flag_visible = 1";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
    
        function traeRedesSociales(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT ID, name, estatus, icon, url FROM redessocialesluvia";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function cambiaVisibleRed($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];
            $visible = $data['visible'];

            $sql = "UPDATE redessocialesluvia SET estatus = $visible, motivo = 'Update campo Visble', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function cambiaURLRed($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];
            $visible = $data['valor'];

            $sql = "UPDATE redessocialesluvia SET url = '$visible', motivo = 'Update campo URL', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function traePromos(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT ID, promo, estatus FROM promos_luvia WHERE estatus = 1";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function guardaPromo($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $promo = $data['input_promo'];

            $sql = "INSERT INTO promos_luvia (promo, estatus, fecha_registro, motivo) VALUES ('$promo', 1, current_timestamp(), 'Nueva Promo')";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
        
        function eliminaPromo($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];

            $sql = "UPDATE promos_luvia SET estatus = 0, motivo = 'Update campo URL', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function traeTestimonios(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT ID, name, profession, imgUrl, estatus, comentarios FROM testimonios_luvia WHERE estatus = 1";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
        
        function guardaTestimonios($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            
            $name = $data['nameTestimonio'];
            $profession = $data['profesionTestimonio'];
            $estatus = 1;
            $comentarios = $data['testimonioTestimonio'];
            $motivo = 'Nuevo Testimonio';
            $NoDocs = $data['NoDocs'];

            if($NoDocs > 0){
                $rutaBase = './../../img/testimonios';

                for ($i=0; $i < $NoDocs ; $i++) {
                    $name_unique = "/". uniqid()."_".time()."_".$data['data_files'][$i]['name'];
                    if ( move_uploaded_file( $data['data_files'][$i]['tmp_name'],$rutaBase.$name_unique) ) {
                        $ruta_anexo = './img/testimonios'.$name_unique;
                        $sql = "INSERT INTO testimonios_luvia (name, profession, imgUrl, estatus, comentarios, fecha_registro, motivo) VALUES ('$name', '$profession', '$ruta_anexo', $estatus, '$comentarios', current_timestamp(), '$motivo')";
                        try{
                            $stmt = mysqli_query($conexion, $sql);
                            if($stmt){
                                $movi_status = 200;
                            } else {
                                $movi_status = 500;
                            }
                        } catch (mysqli_sql_exception $e) {
                            $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                        }
                    } else {
                        $movi_status = 500;
                    }
                }
            } else {
                $ruta_anexo = '';
                $sql = "INSERT INTO testimonios_luvia (name, profession, imgUrl, estatus, comentarios, fecha_registro, motivo) VALUES ('$name', '$profession', '$ruta_anexo', $estatus, '$comentarios', current_timestamp(), '$motivo')";
                try{
                    $stmt = mysqli_query($conexion, $sql);
                    if($stmt){
                        $movi_status = 200;
                    } else {
                        $movi_status = 500;
                    }
                } catch (mysqli_sql_exception $e) {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                }
            }
            
            mysqli_close( $conexion );
            $resultJson = $movi_status;
            return $resultJson;
        }
        
        function eliminaTestimonio($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];

            $sql = "UPDATE testimonios_luvia SET estatus = 0, motivo = 'Eliminación Testimonio', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function traeServicios(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT ID, name, mini_descripcion, imgUrl, estatus, descripcion, conocer_mas,icon,visible_servicios  FROM servicios_luvia WHERE estatus = 1";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function guardaServicios($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            
            $name = $data['nameServicio'];
            $mini_Descipcion = $data['mini_Descipcion'];
            $descipcion = $data['descipcion'];
            $estatus = 1;
            $motivo = 'Nuevo Servicio';
            $NoDocs = $data['NoDocs'];
            $NoDocs1 = $data['NoDocs1'];
            $icon = $data['icon'].' service-icon';
            $conocer_mas = $data['conocer_mas'];
            $rutaBase = './../../img/servicios';
            for ($i=0; $i < $NoDocs ; $i++) {
                $name_unique = "/". uniqid()."_".time()."_".$data['data_files'][$i]['name'];
                if ( move_uploaded_file( $data['data_files'][$i]['tmp_name'],$rutaBase.$name_unique) ) {
                    $ruta_anexo = './img/servicios'.$name_unique;
                    $sql = "INSERT INTO servicios_luvia (name, mini_descripcion, imgUrl, estatus, descripcion, fecha_registro, motivo, conocer_mas, icon, visible_servicios) VALUES ('$name', '$mini_Descipcion', '$ruta_anexo', $estatus, '$descipcion', current_timestamp(), '$motivo', $conocer_mas, '$icon', 1)";
                    try{
                        $stmt = mysqli_query($conexion, $sql);
                        if($stmt){
                            
                            $movi_status = 200;
                        } else {
                            $movi_status = 500;
                        }
                    } catch (mysqli_sql_exception $e) {
                        $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                    }
                } else {
                    $movi_status = 500;
                }
            }

            if($NoDocs1 > 0){
                $sql = "SELECT ID FROM servicios_luvia WHERE estatus = 1 ORDER BY ID DESC LIMIT 1";
                try{
                    $stmt = mysqli_query($conexion, $sql);
                    if($stmt){
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $IDinsert = $row['ID'];
                        }
                        for ($i=0; $i < $NoDocs1 ; $i++) {
                            $name_unique = "/". uniqid()."_".time()."_".$data['data_files1'][$i]['name'];
                            if ( move_uploaded_file( $data['data_files1'][$i]['tmp_name'],$rutaBase.$name_unique) ) {
                                $ruta_anexo = './img/servicios'.$name_unique;
                                $sql = "INSERT INTO imgsServicios (imgUrl, estatus, fecha_registro, motivo, FKServicio) VALUES ('$ruta_anexo', $estatus, current_timestamp(), '$motivo', $IDinsert)";
                                try{
                                    $stmt = mysqli_query($conexion, $sql);
                                    if($stmt){
                                        $movi_status = 200;
                                    } else {
                                        $movi_status = 500;
                                    }
                                } catch (mysqli_sql_exception $e) {
                                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                                }
                            } else {
                                $movi_status = 500;
                            }
                        }       
                    }
                } catch (mysqli_sql_exception $e) {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                }
            } else {
                $movi_status = 200;
            }
            
            mysqli_close( $conexion );
            $resultJson = $movi_status;
            return $resultJson;
        }

        function traeDetallesServicio($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $FKServicio = $data['ID'];

            $sql = "SELECT ID, imgUrl, estatus, FKServicio FROM imgsservicios WHERE estatus = 1 AND FKServicio = $FKServicio";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
  
        function cambiaVisibleServicio($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];
            $visible = $data['visible'];

            $sql = "UPDATE servicios_luvia SET visible_servicios = $visible, motivo = 'Update campo Visble', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function eliminaServicio($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];

            $sql = "UPDATE servicios_luvia SET visible_servicios = 0, estatus = 0, motivo = 'Eliminado', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
     
        function deleteImgServices($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];

            $sql = "UPDATE imgsservicios SET estatus = 0, motivo = 'Eliminado', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function guardarImgservices($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            
            $FKServicio = $data['FKServicio'];
            $estatus = 1;
            $motivo = 'Nuevo Img';
            $NoDocs = $data['NoDocs'];

            if($NoDocs > 0){
                $rutaBase = './../../img/servicios';

                for ($i=0; $i < $NoDocs ; $i++) {
                    $name_unique = "/". uniqid()."_".time()."_".$data['data_files'][$i]['name'];
                    if ( move_uploaded_file( $data['data_files'][$i]['tmp_name'],$rutaBase.$name_unique) ) {
                        $ruta_anexo = './img/servicios'.$name_unique;
                        $sql = "INSERT INTO imgsservicios (imgUrl, estatus, fecha_registro, motivo, FKServicio) VALUES ('$ruta_anexo', $estatus, current_timestamp(), '$motivo', $FKServicio)";
                        try{
                            $stmt = mysqli_query($conexion, $sql);
                            if($stmt){
                                $movi_status = 200;
                            } else {
                                $movi_status = 500;
                            }
                        } catch (mysqli_sql_exception $e) {
                            $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                        }
                    } else {
                        $movi_status = 500;
                    }
                }
            } else {
                $movi_status = 200;
            }
            
            mysqli_close( $conexion );
            $resultJson = $movi_status;
            return $resultJson;
        }
        
        function traeSeccionesGaleria(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT ID, name FROM galeria_secciones_luvia WHERE estatus = 1";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function guardaSeccionGaleria($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $name = $data['input_name'];

            $sql = "INSERT INTO galeria_secciones_luvia (name, estatus, fecha_registro, motivo) VALUES ('$name', 1, current_timestamp(), 'Nueva seccion galeria')";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }

        function traeSeccionesGaleriaWhitImg(){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $sql = "SELECT secc.ID as IDSecc, secc.name, secc.estatus as estatusSec, gal.ID, gal.imgUrl, gal.estatus, gal.FKService FROM galeria_secciones_luvia secc LEFT JOIN galeria gal ON  gal.FKService = secc.ID WHERE secc.estatus = 1 ORDER BY IDSecc";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
        
        function traeImgsService($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $FKServicio = $data['ID'];
            $sql = "SELECT ID, imgUrl, estatus, FKService FROM galeria WHERE FKService = $FKServicio AND estatus = 1";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $rowcount=mysqli_num_rows($stmt);   
                    if ( $rowcount ) {
                        while($row = mysqli_fetch_assoc($stmt)) {
                            $array[] =$row;
                        }
                        $result = array('success' => true, 'result' => $array);
                    } else{
                        $result = array('success' => true, 'result' => 'Sin Datos');
                    }
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
        
        function guardarImgservicesGalery($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            
            $FKServicio = $data['FKServicio'];
            $estatus = 1;
            $motivo = 'Nuevo Img';
            $NoDocs = $data['NoDocs'];

            if($NoDocs > 0){
                $rutaBase = './../../img/gallery';

                for ($i=0; $i < $NoDocs ; $i++) {
                    $name_unique = "/". uniqid()."_".time()."_".$data['data_files'][$i]['name'];
                    if ( move_uploaded_file( $data['data_files'][$i]['tmp_name'],$rutaBase.$name_unique) ) {
                        $ruta_anexo = './img/gallery'.$name_unique;
                        $sql = "INSERT INTO galeria (imgUrl, estatus, fecha_registro, motivo, FKService) VALUES ('$ruta_anexo', $estatus, current_timestamp(), '$motivo', $FKServicio)";
                        try{
                            $stmt = mysqli_query($conexion, $sql);
                            if($stmt){
                                $movi_status = 200;
                            } else {
                                $movi_status = 500;
                            }
                        } catch (mysqli_sql_exception $e) {
                            $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
                        }
                    } else {
                        $movi_status = 500;
                    }
                }
            } else {
                $movi_status = 200;
            }
            
            mysqli_close( $conexion );
            $resultJson = $movi_status;
            return $resultJson;
        }

        function eliminaImagenGaleria($data){
            $db = new ClaseConexionDB\ConexionDB();
            $conexion = $db->getConectaDB();

            $usuario_Mov = $_SESSION['ID_usuario'];
            $flag_usuarioMov = $_SESSION['usuario_usua'];
            $ID = $data['ID'];

            $sql = "UPDATE galeria SET estatus = 0, motivo = 'Eliminación', fecha_registro = current_timestamp() WHERE ID = '$ID'";
            try{
                $stmt = mysqli_query($conexion, $sql);
                if($stmt){
                    $result = array('success' => true, 'result' => 'Sin Datos');
                } else {
                    $result = array('success' => false, 'result' => false, "result_query_sql_error"=>"Error no conocido" );
                }
            } catch (mysqli_sql_exception $e) {
                $result = array('success' => false, 'result' => false, "result_query_sql_error"=>$e->getMessage() );
            }
            
            mysqli_close( $conexion );
            $resultJson = json_encode( $result );
            return $resultJson;
        }
    }
?>