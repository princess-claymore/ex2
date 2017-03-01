function calcularmasa(peso,estatura){
var peso= document.getElementById("peso").value;
var estatura=document.getElementById("talla").value;
var res=document.getElementById("res");
var resultado=peso/estatura;

res.innerHTML=resultado;
}
