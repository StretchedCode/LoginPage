
import { useState } from "react"

interface CrumbProps {
    text: string,
    status: "success" | "error"
}


function BreadCrumb(props: CrumbProps){

    const [visible, setVisible] = useState(true)

    return (
        <div className={visible ? "flex flex-col p-4 rounded-md shadow-sm self-center mt-10 absolute bottom-5 right-5 bg-white" : "hidden"}>
            <button className="absolute top-2 right-2 outline outline-1 rounded-full w-5 h-5 text-sm font-semibold hover:bg-black hover:text-white"
            onClick={() => {setVisible(visible => false)}}
            >x</button>
            <div className="pb-1 font-semibold text-xl border-b border-slate-600">{props.status}</div>
            <div className="pt-2">{props.text}</div>
        </div>
    )
}

export default BreadCrumb