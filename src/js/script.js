var formAluno = document.getElementById("form-produto")

var lista = []

function cadastrarAluno(event){

    event.preventDefault()

    var nome = document.getElementById("nome-aluno").value
    
    var idade = document.getElementById("idade-aluno").value
    
    var imagem = document.getElementById("imagem-aluno").value
    
    console.log ("função cadastrarProduto chamada ")
    console.log (nome)
    console.log(idade)
    console.log(imagem)

    var objetoPessoal = {
        nome: aluno,
        idade: idade,
        imagem: imagem
    }
     console.log (objetoPessoal)
     console.log ("função cadastrarAluno chamada ")
}

formAluno.addEventListener("submit",cadastrarAluno)