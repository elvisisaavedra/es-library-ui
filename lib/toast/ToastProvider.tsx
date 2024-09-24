import * as ToastPrimitives from '@radix-ui/react-toast'
import { Toast, useToast } from '@/toast'
import { CloseIcon } from '@/icons'
import { type VariantProps } from 'class-variance-authority'
import { toastProviderVariants } from '.'

const ToastProvider = ({
  placement,
}: VariantProps<typeof toastProviderVariants>) => {
  const { toasts } = useToast()
  return (
    <ToastPrimitives.Provider>
      {toasts.map(function ({ id, description, ...props }) {
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

export { ToastProvider }
