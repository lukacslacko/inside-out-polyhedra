var tetrahedron1 = new Polyhedron(tetrahedron1Faces());
var cube = new Polyhedron(cubeFaces());
var sphere = 0;
var cut = 0;
var choice = "cube";
choicePoly().render(scene, sphere, cut);
doRender();

function choicePoly() : any {
    if (choice == "tetrahedron1") return tetrahedron1;
    return cube;
}

function hideAll() : void {
    cube.hide();
    tetrahedron1.hide();
}

function renderPoly(which : any) : void {
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