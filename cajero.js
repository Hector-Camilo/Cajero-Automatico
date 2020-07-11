// Proyecto Cajero Automatico
class Billete // creo la clase Billete      
 { 
    constructor(valor,cantidad) // declaro el nombre de los atributos que tendran mis objetos o instancias de la clase 
    {
        this.imagen = new Image();// estoy creando el objeto imagen que pertenece a la clase Image
        this.valor = valor; // declaro las variables de las instancias de la clase
        this.cantidad = cantidad ;// declaro las variables de las instancias de la clase
        this.imagen.src = imagenes[this.valor];// estoy importando  en el objeto imagen la URL de cada imagen segun su nombre 
        
    }
    mostrar()    
    {
    document.body.appendChild(this.imagen);// agrego una etiqueta imagen dentro del body de mi archivo HTML
    }  

 } 
var imagenes=[];
imagenes ["100"] = "billete-100.jpg"
imagenes ["50"] = "billete-50.jpg"
imagenes ["20"] = "billete-20.jpg"
imagenes ["10"] = "billete-10.jpg"
imagenes ["5"] = "billete-5.jpg"

var caja = []; // dinero disponible para entrega en mi Cajero Automatico 
 caja.push(new Billete(100,3)); // creo un nuevo objeto en mi Array  "Caja"
 caja.push(new Billete(50,2)); 
 caja.push(new Billete(20,2));
 caja.push(new Billete(10,2));
 caja.push(new Billete(5,2)); 

 function mostrarCajaInicial()
    {
        resultado1.innerHTML = "<strong>" + "Dinero Disponible en el cajero" + "</strong>" + "<br />";
            for (var z of caja)
        {
          resultado1.innerHTML += z.cantidad + " Billetes de $ " + z.valor +"<br />"; 
        }
    }  

    function mostrarDineroEntregado()
    {
        resultado.innerHTML += "<img src=" + e.imagen.src + ">" + "<hr />" ; 
    }


 mostrarCajaInicial(); 

function entregarDinero() // declaracion de funcion entregar dinero  
 {
    var di = document.getElementById("dinero");
    dinero = parseInt(di.value);
   
for(var bi of caja)
{
    
        if (dinero > 0)
        {
            div = Math.floor(dinero/bi.valor)

        if (div > bi.cantidad)
        {
            papeles = bi.cantidad;
        }
        else 
        {
        papeles = div;
        }
            entregado.push(new Billete(bi.valor,papeles,bi.imagen));
            dinero = dinero - (bi.valor * papeles); 
        }   
            disponible = bi.cantidad-papeles ;
            caja[x] = new Billete(bi.valor,disponible) 
            x += 1;
            papeles = 0;       
}
            x = 0;

    if(dinero > 0)
    {
        resultado.innerHTML = "<strong>" + "No tengo el dinero suficiente :)" + "</strong>"; 
    }    

   else
   {
       
    for(e of entregado)
    {
        if (e.cantidad > 0) 
        {
           
           for (var i = 0 ; i < e.cantidad ; i++ )
           {           
           mostrarDineroEntregado();   
           }
            e.cantidad=0;
        }
    }  
    resultado.innerHTML +=  "<strong>" + "Dinero Disponible en el cajero" + "</strong>" + "<br />";
   }

 {
    for (s of caja)
    {        
            if (s.cantidad > 0)
        {      
                resultado.innerHTML += s.cantidad + " Billetes de $ " + s.valor +"<br />"; 
        }
    }
}
} 
 var entregado = []; // Array donde voy almacenar el dinero  que le voy a entregar   al Usuario 
 var dinero ; // variable con el dinero solicitado por el usuario 
 var div = 0;   
 var papeles = 0; // cantidad de billetes a entregar 
 var x = 0;
 var y = 1;     


 var resultado = document.getElementById("resultado");
 var b = document.getElementById("extraer"); // obtengo el boton de mi html por medio de su Id
 b.addEventListener("click",entregarDinero); // le digo al objeto boton que este atento a  esuchar el evento del click 
 // para que cuando esto suceda dispare la funcion "entregarDinero" 
