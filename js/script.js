"use strict";

const body = document.querySelector("body"),
  adv = document.querySelector(".adv"),
  books = document.querySelectorAll(".book"),
  book3 = books[4].querySelector("a"),
  book2ul = books[0].querySelectorAll("li"),
  book5ul = books[5].querySelectorAll("li"),
  book6ul = books[2].querySelectorAll("li"),
  newElem = document.createElement("li");

console.log(books);

// console.log(book3);

book3.innerHTML = "Книга 3. this и Прототипы Объектов";

// console.log(book2ul);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"; // Смена фонового изображения

adv.remove(); //Удаление рекламы
// console.log(body);

books[0].before(books[1]);

books[0].after(books[4]);

books[4].after(books[3]);

books[5].after(books[2]);

book2ul[1].after(book2ul[3]);
book2ul[3].after(book2ul[6]);
book2ul[6].after(book2ul[8]);
book2ul[9].after(book2ul[2]);

// console.log(book5ul);

book5ul[2].before(book5ul[9]);
book5ul[9].after(book5ul[3]);
book5ul[2].before(book5ul[4]);
book5ul[5].before(book5ul[6]);
book5ul[7].after(book5ul[5]);

console.log(book6ul);

newElem.innerHTML = "Глава 8: За пределами ES6";

book6ul[8].after(newElem);

// book6ul.before;
