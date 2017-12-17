<?php
header('Content-Type: application/json');
require_once 'connection.php'; 

$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

$servmeth = $_SERVER['REQUEST_METHOD'];
	switch ($servmeth) {
		case "POST":
			$postData = file_get_contents('php://input');
			$datap = json_decode($postData, true);
			$num = $datap['num'];
			$name = $datap['name'];
			$result = mysqli_query ($link, "INSERT INTO `test` (`num`, `name`) VALUES ($num, $name)");
     
    		if ($result = 'true'){
        		echo "Информация занесена в базу данных";
    		}else{
        		echo "Информация не занесена в базу данных";
    		}
			break;
		case "DELETE":
			$delData = file_get_contents('php://input');
			$datad = json_decode($delData, true);
			$numd = $datad['num'];
			$del = mysqli_query ($link, "DELETE FROM `test` WHERE `num`=$numd");
     
    		if ($del = 'true'){
        		echo "Информация удалена";
    		}else{
        		echo "Ошибка";
    		}
			break;
		case "GET":
			$data = array(); 
			$query = "SELECT * FROM `test`";
			$ta = mysqli_query($link, $query); 
			while($row = mysqli_fetch_assoc($ta)){
    			$data[] = $row;
			}
			exit(json_encode($data));
			break;
	}


mysqli_close($link);
?>