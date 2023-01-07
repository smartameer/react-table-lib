import React, { FC } from 'react'
import { SelectProps, Selectable } from '../types'
import { Checkmark, CheckmarkRadio, Input, InputContainer } from './components'

const InputSelect: FC<SelectProps> = ({
  type,
  data,
  onSelect,
  name,
  index,
}) => {
  if (type === Selectable.single) {
    return (
      <InputContainer title="Select">
        <Input
          type="radio"
          name={name}
          onChange={() => onSelect(data, index)}
        />
        <CheckmarkRadio className="checkmark" />
      </InputContainer>
    )
  }
  if (type === Selectable.multiple) {
    return (
      <InputContainer title="Select">
        <Input
          type="checkbox"
          name={name}
          onChange={() => onSelect(data, index)}
        />
        <Checkmark className="checkmark" />
      </InputContainer>
    )
  }
  return null
}

export default InputSelect
