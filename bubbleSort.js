
function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) 
            {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
          if (!isSwapped) 
            break;
    }
        return array;
}

console.log(bubbleSort([35, 23, 3, 500, 5, 254, 240, 450]));