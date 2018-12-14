// *** YOUR ANSWER BELOW ***
const OLDMAN = "This old man, he played ";
let  PLAYED = "He played knick-knack on my ";
const WITHKNICKKNACK = "With a knick-knack, paddy-whack, Give your dog a bone."
const CAMEROLLINGHOME = " This old man came rolling home."

function oldManSong(n){
  let song = "";
  for(let i = n; i < 10; i++){
    n++;
    switch(n){
      case 1: word = "thumb"; break;
      case 2: word = "shoe"; break;
      case 3: word = "knee"; break;
      case 4: word = "door"; break;
      case 5: word = "hive"; break;
      case 6: word = "sticks"; break;
      case 7: word = "heaven"; break;
      case 8: word = "pate"; break;
      case 9: word = "spine"; break;
      case 10: word = "shin"; break;
      default: word = "Try Again!"; break;
    }

    song += OLDMAN  + n + ". " + PLAYED + word + ". " + WITHKNICKKNACK + "\n" + CAMEROLLINGHOME + "\n"

  } return console.log(song)
}
oldManSong(0);
