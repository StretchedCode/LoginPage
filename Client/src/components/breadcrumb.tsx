


interface CrumbProps {
    text: string,
    status: "success" | "error"
}


function BreadCrumb(props: CrumbProps){


    return (
        <div className="flex flex-col p-4 rounded-md shadow-sm self-end xl:absolute xl:bottom-5 xl:right-5 bg-white">
            <div className="pb-1 font-semibold text-xl border-b border-slate-600">{props.status}</div>
            <div className="pt-2">{props.text}</div>
        </div>
    )
}

export default BreadCrumb