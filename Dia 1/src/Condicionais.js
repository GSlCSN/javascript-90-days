let nota = Number(prompt("Qual foi a sua nota? (De 0 a 10): "));

if (nota >= 0 && nota <= 10) {
    if (nota >= 7) {
        alert("Aprovado")
    } else if (nota >= 5) {
        alert("Recuperação")
    } else {alert("Reprovado")}
} else {
    alert("Nota inválida")
}