//https://youtu.be/ZxC6crtmMDU
//Gusmerotti Matias Oscar
//TP1 pmiw

let foto;

function preload(){
   foto = loadImage("./data/img.png");
}

function setup() {
  createCanvas(800,400);
  image(foto,0,0);
  frameRate(1);
  estado = 1;
  contador = 0;
}

function draw() {
 print("estado="+estado);
 BorrarFondo();
 if ( estado == 1) {
   image (foto,0,0);
   DibujarImagen();
   contador++;
    if ( contador>=3 ) {
      estado++;
      contador = 0;
    }
  } else if ( estado == 2 ) {
    image( foto, 0, 0, 1, 1);
    DibujarImagenColor();
 image(foto,0,0);
 }
}
