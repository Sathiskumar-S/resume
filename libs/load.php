<?php

function loadTemplate($filename){
    include $_SERVER['DOCUMENT_ROOT']."/resume/_templates/$filename.php";
}