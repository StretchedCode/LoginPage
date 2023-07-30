import { FC } from "react"

interface inputGroupProps {
  dataLabel: string
  labelRole?: string
  inputRole?: string
  inputType: string
}

const InputGroup: FC<inputGroupProps> = (props) => {
  return <div>Test group</div>
}

export default InputGroup
