import { FC } from "react"

interface inputGroupProps {
  dataLabel: string
  labelRole?: string | " "
  inputRole?: string | " "
  inputType: string
  inputPlaceholder?: string | " "
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
      ></input>
    </div>
  )
}

export default InputGroup
