function botonesEleccion1(){
  fill(255);
  rect(100,400,100,50);
  rect(425,400,100,50);
  fill(255,0,0);
  text('Opción A',115,433);
  text('Opción B',440,433);
  if(mouseX>100 && mouseX<100+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    estado=estado+1  
    elecSound.play();
 }
  if(mouseX>425 && mouseX<425+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    if(estado===3){
      estado=estado+14;
      elecSound.play();
 }
  if(mouseX>425 && mouseX<425+100 && mouseY>400 && mouseY<400+50 && mouseIsPressed===true){
    estado=estado+3  
    elecSound.play();
  }
 }
}

function botonPrincipal(){
  if(botonSiguiente === true){
    fill(255);
    rect(265,400,100,50);
    fill(0);
    text('Siguiente',280,433);
 }
}

function botonReiniciar(){
  fill(250,0,0);
  rect(10,50,100,50);
  fill(255);
  text('Inicio',27,83);
  if(mouseX>10 && mouseX<10+100 && mouseY>50 && mouseY<50+50 && mouseIsPressed === true){
    estado=1;
    botonSiguiente=true;
    finalSound.play();
  }
}

function botonCreditos(){
  fill(255);
  rect(265,50,100,50);
  fill(0);
  text('+Info',290,83);
  if(mouseX>265 && mouseX<265+100 && mouseY>50 && mouseY<50+50 && mouseIsPressed === true){
    estado=26;
    }
}

function mousePressed(){
  if(mouseX>265 && mouseX<265+100 && mouseY>400 && mouseY<400+50 && botonSiguiente===true){ 
    estado++;
  }
}
