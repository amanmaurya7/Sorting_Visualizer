const selectionSort = async (array, setArray, swap,) => {
    const n = array.length;
    let tempArray = [...array];

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (tempArray[j] < tempArray[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            await swap(i, minIndex, tempArray);
        }
    }
};
export default selectionSort