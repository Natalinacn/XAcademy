/*Ejercicio 1

1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123*/

function piramide(num) {
  let i = 1;
  let a = 1;
  while (i <= num + 1) {
    for (let j = 1; j <= a; j++) {
      process.stdout.write(j.toString());
    }
    console.log("");
    a += 1;
    i += 1;
  }
}

/* Ejercicio 2: Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos
 */

function joint(array_x, array_y) {
  let union = [];
  for (let elem_x of array_x) {
    for (let elem_y of array_y) {
      if (elem_x === elem_y) {
        union.push(elem_x);
      }
    }
  }
  return Array.from(new Set(union));
}

/*Ejercicio 3*/

class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }
  agregarProducto(nombre, precio, unidades) {
    if (!this.productos.includes(nombre)) {
      this.productos.push(nombre);
      this.montoTotal += precio * unidades;
      return this.productos;
    } else {
      console.log("Ya existe ${nombre}");
    }
  }
  mostrarMonto() {
    return this.montoTotal;
  }
}
