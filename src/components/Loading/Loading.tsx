import { CircleNotch } from 'phosphor-react'
import { StyledLoading } from './styled'

export function Loading() {
  return (
    <StyledLoading>
      <CircleNotch weight="bold" className="animate" />
    </StyledLoading>
  )
}
