function getAndValidateValues() {
    console.log("test");
    var hoofdstad = document.getElementById("hoofdstad").value;
    console.log(hoofdstad);
    var aantalPoten = document.getElementById("poten").value;
    console.log("poten");
    var grootsteMeer = document.getElementById("meer").value;
    console.log("meer");
    if (hoofdstad != "parijs") {
        document.getElementById('hoofdstad').style.color = "red";
    }
    if (aantalPoten != "8") {
        document.getElementById('aantalPoten').style.color = "red";
    }
    if (grootsteMeer != "ijsselmeer") {
        grootsteMeer.addClass.value('red');
        document.getElementById('grootsteMeer').style.color = "red";
    }
    document.getElementById('labelForImageUploadID').style.color = "green";
}