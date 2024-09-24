import { cva } from 'class-variance-authority'
export { Toast } from './Toast'
export { ToastProvider } from './ToastProvider'
export { useToast, toast } from './use-toast'

export const toastVariants = cva(
  'group max-w-full w-[350px] px-4 py-3 rounded-xs3 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:zoom-in',
  {
    variants: {
      variant: {
        success: 'bg-green-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-300',
        danger: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  }
)

export const toastProviderVariants = cva(
  'fixed z-[100] flex flex-col max-h-screen w-max p-4 space-y-3',
  {
    variants: {
      placement: {
        topLeft: 'top-0 left-0',
        topCenter: 'top-0 left-1/2 -translate-x-1/2',
        topRight: 'top-0 right-0',
        middleLeft: 'top-1/2 left-0 -translate-y-1/2',
        middleCenter: 'top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2',
        middleRight: 'top-1/2 right-0 -translate-y-1/2',
        bottomLeft: 'bottom-0 left-0',
        bottomCenter: 'bottom-0 left-1/2 -translate-x-1/2',
        bottomRight: 'bottom-0 right-0',
      },
    },
    defaultVariants: {
      placement: 'bottomRight',
    },
  }
)
