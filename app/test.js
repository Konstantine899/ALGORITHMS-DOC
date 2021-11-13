const binarySearch = (list, element) => {
  let step = 1; //шаг
  let startPointer = 0; // стартовый указатель
  let endPointer = list.length - 1; // так как массивы нумеруются с 0 то пишу -1 что бы не выйти за прел=делы массива
  let middlePoint = null;

  while (startPointer <= endPointer) {
    middlePoint = Math.round((startPointer + endPointer) / 2); // Если значение не найдено в зависимости от условия делю массив пополам
    let resultIteration = list[middlePoint]; // на каждой итерации помещаю новый массив

    if (resultIteration === element) return { middlePoint, step }; // Если элемент найден вывожу его
    /*В Следующем условии после нахождения элемента в массиве происходит следующая итерация
     * на которой и срабатывает данное условие. Если результат итераци больше самого элемента
     * значит отбрасываются все значения которые находятся правее искомого элемента. Так же указываю -1
     * что бы не выйти за пределы массива
     * */
    if (resultIteration > element) endPointer = middlePoint - 1;
    /* В следующем условии resultIteration < element пока элемент не найдет все что находиться от середины массива
     * слева будет отброшено*/
    if (resultIteration < element) startPointer = middlePoint + 1;

    step++;
  }
  return null;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.table(binarySearch(list, 1));
