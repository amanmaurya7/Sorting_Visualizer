export const quickSort = async (array, setArray, sleep) => {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    const sortedLeft = await quickSort(left, setArray, sleep);
    const sortedRight = await quickSort(right, setArray, sleep);
    const sortedArray = [...sortedLeft, pivot, ...sortedRight];
    await sleep(200); 
    setArray([...sortedArray]);
    return sortedArray;
};