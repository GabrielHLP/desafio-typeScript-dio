

enum Profissao{
    Atriz,
    Padeiro
}

interface Pessoa{
    nome:string,
    idade:number,
    profissao:Profissao
}

let pessoa1 : {nome:string, idade:number, profissao:Profissao} = {
    nome : "maria",
    idade : 29,
    profissao : Profissao.Atriz
};

let pessoa2 : {nome:string, idade:number, profissao:Profissao} = {
    nome : "roberto",
    idade : 19,
    profissao : Profissao.Padeiro
};


let pessoa3 : Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 : Pessoa = {
    nome : "carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}