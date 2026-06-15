const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener("click", () => {

        botoes.forEach(botao => botao.classList.remove("ativo"));
        abas.forEach(aba => aba.classList.remove("ativo"));

        botoes[i].classList.add("ativo");
        abas[i].classList.add("ativo");

    });

}

const datas = [
    new Date("2026-12-31T23:59:59"),
    new Date("2026-11-30T23:59:59"),
    new Date("2026-12-15T23:59:59"),
    new Date("2026-10-01T23:59:59")
];

function atualizaContador(indice){

    const agora = new Date();
    const diferenca = datas[indice] - agora;

    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById(`dias${indice}`).textContent = dias;
    document.getElementById(`horas${indice}`).textContent = horas;
    document.getElementById(`min${indice}`).textContent = minutos;
    document.getElementById(`seg${indice}`).textContent = segundos;
}

function atualizaTudo(){

    for(let i = 0; i < datas.length; i++){
        atualizaContador(i);
    }

}

atualizaTudo();
setInterval(atualizaTudo, 1000);