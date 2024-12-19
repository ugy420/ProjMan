export default function Input({label, textArea, ...props}) {
    let cls = "bg-stone-200 border-b-2 focus:outline-none focus:border-b-black border-stone-300";
    return <>
        <label>{label}</label>
        {textArea ? <textarea className={cls} {...props}/> : <input className={cls}{...props}/>}
    </>
}