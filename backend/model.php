<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);

class Alquiler extends Conectar{

    public function get_clientes(){
        try {
            $conectar=parent::Conexion();
            parent::set_name();
            $stm=$conectar->prepare("SELECT * FROM  constructoras");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
            die();
        }
    }
    public function insertar_cliente($id_constructora,$nombre_constructora,$nit_constructora,$nombre_representante,$email_contacto,$telefono_contacto){
        $conectar=parent::Conexion();
        parent::set_name();
        $stm="INSERT INTO constructoras(id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto) VALUES(?,?,?,?,?,?)";
        $stm=$conectar->prepare($stm);
        $stm->bindValue(1,$id_constructora);
        $stm->bindValue(2,$nombre_constructora);
        $stm->bindValue(3,$nit_constructora);
        $stm->bindValue(4,$nombre_representante);
        $stm->bindValue(5,$email_contacto);
        $stm->bindValue(6,$telefono_contacto);
        $stm->execute();
        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }
    public function delete_cliente($id){
        $conectar=parent::Conexion();
        parent::set_name();
        $sql="DELETE FROM constructoras WHERE id_constructora = ?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1,$id);
        $sql->execute();
        return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
    }

}


?>