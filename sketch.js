let chair;


function preload(){
  chair= loadModel('assets/Chair.obj')
}


function setup() {

  createARCanvas();
//  createCanvas(windowWidth, windowHeight, WEBGL)
}


function draw() {
normalMaterial()
model(chair)
translate(0,0,10)

}
