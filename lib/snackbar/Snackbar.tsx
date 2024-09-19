import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'
import { toastVariants } from '.'

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

export type ToastProps = Omit<
  React.ComponentPropsWithoutRef<typeof Toast>,
  'title'
>

export { Toast }
