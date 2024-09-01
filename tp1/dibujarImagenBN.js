function DibujarImagen(){
  for ( i=width; i>0;i-=40){
    for ( j=height; j>0;j-=40){
      if (esPar(i+j)){
        fill(0);
      } else {
          fill(255);
        }   
    rect(width/2, 0,i,j);
    }
  }  
  for ( k=width; k>0;k-=40){
    for ( l=height; l>0;l-=40){
      if (esPar(k+l)){
        fill(0);
      } else {
        fill(255);
        }    
    ellipse(k+20,l-20,17,17);
    image(foto,0,0);
    }
  }  
}
