export const mergeSort = async (array, setArray, merge, sleep) => {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    const sortedLeft = await mergeSort(left, setArray, merge, sleep);
    const sortedRight = await mergeSort(right, setArray, merge, sleep);
    const mergedArray = await merge(sortedLeft, sortedRight, setArray, sleep);

    return mergedArray;
};
export const merge = async (left, right, setArray, sleep) => {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
            mergedArray.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        mergedArray.push(left[i]);
        i++;
    }
    while (j < right.length) {
        mergedArray.push(right[j]);
        j++;
    }
    await sleep(400); // Optional: Add delay for visualization
    setArray([...mergedArray]);
    return mergedArray;
};