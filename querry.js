
function loadDoc(){
 var word = document.getElementById("queryTxtBox").value; 
var xhttp = new XMLHttpRequest();
      var searchButton = document.getElementById("search");
   //searchButton.onclick = function (){
   	xhttp.onreadystatechange = function(){
    
    
    if (this.readyState == 4 && this.status == 200  ) {
       //alert(this.responseText);
        document.getElementById("result").innerHTML = this.responseText ;
       //document.getElementById("result").innerHTML = 222222222222 ;
   
    }
    
  
    	
   	}
   	
   	xhttp.open("GET", "request.php?q="+ word, true);
  xhttp.send();
   }

  
 