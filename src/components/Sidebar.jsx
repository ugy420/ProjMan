import Button from './Button.jsx';

export default function Sidebar({onFillForm, data}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="text-slate-50 mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <Button value="+ Add Project" onClick={onFillForm} className="text-stone-400 bg-stone-700 px-4 py-2 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100" />
            <ul className="mt-8">
                {data.map((project => {
                        return <li key={project.id}>
                            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone=200 hover:bg-stone-800">{project.title}</button>
                        </li>
                }))
                }
            </ul>
        </aside>
    )
}