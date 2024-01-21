var valores = [8, 1, 6, 5, 2, 7, 9]
valores.sort()
//console.log(valores)  METÓDO QUE VEM

//for (var pos = 0; pos < valores.length; pos++) {
// console.log(`A posição ${pos} tem o valor ${valores[pos]}`)}     METÓDO COMPLEXO
   
for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // METÓDO MAIS SIMPLIFICADO
}