const insertionSort = async (array, setArray, swap) => {
    const n = array.length;
    let tempArray = [...array];

    for (let i = 1; i < n; i++) {
        let currentElement = tempArray[i];
        let j = i - 1;

        while (j >= 0 && tempArray[j] > currentElement) {
            await swap(j + 1, j, tempArray);
            j--;
        }

        tempArray[j + 1] = currentElement;
    }
};
export default insertionSort