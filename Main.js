var polyhedra = {
    "tetrahedron1": new Polyhedron(tetrahedron1Faces()),
    "tetrahedron2": new Polyhedron(tetrahedron2Faces()),
    "cube": new Polyhedron(cubeFaces())
};
var sphere = 0;
var cut = 0;
var choice = "cube";
polyhedra[choice].render(scene, sphere, cut);
doRender();
function changeColor(box) {
    for (var i in polyhedra)
        polyhedra[i].setWhite(box.checked);
    console.log("Change color");
    doRender();
}
function hideAll() {
    for (var i in polyhedra)
        polyhedra[i].hide();
}
function renderPoly(which) {
    hideAll();
    choice = which.value;
    slide();
}
function slide() {
    sphere = 0.01 * Number(document.getElementById("rng").value);
    cut = Number(document.getElementById("cut").value);
    polyhedra[choice].render(scene, sphere, cut);
    doRender();
}
//# sourceMappingURL=Main.js.map