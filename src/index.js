import scene from '../src/basic/Scene.js'
import camera from '../src/basic/Camera.js'
import renderer from './basic/Renderer.js';
import cube from './basic/Shapes/Cube.js';
import light from './basic/Light.js';

scene.add(cube);
scene.add(light);



camera.position.set(2,2,2);

camera.lookAt(cube.position);


setInterval(() =>{
    cube.rotation.y += .01;
    renderer.render(scene, camera); // take a picture of the scene

}, 1000/60)


resize.start(renderer);
