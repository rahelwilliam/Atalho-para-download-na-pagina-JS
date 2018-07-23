// iniciando o evento de ligação do teclado com documento atual
$(document).bind('keypress', function (event) { 

    // caso as teclas pressionadas forem CTRL+I (control e letra I [indicado pelo número 9] ao mesmo tempo) entra no método e executa a função
    if (event.keyCode == 9) { 
        // Mostramos o prompt do javascript para receber o nome do arquivo a ser baixado
        var info = prompt("Digite o nome do item que deseja fazer download", ""); 
        // declaramos a variavel de retorno como true (verdadeiro) por padrão
        var success = true;

        // Percorre todos os elementos <tagItem> do documento
        $("tagItem").each(function () { 
            // Para cada elemento, pegamos os atributos tagItem e Item (ex: <tagItem data-item="App1" data-tagitem="linkApp1">)
            var tagItem = $(this).data("tagitem");
            var item = $(this).data("item");

            // Caso o nome do item (var item) seja igual o nome informado pelo usuário no prompt (var info = prompt), entramos no teste e executa a função
            if (info == item) {
                // Montamos a url de destino para download do arquivo desejado, onde em nosso caso a URL será somada com a descrição passada
                window.location = "http://SeuSite.com.br/" + tagItem;

                // Definimos a variável de retorno como true (verdadeiro) e saimos do método "each" (usando return false para não ficar em loop)
                success = true;
                return false;

            } else {
                // Caso a comparação não seja verdadeira, definimos como false a variavel de retorno, e vamos para o proximo elemento
                success = false;
            }

        });
        // Caso todos os elementos não combinem com o informado pelo usuario, retornamos um alerta de erro na tela (indicando que não foi encontrado o que ele digitou)
        if (success == false) {
            alert("Não encontramos nada para download com a palavra:" + " " + info);
        }
    }
});
