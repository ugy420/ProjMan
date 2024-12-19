import Button from './Button';

export default function Fallback({ onFillForm }){
    return( 
    <div className="flex flex-col items-center m-auto">
        <img src="logo.png" className="size-20"/>
        <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
        <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
        <Button 
            value="Create a new project"
            className="text-stone-400 bg-stone-900 px-4 py-2 text-xs md:text-base rounded-md hover:text-stone-100"
            onClick={onFillForm}>
        </Button>
    </div>
    );
}