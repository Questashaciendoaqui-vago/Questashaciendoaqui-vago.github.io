function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomButton(btn){
  var btnId =btn.id;
  var luckyButton = numeroAleatorio(1,4);
  var botones = document.getElementsByClassName("boton");

  const iconCasa = "<i  class='material-icons'>home</i>";
  const iconCamara = "<i  class='material-icons'>camera_alt</i>";
  const iconPerfil = "<i  class='material-icons'>account_circle</i>";
  const iconBrocha = "<i  class='material-icons'>brush</i>";

  if (btnId == luckyButton) {
    for (var i = 1; i <= 4; i++) {
      console.log(document.getElementById(i));
      anotherRandomNumber = numeroAleatorio(1,4);;
      document.getElementById(i).className = document.getElementById(anotherRandomNumber).className;
      document.getElementById(i).innerHTML = iconCasa ;

      //document.getElementById(i).href = document.getElementById(anotherRandomNumber).href;
    }

    /*
    for (item in botones) {
      document.getElementById("prueba").innerHTML = item.id;
      if (btn. == luckyButton) {
        luckyNumber=numeroAleatorio(1,4);
        btn.className =
        //document.getElementById("myDIV").className = "newClassName";
      }
    }
    */
  }else {
    switch (btnId) {
      case '1':
        event.preventDefault(); //esto cancela el comportamiento del click
        setTimeout(()=> location.href="https://questashaciendoaqui-vago.github.io/",500);
        break;
      case '2':
        event.preventDefault(); //esto cancela el comportamiento del click
        setTimeout(()=> location.href="https://questashaciendoaqui-vago.github.io/fotos",500);
        break;
      case '3':
        event.preventDefault(); //esto cancela el comportamiento del click
        setTimeout(()=> location.href="https://questashaciendoaqui-vago.github.io/about",500);
        break;
      case '4':
        event.preventDefault(); //esto cancela el comportamiento del click
        setTimeout(()=> location.href="https://questashaciendoaqui-vago.github.io/galeria",500);
        break;
      default:
        setTimeout(()=> location.href="https://www.google.com",500);
        break;
    }
  }
}
