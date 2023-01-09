import React, { FC, ReactElement } from 'react'
import { SelectProps, Selectable } from '../types'
import {
  Checkmark,
  CheckmarkRadio,
  Input,
  InputContainer,
} from './StyledComponents'

const InputSelect: FC<SelectProps> = ({
  type,
  data,
  onSelect,
  name,
  index,
}): ReactElement | null => {
  const handleSelect = () => {
    onSelect(data, index)
  }

  if (type === Selectable.single) {
    return (
      <InputContainer title="Select" role="radio">
        <Input type="radio" name={name} onChange={handleSelect} />
        <CheckmarkRadio className="checkmark" />
      </InputContainer>
    )
  }

  if (type === Selectable.multiple) {
    return (
      <InputContainer title="Select" role="checkbox">
        <Input type="checkbox" name={name} onChange={handleSelect} />
        <Checkmark className="checkmark" />
      </InputContainer>
    )
  }

  return null
}

export default InputSelect
