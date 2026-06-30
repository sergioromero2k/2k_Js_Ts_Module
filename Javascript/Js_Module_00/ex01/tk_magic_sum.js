function tk_magic_sum(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if(Number.isNaN(numA) || Number.isNaN(numB))
        return "Error: algún valor no es un número válido"
    return numA + numB;
}

console.log(tk_magic_sum(5, "10"))
console.log(tk_magic_sum(1, "Hola"))