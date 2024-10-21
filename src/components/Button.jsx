export default function Button({
    text,
    style,
    onClick,
    ...props
}){
    return (
        <>
            <button className={`bg-blue-600 w-[100px] h-[40px] text-white`} {...props} onClick={onClick}>
                {text}
            </button>
        </>
    )
}