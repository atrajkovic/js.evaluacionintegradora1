var parrafos= document.body.getElementsByClassName("tip");
var ptotal= parrafos.length

for( var i=0;i<ptotal;i++)
{ parrafos[i].style.color = "red" 
 parrafos[i].style.fontSize= "20px"
}


function calcular(){
		
	var productovalue= document.getElementById('lista1').value;
	var cantidadvalue=document.getElementById('lista2').value;

	if( productovalue=="Tortas"){
		    document.getElementById("lista1").style.color="blue"
            var preciototal= cantidadvalue*300
		    if(cantidadvalue>15){
		    	preciototal=preciototal*0.95
		    }
		document.getElementById("PrecioporMayor").style.fontSize="28px"
		document.getElementById("PrecioporMayor").style.color="#011447"    
		document.getElementById("PrecioporMayor").innerHTML=preciototal



	}else if( productovalue=="Alfajores"){

		    document.getElementById("lista1").style.color="red"
			var preciototal= cantidadvalue*10
			if(cantidadvalue>15){
		    	preciototal=preciototal*0.95
		    }	
		document.getElementById("PrecioporMayor").innerHTML=preciototal	
	}


}


var parrafos= document.body.getElementsByClassName("formulario");
var ptotal= parrafos.length

for( var i=0;i<ptotal;i++)
{ parrafos[i].style.color = "#9c0e38" 
 parrafos[i].style.fontSize= "20px"
 parrafos[i].style.fontWeight= "bold"
}