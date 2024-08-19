import type { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button className="bg-red-800" onClick={onClick}>
      Click: {children}
    </button>
  )
}
