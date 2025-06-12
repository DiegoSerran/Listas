
class Calculadora{

    suma()
    {
        let resultado = var1+var2;
        console.log("El resultado de la suma es: " + resultado);
    }  

    resta()
    {
        let resultado = var2-var1;
        console.log("El resultado de la resta es: " + resultado);
    }

    multiplicacion()
    {
       let multiplicacion;
       multiplicacion=var1*var2;
        return (multiplicacion);
    }

    division()
    {
        let division;
        division=var1/var2;
        console.log("El resultado de la división es: " + division);
    }
}
let casio = new Calculadora;

const var1 =2;
const var2=10;

casio.suma(var1,var2);
casio.resta(var1,var2);
let res= casio.multiplicacion(var1,var2);
console.log ("El resultado de la multiplicación es: " + res);
casio.division(var1,var2);