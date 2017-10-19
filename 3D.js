var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: cnv });
camera.position.z = 5;
controls = new THREE.TrackballControls(camera, document.getElementById("cnv"));
controls.rotateSpeed = 5.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = false;
controls.staticMoving = true;
controls.dynamicDampingFactor = 0.3;
// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0x505050);
scene.add(ambientLight);
// add spotlight for the shadows
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-30, 60, 60);
spotLight.castShadow = true;
scene.add(spotLight);
function doRender() {
    renderer.render(scene, camera);
}
var animId;
function animate() {
    animId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}
function canvasDrag() {
    animate();
}
function canvasStopDrag() {
    cancelAnimationFrame(animId);
}
function canvasWheel() {
    controls.update();
    renderer.render(scene, camera);
}
//# sourceMappingURL=3D.js.map