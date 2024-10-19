function pantallas() {
  fill(255, 255, 0);
  strokeWeight(4);
  stroke(0);
  let fondo = fondos[estado];
  if (estado === 1) {
    x = 30; y = 300;
    textIndices = [0, 1, 2];
  } else if (estado === 2) {
    x = 30; y = 30;
    textIndices = [3, 4];
  } else if (estado === 3) {
    x = 30; y = 350;
    textIndices = [5];
  } else if (estado === 4) {
    x = 30; y = 330;
    textIndices = [6, 7, 8];
  } else if (estado === 5) {
    x = 30; y = 320;
    textIndices = [6, 10];
  } else if (estado === 6) {
    x = 30; y = 30;
    textIndices = [11];
  } else if (estado === 7) {
    x = 30; y = 340;
    textIndices = [12];
  } else if (estado === 8) {
    x = 30; y = 360;
    textIndices = [13];
  } else if (estado === 9) {
    x = 30; y = 30;
    textIndices = [14, 15];
  } else if (estado === 10) {
    x = 30; y = 400;
    textIndices = [16];
  } else if (estado === 11) {
    x = 30; y = 300;
    textIndices = [17, 18, 19];
  } else if (estado === 12) {
    x = 30; y= 360;
    textIndices = [20, 21];
  } else if (estado === 13) {
    x= 30; y = 320;
    textIndices = [22, 23, 24];
  } else if (estado === 14) {
    x= 30; y = 380;
    textIndices = [25];
  } else if (estado === 15) {
    x= 30; y = 340;
    textIndices = [26];
  } else if (estado === 16) {
    x= 30; y = 340;
    textIndices = [26, 27, 28, 29, 30, 31];
  } else if (estado === 17) {
    x= 30; y = 340;
    textIndices = [32, 33, 34];
  }else if (estado === 18) {
    x= 30; y = 320;
    textIndices = [35, 36];
  }else if (estado === 19) {
    x= 30; y = 360;
    textIndices = [37, 38, 39, 40];
  }else if (estado === 20) {
    x= 30; y = 340;
    textIndices = [41, 42];
  }else if (estado === 21) {
    x= 30; y = 30;
    textIndices = [43, 44];
  }else if (estado === 22) {
    x= 30; y = 40;
    textIndices = [45, 46];
  }else if (estado === 23) {
    x = 30; y = 340;
    textIndices = [47, 48];
  }else if (estado === 24) {
    x= 30 ; y = 340;
    textIndices = [49, 50];
  }else if (estado === 25) {
    x = 30; y = 440;
    textIndices = [51, 52];
  }else if (estado === 26) {
    x= 30; y = 300;
    textIndices = [53, 54, 55, 56];
  }
  image(fondo, 0, 0);
  for (let i = 0; i < textIndices.length; i++) {
    text(txt[textIndices[i]], x, y + i * 20);
  }
}
