export default function Container({
    children
}){
    return (
        <>
            <div className="bg-whitesmoke w-screen h-[100vh] flex justify-center items-center">
            <div className="bg-gray-100 w-[90vw]  h-[90vh] flex justify-center items-center ">
                {children}
                </div>
            </div>
        </>
    )
}