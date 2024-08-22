import { cva } from 'class-variance-authority'
export { Button } from './Button'

export const buttonVariants = cva(
  'inline-flex border gap-1 items-center justify-center whitespace-nowrap rounded-xs3 text-base font-medium disabled:pointer-events-none select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary border-primary text-white hover:bg-primary-800 hover:border-primary-800 active:bg-primary-900 active:border-primary-900 disabled:bg-primary-800 disabled:border-primary-800 disabled:text-primary-300',
        secondary:
          'bg-secondary border-secondary text-white hover:bg-secondary-600 hover:border-secondary-600 active:bg-secondary-600 active:border-secondary-600 disabled:bg-gray-50 disabled:border-gray-50 disabled:text-gray-400',
        outline:
          'bg-transparent border-secondary text-secondary hover:bg-secondary-40 hover:border-secondary-600 hover:text-secondary-500 active:bg-secondary-40 active:border-secondary-600 active:text-secondary-500 disabled:border-gray-100 disabled:bg-transparent disabled:text-gray-400',
        ghost:
          'bg-transparent border-transparent text-secondary-500 hover:text-secondary-600 active:text-secondary-600 disabled:text-gray-400',
        neutral:
          'bg-white border-gray text-gray hover:border-gray-700 hover:text-gray-700 active:border-gray-700 active:text-gray-700 disabled:border-gray-100 disabled:text-gray-400',
      },
      size: {
        default: 'h-10 p-2',
        sm: 'h-8 px-2',
        lg: 'h-[52px] px-3 py-[14px] text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)
