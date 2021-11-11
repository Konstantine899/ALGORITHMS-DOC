console.log(`---Simple Search-----`);

/*list - принимаю структуру данных в которой произвожу поиск*/
/*search - то что ищу может не очень хорошее название*/

const simpleSearch = (list, search) => {
  let step = 1; /*Количесво шагов*/

  for (let i = 0; i < list.length; i++) {
    const guess = list[i]; // складываю текущий элемент итерации. эта переменная на самом деле здесь нафиг не нужна
    if (guess === search) {
      return [guess, i, step];
    } else {
      step++; /*Если не угадали мы переходим на следующий шаг т.е. увеличиваю счетчик шагов +1 тем самым выхожу из тела цикла*/
    }
  }
  /*Если мы прошли весь массив и не нашли наш элемент то возвращаем null*/
  return null;
};

const list = [...Array(100)].map((_, i) => i + 1);
console.log("list", list);
console.log(simpleSearch(list, 100)); // первый аргумент сам список, второй аргумент то что ищу
