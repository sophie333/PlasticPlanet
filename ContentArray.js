var contentArr;

function ContentArray() {
    contentArr = new Array(0);
    this.current = 0;
    this.length = 3;
    this.content = new Content("#1 Danger", "Lorem ipsum dolor", "models/test05.glb");
    init();
}

function init() {
    let object1 = new Content("#1 Danger", "Lorem ipsum dolor", "models/test05.glb");
    let object2 = new Content("#2 Danger", "Plastic in Fish", "models/test02.glb");
    let object3 = new Content("#3 Danger", "Plastic in You", "models/test04.glb");

    contentArr.push(object1);
    contentArr.push(object2);
    contentArr.push(object3);

    this.content = contentArr[this.current];
}

ContentArray.prototype.navRight = function() {
    if ((this.current + 1) == this.length) {
        this.current = 0;
    }
    else {
        this.current = this.current + 1;
    }
    this.content = contentArr[this.current];
};

ContentArray.prototype.navLeft = function() {
    if ((this.current - 1) < 0) {
        this.current = this.length - 1;
    }
    else {
        this.current = this.current - 1;
    }
    this.content = contentArr[this.current];
};