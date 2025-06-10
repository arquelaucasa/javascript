//criamaos um objeto chamado "optios" com as configurações para o efeito de gitação

const options = {

    strings: [
        "bem-vindo ao obra social Dom Bosco",
        "Desenvolvimento Front-end",
        "Desenvolvimento Back-end",
        "Cadastre-se aqui!"
    ],


typeSpeed: 60, // velocidade da digitação (em milisegundos por caractere)
backSpeed: 40, // velocidade em apagar os texto
loop: true,    // faz com que as frases se repitam indefinidamente
backDelay: 1500, // tempo de espera (em milisegundo) antes de começar a apagar uma frase
smartBacKspace: true // otimiza o apagamento : apaga apenas as caratecteres diferente da proxima frase
 
}

// cria uma nova instãncia do typed.js
//"#typed" é o seletor do elemento HTML onde o yexto sera digitado
//"optios " é o objeto com as configurações acima
new Typed("#typed", options);