console.log("Witaj, za chwilę wejdziesz do mojej głowy i będziesz musiał zgadnąć o jakiej myślę liczbie :D");
const ask=require("readline-sync");

var gramy=true;
while (gramy){
  var numer=ask.question("Jaka liczbe mam na mysli? ").trim();
  const liczba=Math.round(Math.random()*10);
  while (numer!=liczba) {
    if (isNaN(numer) || numer == "") 
      console.log("ale z Ciebie trampiszczał"); 
    else 
      console.log(numer>liczba ? "mniej": "wiecej");
    numer=ask.question("> ").trim();
  }
  console.log("przechytrzyle mnie!");
  const odpowiedz=ask.question("Chcesz grac dalej? <tak, nie>: ").trim().toLowerCase();
  if (odpowiedz=="nie")
    gramy=false
  else if(odpowiedz=="tak") 
    gramy= true 
  else
    console.log("Jesteś waflem")
}
