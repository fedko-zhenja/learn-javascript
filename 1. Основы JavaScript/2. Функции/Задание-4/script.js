function pow(x, n) {
 return x ** n 
}

let x = prompt('Введите x !', 0);
let n = prompt('Введите n !', 0);

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    let result = pow(x, n);
    alert(result);
}









