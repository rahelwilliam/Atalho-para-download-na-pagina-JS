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
