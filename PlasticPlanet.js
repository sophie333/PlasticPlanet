window.onload = function() {
    ajaxSetup();
    navigation();
    toggleInfo();
}

function ajaxSetup() {
    //Initialise a new XMLHttpRequest object
    var ajaxObj = new XMLHttpRequest();

    //Define the event handler for the object
    ajaxObj.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200) {
            var elem = document.getElementsByClassName("content-div");
            elem.innerHTML = this.responseText;
        }
    };
}

function navigation() {
    var objArray = new ContentArray();
    sendRequest(objArray);

    $('#nav-left').click(function() {
        objArray.navLeft();
        sendRequest(objArray);
    });

    $('#nav-right').click(function() {
        objArray.navRight();
        sendRequest(objArray);
    });
}

function sendRequest(objArray) {
    let url1 = "http://localhost:9000/" + objArray.current;
    document.getElementById("infoBoxText").innerHTML = "If you want to find out more about this topic, you will be transferred to the source site by clicking ";
    var a = document.createElement('a');
    var linkText = document.createTextNode("here.");
    a.appendChild(linkText);
    a.href = objArray.content.link;
    document.getElementById("infoBoxText").appendChild(a);

    $.ajax({
        type: 'GET',
        data: {'title': objArray.content.title, 'cont': objArray.content.text},
        url: url1,
        success: function(result) {
            $('.content-div').html(result);
        }
    });
    loadEarthModel(objArray.content.model);
}

function toggleInfo() {
    $('#openBtn').click(function() {
        $('.infoBox').css("display", "block");
    });

    $('.closeBtn').click(function() {
        $('.infoBox').css("display", "none");
    });
}

function loadEarthModel(modelString) {
    //RENDERER
    var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true, alpha: true});
    var w = 300;
    var h = 300;
    renderer.setSize(w , h);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    //CAMERA
    var camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 3000);

    //SCENE
    var scene = new THREE.Scene();

    //LIGHTS
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    var light1 = new THREE.PointLight(0xffffff, 1, 18);
    light1.position.set(-3, 6, -3);
    light1.castShadow = true;
    light1.shadow.camera.near = 0.1;
    light1.shadow.camera.far = 25;
    scene.add(light);
    scene.add(light1);

    //OBJECT
    var cloudModel;
    var worldModel;
    var modelName = modelString;

    loadObject(modelName, 'models/justclouds.glb');

    function loadObject(modelName, model2Name) {
        var loader = new THREE.GLTFLoader();
        loader.load(
            modelName,
            function ( gltf ) {

                scene.add(gltf.scene);

                var scale = 5.6;
                gltf.scene;
                gltf.scenes;
                gltf.camera;
                gltf.asset;

                initObj(gltf);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '%loaded' );
            },
            function (error) {
                console.log('An error happened');
            }
        );
        loader.load(
            model2Name,
            function ( gltf ) {

                scene.add(gltf.scene);

                var scale = 5.6;
                gltf.scene;
                gltf.scenes;
                gltf.camera;
                gltf.asset;

                initObj2(gltf);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '%loaded' );
            },
            function (error) {
                console.log('An error happened');
            }
        );
    }

    //TRANSLATION
    function initObj(model) {
        model.scene.position.set(0, -0.4, -5.5);
        worldModel = model;
    }

    function initObj2(model) {
        model.scene.position.set(0, -0.4, -5.5);
        cloudModel = model;
    }

    //RENDER LOOP
    requestAnimationFrame(render);

    function render() {
        // Rotate models
        if (worldModel) {
            worldModel.scene.rotation.y += 0.003;
        }
        if (cloudModel) {
            cloudModel.scene.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
}