function create_option () {
    var select = document.createElement("select");
    document.body.appendChild(select);
    var option;
    for (option = 0; option < 5; option++)
    {
        var opt = document.createElement("option");
        select.appendChild(opt);
    }
};