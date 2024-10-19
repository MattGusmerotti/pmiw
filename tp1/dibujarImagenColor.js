function DibujarImagenColor(){
  for ( i=width; i>0;i-=40){
      var r1 = random(0,255); 
      var r2 = random(0,255);
      var r3 = random(0,255);
      var c1 = color(r1,r2,r3);
      var c2 = color(r3,r2,r1);
    for ( j=height; j>0;j-=40){
      if (esPar(i+j)){
        fill(c1);
      } else {
          fill(c2);
        }   
    rect(width/2, 0,i,j);
    }
  }  
  for ( k=width; k>0;k-=40){
      var rr1 = random(0,255); 
      var rr2 = random(0,255);
      var rr3 = random(0,255);
      var cc1 = color(rr1,rr2,rr3);
      var cc2 = color(rr3,rr2,rr1);
    for ( l=height; l>0;l-=40){
      if (esPar(k+l)){
        fill(cc1);
      } else {
          fill(cc2);
        }    
    ellipse(k+20,l-20,17,17);
     image(foto,0,0);
    }
  }
}
