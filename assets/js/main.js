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
    }
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
    }
  }
}

function randomLink(red){
  linkId = red.id;
  var luckyNumber = numeroAleatorio(1,100);
  if (luckyNumber <= 10) {
    window.open("https://es.wikipedia.org/wiki/Castor");
  }else if(luckyNumber <= 20){
    window.open("https://www.wikihow.com/Prepare-a-Pop-Tart");
  }else if(luckyNumber <= 30){
    window.open("https://www.youtube.com/watch?v=N1wSUfj2gOs");
  }else if(luckyNumber <= 40){
    window.open("https://open.spotify.com/show/0oLxdQ9NdBpildzk6DMYeH?si=yxPNzwxARi27ez8-KeUJLQ");
  }else if(luckyNumber <= 50){
    window.open("https://m.facebook.com/mco.vivo/videos/976860532810405/?refsrc=https%3A%2F%2Fm.facebook.com%2Fstory.php&_rdr");
  }else if(luckyNumber <= 60){
    window.open("https://www.facebook.com/716543878681694/posts/1342364309432978/");
  }else {
    if (linkId == "instagram") {
      window.open("https://instagram.com/dabura_makeup");
    }else if (linkId == "twitter") {
      window.open("https://no_tengo_twiter.com/");
    }else if(linkId == "youtube"){
      window.open("https://www.youtube.com/channel/UCn3Ec_LS80tNeDvrKohwsXg");
    }
  }
}

function randomSong(){
  var luckyNumber = numeroAleatorio(1,50);
  if (luckyNumber <= 10) {
    window.open("https://www.youtube.com/watch?v=R8P5KXgHiSU");
  }else if(luckyNumber <= 20){
    window.open("https://www.youtube.com/watch?v=uJ_1HMAGb4k");
  }else if(luckyNumber <= 30){
    window.open("https://www.youtube.com/watch?v=iArXv64tCJA");
  }else if(luckyNumber <= 40){
    window.open("https://www.youtube.com/watch?v=826mxiKjoP0");
  }else if(luckyNumber <= 50){
    window.open("https://www.youtube.com/watch?v=jJPMnTXl63E");
  }else {
    window.open("https://www.youtube.com/watch?v=N1wSUfj2gOs");
  }
}
