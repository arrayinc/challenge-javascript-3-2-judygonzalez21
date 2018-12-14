# CHALLENGE 2

<!-- While we’re on the subject of silly songs, another old standby is “This Old Man,” for which the first verse is:

> This old man, he played 1.
> He played knick-knack on my thumb. With a knick-knack, paddy-whack, Give your dog a bone.
> This old man came rolling home.

Each subsequent verse is the same, except for the number and the rhyming word at the end of the second line, which get replaced as follows:
2—shoe 3—knee 4—door
5—hive 6—sticks 7—heaven
8—pate 9—spine 10—shin
Write a program to display all 10 verses of this song. -->


const OLDMAN = "This old man, he played ";
let  PLAYED = "He played knick-knack on my ";
const WITHKNICKKNACK = "With a knick-knack, paddy-whack, Give your dog a bone."
const CAMEROLLINGHOME = " This old man came rolling home."

function oldManSong(n){
  let song = "";
  for(i = 1; i < 10; i++){

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

    song += OLDMAN  + n + ". " + PLAYED + word + ". "

  } return console.log(song)
}
oldManSong(6);                            
