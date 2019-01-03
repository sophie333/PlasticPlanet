var ContentArray = require ('./Content.js');
var contentArr;
var modelArr;
var length = 3;

function ContentArray() {
    contentArr = new Array(0);
    modelArr = new Array(0);
    this.content = new Content("#1 Danger", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
        "                sed diam nonumy eirmod tempor invidunt ut labore et dolore\n" +
        "                magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
        "                accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
        "                gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
        "                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n" +
        "                elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "                dolore magna aliquyam erat, sed diam voluptua. At vero eos\n" +
        "                et accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
        "                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n" +
        "                amet.");

    this.current = 0;
    this.model = 'models/world3.glb';
    init();
}

function init() {
    let object1 = new Content("#1 Danger", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
        "                sed diam nonumy eirmod tempor invidunt ut labore et dolore\n" +
        "                magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
        "                accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
        "                gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
        "                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n" +
        "                elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
        "                dolore magna aliquyam erat, sed diam voluptua. At vero eos\n" +
        "                et accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
        "                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n" +
        "                amet.");
    let string1 = 'models/world3.glb';
    let object2 = new Content("#2 Danger", "Plastic in Fish");
    let string2 = 'models/world2.glb';
    let object3 = new Content("#3 Danger", "Plastic in You");
    let string3 = 'models/world.glb';

    contentArr.push(object1);
    contentArr.push(object2);
    contentArr.push(object3);

    modelArr.push(string1);
    modelArr.push(string2);
    modelArr.push(string3);

    this.content = contentArr[this.current];
    this.model = modelArr[this.current];
}


ContentArray.prototype.navRight = function() {
    if ((this.current + 1) == length) {
        this.current = 0;
    }
    else {
        this.current = this.current + 1;
    }
    this.content = contentArr[this.current];
    this.model = modelArr[this.current];
};

ContentArray.prototype.navLeft = function() {
    if ((this.current - 1) < 0) {
        this.current = length - 1;
    }
    else {
        this.current = this.current - 1;
    }
    this.content = contentArr[this.current];
    this.model = modelArr[this.current];
};

ContentArray.prototype.getContent = function (index) {
    console.log(index);
    if (contentArr != undefined) {
        return contentArr[index];
    }
};

module.exports = ContentArray;