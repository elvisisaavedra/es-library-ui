import * as ToastPrimitives from '@radix-ui/react-toast'
import { Toast, toastProviderVariants, useToast } from '@/snackbar'
import { CloseIcon } from '@/icons'
import { VariantProps } from 'class-variance-authority'

export interface SnackbarProviderProps
  extends VariantProps<typeof toastProviderVariants> {
  asd?: boolean
}

export const SnackbarProvider = ({ placement }: SnackbarProviderProps) => {
  const { toasts: snackbars } = useToast()

  return (
    <ToastPrimitives.Provider>
      {snackbars.map(function ({ id, description, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex">
              <ToastPrimitives.ToastDescription className="text-medium text-white group-[.bg-yellow-300]:text-gray-700 py-[2px]">
                {description}
              </ToastPrimitives.ToastDescription>
              <ToastPrimitives.ToastClose className="m-auto mr-0">
                <CloseIcon className="size-6 text-white group-[.bg-yellow-300]:text-gray-700" />
              </ToastPrimitives.ToastClose>
            </div>
          </Toast>
        )
      })}
      <ToastPrimitives.Viewport
        data-snackbar-viewport
        className={toastProviderVariants({ placement })}
      />
    </ToastPrimitives.Provider>
  )
}
