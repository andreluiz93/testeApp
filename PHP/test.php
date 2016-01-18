<?php

require 'connection.php';
$i=0;
$db = Connection::getDB();
$list = array();

foreach($db->pessoa() as $p){
    $list[] = array (
        'id' => utf8_encode($p['id']),
        'genero' => utf8_encode($p['genero']),
        'nome' => utf8_encode($p['nome']),
        'cnpj' => utf8_encode($p['cnpj']),
        'email' => utf8_encode($p['email_principal'])
    );
};
echo json_encode($list);


?>