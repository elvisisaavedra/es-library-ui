import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { CloseIcon } from '@/icons'
import { cn } from '@/utils'

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  staticBackdrop?: boolean
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogProps
>(({ className, children, staticBackdrop, ...props }, ref) => {
  const onEscapeKeyDown = (event: KeyboardEvent) => {
    if (staticBackdrop) event.preventDefault()
  }

  const onInteractOutside = (event: { preventDefault: () => void }) => {
    if (staticBackdrop) event.preventDefault()
  }

  return (
    <DialogPrimitive.DialogPortal>
      <DialogOverlay />
      <div
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] duration-200 has-[[data-state=open]]:animate-contentShow',
          className
        )}
      >
        <div className="relative w-auto mx-6 sm:mx-auto sm:max-w-[312px] xl:max-w-[488px]">
          <DialogPrimitive.Content
            onEscapeKeyDown={onEscapeKeyDown}
            onInteractOutside={onInteractOutside}
            className="relative flex flex-col gap-4 bg-white p-6 rounded-2xl w-full"
            {...props}
          >
            {children}
            <DialogPrimitive.Close className="absolute right-2 top-2 [&>svg]:size-12">
              <CloseIcon />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </div>
      </div>
    </DialogPrimitive.DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-3 mt-4', className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogIlustration = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex items-center justify-center [&>*]:h-20', className)}
    {...props}
  />
)
DialogIlustration.displayName = 'DialogIlustration'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-center text-gray-text text-3xl', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-base text-gray-800', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  DialogContent,
  DialogIlustration,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
