var tetrahedron1 = new Polyhedron(tetrahedron1Faces());
var cube = new Polyhedron(cubeFaces());
var sphere = 0;
var cut = 0;
var choice = "cube";
choicePoly().render(scene, sphere, cut);
doRender();
function choicePoly() {
    if (choice == "tetrahedron1")
        return tetrahedron1;
    return cube;
}
function hideAll() {
    cube.hide();
    tetrahedron1.hide();
}
function renderPoly(which) {
    hideAll();
    choice = which.value;
    slide();
}
function slide() {
    sphere = 0.01 * Number(document.getElementById("rng").value);
    cut = Number(document.getElementById("cut").value);
    choicePoly().render(scene, sphere, cut);
    doRender();
}
//# sourceMappingURL=Main.js.map