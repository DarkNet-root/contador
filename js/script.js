document.getElementById("contarButton").addEventListener("click", function(){
    const numero = document.getElementById("numeroInput").value;
    const quantidadeDedigitos = String(numero).length;

    document.getElementById("resultado").innerHTML = `${quantidadeDedigitos}`;
});