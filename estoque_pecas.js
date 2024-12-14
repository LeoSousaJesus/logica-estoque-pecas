// Solicita o saldo inicial ao usuário e converte para um número inteiro
saldo = parseInt(prompt("Informar o saldo inicial"));  
document.write("Saldo inicial: " + saldo + "<br>");  // Exibe o saldo inicial

// Inicializa a variável para controle do loop
encerrrar = "n";  

// Loop principal do sistema
while(encerrrar == "n") {
    // Solicitar o tipo de entrada ao usuário e converte para um número inteiro
    tipo = parseInt(prompt("Informar tipo de entrada (1 para entrada, 2 para saída)"));  
    
    // Solicita a quantidade ao usuário e converte para um número inteiro
    quantidade = parseInt(prompt("Informar a quantidade"));  

    // Verifica se a entrada é do tipo 1 (adicionar saldo)
    if(tipo == 1) {
        saldo = saldo + quantidade;  // Adiciona a quantidade ao saldo
        document.write("Entrada: " + quantidade + "<br>");  // Exibe a entrada
    }

    // Verifica se a entrada é do tipo 2 (subtrair saldo)
    if(tipo == 2) {
        // Verifica se há saldo suficiente para a saída
        if(saldo >= quantidade) {
            saldo = saldo - quantidade;  // Subtrai a quantidade do saldo
            document.write("Saída: " + quantidade + "<br>");  // Exibe a saída
        } else {
            // Exibe mensagem de saldo insuficiente
            document.write("Saldo insuficiente" + "<br>");
            alert("Saldo insuficiente");  // Alerta o usuário sobre o saldo insuficiente
        }    
    }

    // Atualiza e exibe o saldo atual
    document.write("Saldo: " + saldo + "<br>");

    // Pergunta ao usuário se deseja encerrar o sistema
    encerrrar = prompt("Deseja encerrar o sistema? (s/n)");
}

// Exibe mensagem de encerramento do sistema
document.write("Sistema encerrado" + "<br>");