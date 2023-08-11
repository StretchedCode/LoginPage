
import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { disableCrumbs } from "../slices/userSlice"

interface CrumbProps {
    text: string,
    status: "success" | "error" | "Loading"
}


function BreadCrumb(props: CrumbProps){

    const [visible, setVisible] = useState(true)
    const dispatch = useAppDispatch()

    return (
        <div className={visible ? "flex flex-col p-4 rounded-md shadow-sm self-center mt-10 absolute bottom-5 right-5 bg-white" : "hidden"}>
            <button className="absolute top-2 right-2 outline outline-1 rounded-full w-5 h-5 text-sm font-semibold hover:bg-black hover:text-white"
            onClick={() => {setVisible(visible => false); dispatch(disableCrumbs())}}
            >x</button>
            <div className="pb-1 font-semibold text-xl border-b border-slate-600">{props.status}</div>
            <div className="pt-2">{props.text}</div>
        </div>
    )
}

export default BreadCrumb