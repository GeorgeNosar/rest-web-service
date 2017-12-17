function GetRequestDataBase() {
	var x = new XMLHttpRequest();
	x.open("GET", "/server.php", true);
	
	x.send(null);

	x.onload = function (){
		var arrObjects = [];
 		

 		for(var i = 0; i < 10; i++) {
 			arrObjects[i] = {
    		num: "",
    		name: ""
			}
 		}

		arrObjects = JSON.parse(x.responseText);

		for(var i = 0; i < 10; i++) {
			document.writeln(arrObjects[i].num + "   " + arrObjects[i].name);
		}
	    
	}
};

function PostData() {
	var form = document.forms.input;

	var x = form.elements.num.value;
	var y = form.elements.name.value;

	var obj = {
		num: x,
		name: y	
	}

	var jsonstr = JSON.stringify(obj);
	var conn = new XMLHttpRequest();
	conn.open("POST", "/server.php", true);
	conn.setRequestHeader("Content-type", "application/json");
	conn.send(jsonstr);
	conn.onload = function() {
		document.writeln(conn.responseText);
	}
	
};

function DeleteData() {
	var form = document.forms.delete;

	var x = form.elements.num.value;

	var obj = {
		num: x
	}

	var jsonstr = JSON.stringify(obj);
	var conn = new XMLHttpRequest();
	conn.open("DELETE", "/server.php", true);
	conn.setRequestHeader("Content-type", "application/json");
	conn.send(jsonstr);
	conn.onload = function() {
		document.writeln(conn.responseText);
	}
};