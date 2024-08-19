import type { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button className="bg-secondary" onClick={onClick}>
      Click: {children}
    </button>
  )
}
