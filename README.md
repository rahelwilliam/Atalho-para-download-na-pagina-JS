# Atalho para download na pagina JS
Este projeto tem o intuito de auxiliar o desenvolvedor na criação de um atalho as páginas do Site, permitindo ao usuário utilizar tals atalho para realizar o download de algum arquivo.

## O que é preciso para implementar?
Para implementar o código é necessário apenas os seguintes passos:

* Criar uma ou mais páginas em html (que permitirão os atalhos)
* Chamar a biblioteca JQuery nesta página: `<script type="text/javascript" src="http://code.jquery.com/jquery-1.5.js"></script>`
* Criar o arquivo JS com o código de implementação (ou adicionar o mesmo direto no html que receberá a incorporação)

## Qual comando será usado do JS?
O comando usado para executar essa função será o `.bind`, `event.keyCode`, `prompt`, `.each` e `window.location`.

## Função de Exemplo
Caso você já seja experiente e queira simplesmente utilizar a função sem seguir o passo a passo, poderá utilizar o script:

```
$(document).bind('keypress', function (event) {
    
    if (event.keyCode == 9) {
        var info = prompt("Digite o nome do item que deseja fazer download", "");
        var success = true;
        $("tagItem").each(function () {

            var tagItem = $(this).data("tagitem");
            var item = $(this).data("item");

            if (info == item) {
                window.location = "http://SeuSite.com.br/" + tagItem;
                success = true;
                return false;
            } else {
                success = false;
            }

        });

        if (success == false) {
            alert("Não encontramos nada para download com a palavra:" + " " + info);
        }
    }
});
```

## O que eu posso criar com esse projeto
Conforme citado acima, este é um projeto para criar um atalho no site (em nosso exemplo usamos o CTRL+I) e permitir ao usuário fazer download de documentos e aplicativos disponibilizados por nós. Entre eles também podemos citar mais algumas ideias:

###### Download de Documentos
A idealização principal, que é o download de documentos em qualquer página do site. 

###### Acesso a página do Site
Outra ideia interessante que pode ser usada com essa função, é a navegação para outras páginas, onde o usuário poderá utilizar o atalho e digitar o nome / descrição da página para o qual deseja navegar.

*** 

###### Autor 
Rahel William

###### Co-Autor 
Douglas Volkart

###### License
ISC
