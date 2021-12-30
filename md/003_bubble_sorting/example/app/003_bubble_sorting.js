console.log(`Bubble sorting`);

//меняю элементы местами
const swap = (i, arr) => {
  //arr[i] - левый итерируемый элемент
  //arr[i + 1] - правый итерируемый элемент т.е. i - индекс итерируемого элемента + 1
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i]; // временной переменной переменной присваиваю итерируемый, т.е. левый элемент массива
    arr[i] = arr[i + 1]; // присваиваю значение правого элемента левому
    arr[i + 1] = temp; // значение временной переменной присваиваю правому элементу массива
  }
};

const bubbleSorting = (array) => {
  const arr = [...array]; // Для того что бы не мутировать входящий массив копирую его
  let step = 0; //количество шагов
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      swap(i, arr);
      step++; // увеличиваю шаг
    }
  }
  console.log("Steps", step);
  return arr;
};
const data = [...Array(100)].map((_, i, arr) => {
  return arr.length - i;
});
console.log(bubbleSorting(data));
