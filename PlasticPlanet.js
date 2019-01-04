window.onload = function() {
    //Initialise a new XMLHttpRequest object
    var ajaxObj = new XMLHttpRequest();

    //Define the event handler for the object
    ajaxObj.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200) {
            var elem = document.getElementsByClassName("content-div");
            elem.innerHTML = this.responseText;
        }
    };

    var objArray = new ContentArray();
    //document.getElementById("heading").innerHTML = objArray.content.title;
    //document.getElementById("content").innerHTML = objArray.content.text;
    //loadEarthModel('models/world3.glb');
/*
    $('#nav-left').click(function() {
        objArray.navLeft();
        console.log(JSON.stringify({title: objArray.content.title, cont: objArray.content.text}));
        let url = "http://localhost:9000/" + objArray.current;
        console.log(url);
        $.get(url, function(data) {
            $('.content-div').html(data);
        });
        ajaxObj.send(JSON.stringify({title: objArray.content.title, cont: objArray.content.text}));
        //document.getElementById("heading").innerHTML = objArray.content.title;
        //document.getElementById("content").innerHTML = objArray.content.text;
        //loadEarthModel(objArray.model);
    });*/
    $('#nav-left').click(function() {
        objArray.navLeft();
        let url1 = "http://localhost:9000/" + objArray.current;
/*
        var data = {title: objArray.content.title, cont: objArray.content.text};
        data.title = "title";
        data.message = "hi";
*/
        $.ajax({
            type: 'GET',
            data: {'title': objArray.content.title, 'cont': objArray.content.text},//(JSON.stringify({title: objArray.content.title, cont: objArray.content.text})),//data: $('.content-div').html, //JSON.stringify()
            url: url1,
            success: function(result) {
                $('.content-div').html(result);
            }
        });
        //document.getElementById("heading").innerHTML = objArray.content.title;
        //document.getElementById("content").innerHTML = objArray.content.text;
        //loadEarthModel(objArray.model);
    });
/*
    $('#nav-right').click(function() {
        objArray.navRight();
        document.getElementById("heading").innerHTML = objArray.content.title;
        document.getElementById("content").innerHTML = objArray.content.text;
        loadEarthModel(objArray.model);
    });*/
}

function loadEarthModel(modelString) {
    //RENDERER
    var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true, alpha: true});

    var container = document.getElementById('myCanvas');
    var w = 300;
    var h = 300;
    renderer.setSize(w , h);

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    //renderer.setSize(window.innerWidth, window.innerHeight);

    //CAMERA
    var camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 3000);

    //SCENE
    var scene = new THREE.Scene();

    //LIGHTS
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    var light1 = new THREE.PointLight(0xffffff, 1, 18);
    light1.position.set(-3, 6, -3);
    light1.castShadow = true;
    light1.shadow.camera.near = 0.1;
    light1.shadow.camera.far = 25;
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

    function initObj(model) {
        // Translate
        model.scene.position.set(0, -0.4, -5.5);
        worldModel = model;
    }

    function initObj2(model) {
        // Translate
        model.scene.position.set(0, -0.4, -5.5);
        cloudModel = model;
    }

    //RENDER LOOP
    requestAnimationFrame(render);

    function render() {
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