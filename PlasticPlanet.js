window.onload = function() {
    var objArray = new ContentArray();
    document.getElementById("heading").innerHTML = objArray.content.title;
    document.getElementById("content").innerHTML = objArray.content.text;

    $('#nav-left').click(function() {
        objArray.navLeft();
        document.getElementById("heading").innerHTML = objArray.content.title;
        document.getElementById("content").innerHTML = objArray.content.text;

    });

    $('#nav-right').click(function() {
        objArray.navRight();
        document.getElementById("heading").innerHTML = objArray.content.title;
        document.getElementById("content").innerHTML = objArray.content.text;
    });
}