import * as ToastPrimitives from '@radix-ui/react-toast'
import { Snackbar, toastProviderVariants, useSnackbar } from '@/snackbar'
import { CloseIcon } from '@/icons'
import { VariantProps } from 'class-variance-authority'

export function SnackbarProvider({
  placement,
}: VariantProps<typeof toastProviderVariants>) {
  const { toasts: snackbars } = useSnackbar()

  return (
    <ToastPrimitives.Provider>
      {snackbars.map(function ({ id, description, ...props }) {
        return (
          <Snackbar key={id} {...props}>
            <div className="flex">
              <ToastPrimitives.ToastDescription className="text-medium text-white group-[.bg-yellow-300]:text-gray-700 py-[2px]">
                {description}
              </ToastPrimitives.ToastDescription>
              <ToastPrimitives.ToastClose className="m-auto mr-0">
                <CloseIcon className="size-6 text-white group-[.bg-yellow-300]:text-gray-700" />
              </ToastPrimitives.ToastClose>
            </div>
          </Snackbar>
        )
      })}
      <ToastPrimitives.Viewport
        data-snackbar-viewport
        className={toastProviderVariants({ placement })}
      />
    </ToastPrimitives.Provider>
  )
}
