const light = new THREE.AmbientLight(0x40404);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);

directionalLight.position.set(-10,10,10)

light.add(directionalLight);

export default light;