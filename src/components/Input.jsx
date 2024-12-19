import { forwardRef } from "react";

const Input = forwardRef(function Input({label, textArea, ...props}, ref) {
    let cls = "bg-stone-200 border-b-2 focus:outline-none focus:border-b-black border-stone-300";
    return <>
        <label>{label}</label>
        {textArea ? (
            <textarea ref={ref} className={cls} {...props}/>
        ) : ( 
        <input ref={ref} className={cls}{...props}/>
    )}
    </>
});

export default Input;