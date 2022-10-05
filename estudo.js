//alert("oi, eu sou um alert") ;
//console.log("oi, eu sou um console.");
//document.write("Aula de pens. Comp.");

let tabuada =2;

 function meChame(){
     document.write("<h1>Tabuada do " + tabuada + "</h1>");
     document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
     document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
     document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
     document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
     document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
     document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
     document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
     document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
     document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
     document.write(tabuada + " x 10 = "+(tabuada*10)+"<br><br>");
     document.write("Feita por " + nome);

 }
 function quadrado(){
     for(var i =2; i < 101; i++){
         document.write("0 quadrado de " + i + " é ")
     }
 }
 function total(){
     let valor = document.getElementById("val").value;
     let juros = document.getElementById("ju").value;
     let mes = document.getElementById("mes").value;
     let resultado= 0;
     for(let i= 1; i <= mes; i++){
     let resultado = valor * (1+(juros/100));
 }
     document.write("O resultado é" + resultado);
 }


