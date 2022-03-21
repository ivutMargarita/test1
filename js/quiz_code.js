var Quest = new Array(10); //this sets up an array for all of the answers that are given

function populate() {
  // alert("function populate started");
  // this function gives each of the answers 0 points so if someone doesn't answer a question
  // the whole thing will continue to work
  for (var i = 0; i < 10; i++) {
    Quest[i] = 0;
  }
}

function total() {
  // alert("Pusk");
  // // alert("function total started");
  // // this function adds the number of points each answer is worth together
  myScore = 0;
  for (var i = 0; i < 10; i++) {
    myScore = myScore + Quest[i];
  }
  analyzer(myScore);
}

myContents = new Array();
myContents[0] = "Вы — Тони Старк, скрывающийся под маской Железного Человека. «Гений, миллиардер, плейбой и филантроп». Ну или хотя бы что-то одно из этого, да? Выдвигаете самые крутые идеи, слегка заносчивый интеллектуал и да, прекрасно выглядите. Противоположный пол от вас без ума, и вы — лидер практически в любой компании. Только нервы берегите — они у вас как раз не железные.";
myContents[1] = "Вы — Капитан Америка. Такой клевый, что аж бесите. Наверняка в детстве вас ставили в пример скрипящим зубами от зависти одноклассникам, вы были любимчиком у преподов в универе и сейчас вприпрыжку поднимаетесь по карьерной лестнице. Вы старомодно порядочны, доводите дела до конца, всегда находите нужные слова в любой ситуации и не бросаете в беде близких людей.";
myContents[2] = "Вы — Тор, бог грома и доблестный воин. С детства смелый и отважный. Сколько себя помните, вы слышите про то, какой у вас могучий интеллект, но но в 12 вам было интереснее всячески развлекаться, а к 30 годам, в общем, ничего не изменилось. Для вас многое значит семья, вы способны встать горой за любимого человека. Вы честный, открытый и упрямый, а еще способны удивлять в самый неожиданный момент.";
myContents[3] = "Вы — Соколиный глаз. Вы человек загадочный, как правило, замкнуты и молчаливы. Но при этом вы очень-очень надежный соратник и верный друг. Те, кому удалось войти к вам в доверие, знают, что в действительности за вашей маской тихони скрываются хладнокровие, выдержка и тонкий расчет. Гвозди бы делать из таких людей!Ееее бой!";
myContents[4] = "Вы — Черная вдова, шпионка Наталья Романова, красотка и перфекционистка. Именно вас просят решать самые хитроумные задачи, потому что если не вы, то кто. У вас превосходные актерские данные, и вы способны быстро приспособиться к любым условиям. А еще выбраться из любой передряги, надрать зад негодяям и при этом отлично выглядеть.";
myContents[5] = "Вы — доктор Брюс Бэннер, а иначе Халк. Нереально умный и столь же раздражительный. Вас можно или обожать, или бояться. Если вас разозлить, превращаетесь натурально в танк, сминающий все на своем пути. Многие восхищаются вашей искренностью, вы не сплетничаете за спиной, а способны сказать все в глаза. У вас нет десятков друзей. Зато есть несколько самых лучших, которые принимают вас таким, какой вы есть, и это круто!";

function analyzer(myScore) {
  // this function uses the total calculated score to figure out which personality type they are
  if (myScore > 34) {
    myContentsPtr = 5;
  } //6
  else {
    if (myScore > 27) {
      myContentsPtr = 4;
    } //5
    else {
      if (myScore > 20) {
        myContentsPtr = 3;
      } //4
      else {
        if (myScore > 13) {
          myContentsPtr = 2;
        } //3
        else {
          if (myScore > 6) {
            myContentsPtr = 1;
          } //2
          else {
            myContentsPtr = 0;
          } //1
        }
      }
    }
  }
  // alert(myContents[myContentsPtr]);
  myDisplay(myContents[myContentsPtr]);
}

function myDisplay(myContents) {
  //This function will open a new window and show the results calculated
  // alert(myContents); **use alert for testing only**.
  document.getElementById("result").innerHTML = myContents;
}

function saver(q, points) {
  // this function puts the points that each answer is worth into the array
  q = q - 1;
  Quest[q] = points;
}
