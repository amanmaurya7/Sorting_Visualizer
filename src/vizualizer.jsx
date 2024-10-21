import { useEffect, useState } from "react"
import generateRandomArray from "./random";
import Bottom from "./components/bottom";
import { createContext } from 'react';
export const MyContext = createContext("");
export default function Vz() {
    const [size, setSize] = useState(5)
    const [min, setMin] = useState(20)
    const [max, setMax] = useState(100)
    const [array, setArray] = useState([]);
    useEffect(() => {
        setArray(generateRandomArray(size, Math.floor((min / 10) * 10), max))
    }, [size, min, max])
    return (
        <>
            <div className="flex flex-col space-y-10">
                <MyContext.Provider value={{ size, setSize, min, setMin, max, setMax, setArray, array}}>
                    <div className="flex justify-center items-end space-x-6">
                        {
                            array.map((elem, index) => <div key={index} className={`bg-blue-400 flex justify-center items-center text-[20px]`}     
                            style={{
                                height: `${elem * 2}px`, width: `${600 / size}px`,
                                color: 'black',
                            }} >{elem}</div>)
                        }
                    </div>
                    <Bottom />
                </MyContext.Provider>
            </div>
        </>
    )
}