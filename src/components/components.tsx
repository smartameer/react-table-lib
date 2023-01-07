import styled from 'styled-components'
import { device } from '../theme/devices'

const responsiveRadius = (radius: number) =>
  radius >= 8 && radius / 2 < 8 ? 8 : radius / 2

export const InputContainer = styled.label`
  display: block;
  position: relative;
  margin-top: -12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ .checkmark {
    border-color: ${props => props.theme.color?.primary || '#efedfd'};
  }
  & input:checked ~ .checkmark {
    background-color: ${props => props.theme.color?.primary || '#efedfd'};
    border-color: ${props => props.theme.color?.primary || '#efedfd'};
  }
  & input:checked ~ .checkmark:after {
    display: block;
  }
`
export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${props => props.theme.color?.border || '#ccc'};
  @media ${device.xs} {
    border-radius: 3px;
    height: 23px;
    width: 23px;
  }
  @media ${device.lg} {
    border-radius: 5px;
    height: 27px;
    width: 27px;
  }

  &:after {
    content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOCAxNSIgd2lkdGg9IjE0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iI2ZmZiIgaWQ9IkNvcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MjMuMDAwMDAwLCAtNDcuMDAwMDAwKSI+PGcgaWQ9ImNoZWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjMuMDAwMDAwLCA0Ny41MDAwMDApIj48cGF0aCBkPSJNNiwxMC4yIEwxLjgsNiBMMC40LDcuNCBMNiwxMyBMMTgsMSBMMTYuNiwtMC40IEw2LDEwLjIgWiIgaWQ9IlNoYXBlIi8+PC9nPjwvZz48L2c+PC9zdmc+);
    font-family: 'Arial';
    color: white;
    position: absolute;
    display: none;
    @media ${device.xs} {
      top: 4px;
      left: 5px;
      height: 6px;
      width: 8px;
    }
    @media ${device.lg} {
      top: 6px;
      left: 6px;
      height: 12px;
      width: 14px;
    }
  }
`

export const CheckmarkRadio = styled(Checkmark)`
  border-radius: 50%;
  &:after {
    content: '';
    background: white;
    border-radius: 50%;
    @media ${device.xs} {
      top: 5px;
      left: 5px;
      height: 13px;
      width: 13px;
    }
    @media ${device.lg} {
      top: 6px;
      left: 6px;
      width: 15px;
      height: 15px;
    }
  }
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const TableHeaderComponent = styled.div.attrs(
  (props: { size: number }) => props
)`
  flex-flow: row wrap;
  padding: 24px;
  align-items: center;
  line-height: 1.75;
  letter-spacing: 0;
  font-family: 'Avenir Heavy';
  display: flex;
  background: ${(props => props.theme.background?.header) || '#f3f3f3'};
  @media ${device.xs} {
    font-size: 16px;
    padding: 16px;
    border-top-left-radius: ${(props => responsiveRadius(props.theme.radius)) ||
      8}px;
    border-top-right-radius: ${(props =>
      responsiveRadius(props.theme.radius)) || 8}px;
    & .non-responsive {
      display: ${props => (props.size > 3 ? 'none' : 'flex')};
    }
    & .responsive {
      display: ${props => (props.size > 3 ? 'flex' : 'none')};
    }
  }
  @media ${device.xs} {
    font-size: 16px;
    padding: 16px;
    border-top-left-radius: ${(props => responsiveRadius(props.theme.radius)) ||
      8}px;
    border-top-right-radius: ${(props =>
      responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.md} {
    font-size: 18px;
    padding: 16px;
    border-top-left-radius: ${(props => responsiveRadius(props.theme.radius)) ||
      8}px;
    border-top-right-radius: ${(props =>
      responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.lg} {
    font-size: 20px;
    padding: 24px;
    border-top-left-radius: ${(props => props.theme.radius) || 16}px;
    border-top-right-radius: ${(props => props.theme.radius) || 16}px;
    & .non-responsive {
      display: flex;
    }
    & .responsive {
      display: none;
    }
  }
  @media ${device.xl} {
    font-size: 20px;
  }
`

export const TableHeaderCell = styled.div.attrs(
  (props: { selectable: boolean; size: number }) => props
)`
  width: calc(
    ${props => (props.selectable ? '(100% - 48px)' : '100%')} /
      ${props => props.size}
  );
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props => props.theme.color?.header) || 'black'};
`

export const TableHeaderSelectableCell = styled.div`
  width: 48px;
`

export const TableBodyRow = styled.div.attrs(
  (props: { noborder: boolean; selected: boolean; size: number }) => props
)`
  display: flex;
  align-items: center;
  font-family: 'Avenir Book';
  flex-flow: row wrap;

  @media ${device.xs} {
    padding: 8px 16px;
    ${props =>
      props.size > 3
        ? '& .header { width: 40%; max-width: 100px; display: inline-block; }'
        : ''}
  }
  @media ${device.sm} {
    padding: 8px 16px;
  }
  @media ${device.md} {
    padding: 8px 16px;
  }
  @media ${device.lg} {
    padding: 24px;
    & .header {
      display: none;
    }
  }
  ${props =>
    props.noborder
      ? 'border-bottom-left-radius: ' +
        (responsiveRadius(props.theme.radius) || 8) +
        'px;border-bottom-right-radius: ' +
        (responsiveRadius(props.theme.radius) || 8) +
        'px;'
      : 'border-bottom: 1px solid ' + (props.theme.color?.border || '#e1e1e1')};
  ${props =>
    props.selected
      ? 'background: ' + props.theme.background?.selected || '#efedfd'
      : ''};
`
export const TableBodyCell = styled.div.attrs(
  (props: { selectable: boolean; size: number }) => props
)`
  color: ${(props => props.theme.color?.default) || 'black'};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.xs} {
    width: calc(
      ${props =>
        props.size > 3
          ? '100%'
          : (props.selectable ? '(100% - 48px)' : '100%') + ' /  ' + props.size}
    );
    ${props =>
      props.size > 3
        ? 'margin-left: 48px;margin-top: -10px;margin-bottom: 16px;'
        : ''}
  }

  @media ${device.lg} {
    width: calc(
      ${props => (props.selectable ? '(100% - 48px)' : '100%')} /
        ${props => props.size}
    );
    margin: inherit;
  }
`

export const TableBodyRowSelectableCell = styled.div.attrs(
  (props: { size: number }) => props
)`
  width: 48px;
  @media ${device.xs} {
    ${props => (props.size > 3 ? 'padding-top: 16px;' : '')}
  }
  @media ${device.lg} {
    padding-top: 0px;
  }
`

export const TableContainer = styled.div`
  background: ${(props => props.theme.background.default) || '#fff'};
  box-shadow: 0 4px 4px 0px
    ${(props => props.theme.background.shadow) || '#f3f3f3'};
  display: block;
  width: 100%;
  max-width: 98vw;
  font-family: 'Avenir Book';
  @media ${device.xs} {
    border-radius: ${(props => responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.xs} {
    border-radius: ${(props => responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.md} {
    border-radius: ${(props => responsiveRadius(props.theme.radius)) || 8}px;
  }
  @media ${device.lg} {
    border-radius: ${(props => props.theme.radius) || 16}px;
  }
`
