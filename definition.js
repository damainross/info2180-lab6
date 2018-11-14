
function loadDoc(){
var xhttp = new XMLHttpRequest();
      var searchButton = document.getElementById("search");
   //searchButton.onclick = function (){
   	xhttp.onreadystatechange = function(){
    
    
    if (this.readyState == 4 && this.status == 200  ) {
       alert(this.responseText);
   
    }
    
  
    	
   	}
   	
   	xhttp.open("GET", "request.php?q="+ 'definition', true);
  xhttp.send();
   }

  
 