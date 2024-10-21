import Button from "./Button";
import { useContext } from "react";
import { MyContext } from "../vizualizer";
import bubbleSort from "../sort/bubble";
import selectionSort from "../sort/selectiom";
import insertionSort from "../sort/insertion";
import { merge, mergeSort } from "../sort/merge";
import { quickSort } from "../sort/quick";
export default function Bottom() {
    const { size, setSize, min, setMin, max, setMax, setArray, array} = useContext(MyContext)
    if (size == 21) {
        setArray([])
    }
    const swap = async (index1, index2, arr) => {
        await sleep(200); // Optional: Add delay for visualization
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        setArray([...arr]);
    };
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const handleBubbleSort = async () => {
        await bubbleSort(array, setArray, swap);
    };
    const handleSelectionSort = async () => {
        await selectionSort(array, setArray, swap);
    };
    const handleInsertionSort = async () => {
        await insertionSort(array, setArray, swap);
    };
    const handleMergeSort = async () => {
        await mergeSort(array, setArray, merge, sleep);
    };
    const handleQuickSort = async () => {
        await quickSort(array, setArray, sleep);
    };
    console.log(min)
    return (
        <>
            <div className="flex space-x-9 justify-center flex-wrap">
                <div className="flex flex-col">
                    <input type="range" min={5} max={20} value={size} onChange={(e) => setSize(e.target.value)}></input>
                    <label>Change size of array</label>
                </div>
                <div className="flex flex-col">
                    <div className="flex space-x-7">
                        <div className="flex flex-col">
                        <input type="number" className="w-[60px] flex justify-center h-[20px]" min={5} value={min} onChange={(e) => setMin(e.target.value)}></input>
                            <label>Min</label>
                        </div>
                        <div className="flex flex-col">
                            <input type="number" className="w-[60px] flex justify-center h-[20px]" value={max} onChange={(e) => setMax(e.target.value)}></input>
                            <label>Max</label>
                        </div>
                    </div>
                    <label>Change range</label>
                </div>
                <Button text={'Bubble sort'} onClick={handleBubbleSort} />
                <Button text={'Selection sort'} onClick={handleSelectionSort} />
                <Button text={'Insertion sort'} onClick={handleInsertionSort} />
                <Button text={'Merge sort'} onClick={handleMergeSort} />
                <Button text={'Quick sort'} onClick={handleQuickSort} />
            </div>
        </>
    )
}
