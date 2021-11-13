console.log(`-----Binary Search-----`);

const binarySearch = (list, search) => {
  let step = 1; /*Количество шагов*/
  let markerStart = 0; // принимает индек массива
  let markerEnd = list.length - 1; // маркер, указатель середины
  let markerMiddle = null; // Маркер, указатель середины

  while (markerStart <= markerEnd) {
    markerMiddle = Math.round((markerStart + markerEnd) / 2); // Получаю маркер, указатель середины

    if (list[markerMiddle] === search) {
      return { markerMiddle, step };
    }

    // Если условие срабатывает то все что правее markerMiddle откидываю
    if (list[markerMiddle] > search) {
      markerEnd = markerMiddle - 1;
    }

    // Если условие срабатывает то все что левее markerMiddle откидываю
    if (list[markerMiddle] < search) {
      markerStart = markerMiddle + 1;
    }
    step++; // Выхожу из тела цикла
  }
  return null; // Если мы прошлись по массиву и ничего не нашли то возвращаю
};

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const list = [...Array(1000000)].map((_, i) => i + 1);

console.log(`Количество шагов и позиция элемента в массиве`);
console.table(binarySearch(list, 800000));
