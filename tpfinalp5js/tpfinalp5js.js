function preload() {
  for (let i=1; i<26; i++) {
    fondos[i] = loadImage("data/fondo"+i+".jpg");
 }
  txt = loadStrings("data/fases.txt");   
  soundFormats('mp3');
  elecSound = loadSound('data/eleccion.mp3');
}
function setup() {
  createCanvas(640,480);
  background(0);
  textSize(17);
}

function draw() {
  fill(0);
  pantallas();
  stroke(0);
  strokeWeight(2);
  botonPrincipal();
  if(estado===1){
    botonCreditos();  
 }
  if(estado === 3 || estado === 8 || estado === 14){
    botonesEleccion1();
    botonSiguiente=false;
 }
  if(estado === 2 || estado === 4 || estado === 5 || estado === 6 || estado === 7 || estado === 9 || estado === 11 || estado === 12 || estado === 13 || estado === 15 || estado === 17 || estado === 18 || estado === 20 || estado === 21 || estado === 22 || estado === 23 || estado === 24){
   botonSiguiente=true;
 }
  if(estado === 10 || estado === 16 || estado === 19 || estado === 25){
   botonSiguiente=false;
   botonReiniciar();
 }
}
