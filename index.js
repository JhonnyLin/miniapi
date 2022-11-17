const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = {
                    nome: "Jhonny Santos Lin",
                    idade: "25 anos",
                    comida_favorita: "batata frita",
                    disciplina_favorita : "Topicos Especiais",
                    curso : "ADS",
                    instituicao: "FATEC Rubens Lara",
    }
    res.send(usuario)
}) ;

app.get("/professores", (req, res )=> {
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    },
    {
                    nome: "Caludio",
                    disciplina : "Redes",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "O danado do HASKELL",
        curso : "ADS"
}]
    res.send(professores);
}) ;


app.listen(3000, () => {
    console.log("funfando...");
})
