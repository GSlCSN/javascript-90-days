let alunos = Number(prompt("Quantos alunos tem?: "))

for (let alunosNotas = 1; alunosNotas <= alunos; alunosNotas++) {
    
    let confirmacaoAluno = prompt("Tem algum aluno s/n: ")

    if (confirmacaoAluno == "s" || confirmacaoAluno == "S") {
        let nomeAluno = prompt("Qual e a nome desse aluno(a)");
        let notaAluno = Number(prompt("Qual e a nota desse aluno(a)? (De 0 a 10): "));

        if (notaAluno >= 0) {
            if (notaAluno >= 0 && notaAluno <= 10) {
            if (notaAluno >= 7) {
                console.log(`O aluno ${nomeAluno} tem a nota: ${notaAluno} e a situação dele(a) e de: Aprovado(a)`)
            } else if (notaAluno >= 5) {
                console.log(`O aluno ${nomeAluno} tem a nota: ${notaAluno} e a situação dele(a) e de: Recuperação`)
            } else {
                console.log(`O aluno ${nomeAluno} tem a nota: ${notaAluno} e a situação dele(a) e de: Reprovado(a)`)
            }
            } else {
                console.log(`Notas invalidas somente de 0 a 10 tente de novo`)
            }
        } else {
            console.log("Somente as notas de 0 a 10 podem ser calculadas sem números.")
        }
    } else {
        console.log("Não tem alunos para verificar as notas.")
    }
    
} 