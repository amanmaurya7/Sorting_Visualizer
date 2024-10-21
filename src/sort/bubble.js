const bubbleSort = async (array, setArray, swap) => {
    const n = array.length;
    let tempArray = [...array];
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (tempArray[j] > tempArray[j + 1]) {
                let a=j;
                let b=j+1;
                await swap(a, b, tempArray);
            }
        }
    }
};
export default bubbleSort