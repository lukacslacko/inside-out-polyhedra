var cube = new Cube();
var sphere = 0;
var cut = 0;
cube.render(scene, sphere, cut);
doRender();

function slide() {
    sphere = 0.01 * Number(document.getElementById("rng").value);
    cut = Number(document.getElementById("cut").value);
    cube.render(scene, sphere, cut);
    doRender();
}