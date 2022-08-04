enum Profissao {
    Atriz,
    Padeiro,
    Desenvolvedor,
    Gerente
}

type Humano = {
    nome: string,
    idade: number,
    atividade: Profissao
}

let pessoa1: Humano = {
    nome: 'Angela',
    idade: 29,
    atividade: Profissao.Atriz
};

let pessoa2: Humano = {
    nome: 'Caio',
    idade: 19,
    atividade: Profissao.Padeiro
};

let pessoa3: Humano = {
    nome: 'Ludmila',
    idade: 32,
    atividade: Profissao.Gerente
};

let pessoa4: Humano = {
    nome: "Ricardo",
    idade: 19,
    atividade: Profissao.Desenvolvedor
}

let pessoa5: Humano = {
    nome: "Noel",
    idade: 59,
    atividade: Profissao.Desenvolvedor
}
