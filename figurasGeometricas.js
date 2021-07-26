//Perimetro cuadrado = un lado * todos los lados = L * 4
//Area cuadrado = (tamaño de un lado) L * L

//Perímetro tringualo = sumar todos sus lados
//Area del triangulo = (base  * altura) / 2

//perimetro círculo = radio=> desde el centro del circulo a cualquiera de sus lados  ---  diametro => radio *2
// = diametro * PI
//Area de un circulo = radio al cuadrado  * PI


//CALCULOS PARA EL CUADRADO
console.group("Cuadrados")

/* const ladoCuadrado = 5
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm") */

function perimetroCuadrado(ladoCuadrado){
  return ladoCuadrado * 4  
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm")

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado
} 
//console.log("El área del cuadrado es: " + areaCuadrado + " cm2")
console.groupEnd()

//CALCULOS PARA EL TRIANGULO
console.group("Triangulos")
/*const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4

console.log(
    "Los lados del tiangulo miden: " 
    + ladoTriangulo1 + " cm, " 
    + ladoTriangulo2 + " cm, " 
    + baseTriangulo + " cm"
    )*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
} 
//console.log("El perimetro del tringulo es: " + perimetroTriangulo + " cm")

/*const alturaTriangulo = 5.5
console.log("La altura del triangulo es: " + alturaTriangulo + " cm")*/
function areaTriangulo(base, altura){
    return (base * altura) / 2
} 
//console.log("El área del triangulo es: " + areaTriangulo + " cm2")
console.groupEnd()

//CALCULOS PARA EL CIRCULO
console.group("Circulos")
/* const radio = 4
const diametro = radio * 2 */
const PI = Math.PI

/* console.log("Valor del Diametro del circulo: " + diametro)
console.log("Valor del radio del circulo: " + radio)
console.log("Valor de PI: " + PI) */

function diametroCirculo(radio){
    return radio * 2
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
} 
/* console.log("El perimetro del circulo es: " + perimetroCirculo + " cm") */

function areaCirculo(radio){
    return (radio * radio) * PI
} 
/* console.log("El área del circulo es: " + areaCirculo + " cm2") */
console.groupEnd()