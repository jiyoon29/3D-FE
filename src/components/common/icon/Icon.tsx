import Image from 'next/image'
import checkboxEmpty from '../../../../public/icons/checkboxOff.svg'
import checkboxFull from '../../../../public/icons/checkboxOn.svg'
import Cart from '../../../../public/icons/cartPlus.svg'
import CartHover from '../../../../public/icons/cartPlusBlue.svg'
import Trash from '../../../../public/icons/trash.svg'
import TrashHover from '../../../../public/icons/trashBlue.svg'

interface IconProps {
  width?: number
  height?: number
}

export const CheckboxOffIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <Image
      src={checkboxEmpty}
      alt="checkbox off icon"
      width={width}
      height={height}
      className="flex items-center justify-center"
    />
  )
}
export const CheckboxOnIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <Image
      src={checkboxFull}
      alt="checkbox on icon"
      width={width}
      height={height}
      className="flex items-center justify-center"
    />
  )
}

export const CartIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <Image
      src={Cart}
      alt="cart icon"
      width={width}
      height={height}
      className="flex items-center justify-center"
    />
  )
}
export const BlueCartIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <Image
      src={CartHover}
      alt="cart icon hover"
      width={width}
      height={height}
      className="flex items-center justify-center"
    />
  )
}

export const TrashIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <Image
      src={Trash}
      alt="trash icon"
      width={width}
      height={height}
      className="flex items-center justify-center"
    />
  )
}
export const BlueTrashIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <Image
      src={TrashHover}
      alt="trash icon hover"
      width={width}
      height={height}
      className="flex items-center justify-center"
    />
  )
}
