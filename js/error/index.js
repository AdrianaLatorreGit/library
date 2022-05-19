function validaArray(arr, num) {
    try {
        if (!arr && num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== "object")
            throw new TypeError("Num precisa ser do tipo number");

        if (arr.length !== num) throw new RangeError("tamanho inválido");

        return arr;
    } catch (e) {
        // catch para lidar com os erros
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.mensagem);
            // throw error
            // ou
            // console.log(e.name)
            // ou
            // console.log(e.stack)
        }
        if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.mensagem);
            // throw error
            // ou
            // console.log(e.name)
            // ou
            // console.log(e.stack)
        }
        if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.mensagem);
            // throw error;
            // ou
            // console.log(e.name)
            // ou
            // console.log(e.stack)
        } else {
            console.log(`Tipo de erro não esperado ${e}`);
        }
    }
}

console.log(validaArray([], 5));
