import { FC } from "react"

interface inputGroupProps {
  dataLabel: string
  labelRole?: string | " "
  inputRole?: string | " "
  inputType: string
  inputPlaceholder?: string | " "
  value: string
  onChange(e: any): void
}

const InputGroup: FC<inputGroupProps> = (props) => {
  return (
    <div>
      <label htmlFor={props.dataLabel} role={props.labelRole}></label>
      <input
        type={props.inputType}
        name={props.dataLabel}
        role={props.inputRole}
        required
        placeholder={props.inputPlaceholder}
        value={props.value}
        onChange={props.onChange}
        className="min-w-full min-h-[10%] bg-slate-200 focus:outline-none p-3 placeholder:text-slate-500"
      ></input>
    </div>
  )
}

export default InputGroup
