import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import ButtonIcon from '@/assets/ButtonIcon.svg'

import { cn } from '@/utils'

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-49 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.DialogPortal>
    <DialogOverlay />
    <div
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%] duration-200 has-[[data-state=open]]:animate-in has-[[data-state=closed]]:animate-out has-[[data-state=closed]]:fade-out-0 has-[[data-state=open]]:fade-in-0 has-[[data-state=closed]]:zoom-out-95 has-[[data-state=open]]:zoom-in-95 has-[[data-state=closed]]:slide-out-to-left-1/2 has-[[data-state=closed]]:slide-out-to-top-[48%] has-[[data-state=open]]:slide-in-from-left-1/2 has-[[data-state=open]]:slide-in-from-top-[48%]',
        className
      )}
      {...props}
    >
      <div className="relative w-auto mx-6 sm:mx-auto sm:max-w-[312px] xl:max-w-[488px] has-[div[role=['dialog']]]:text-purple-dark">
        <DialogPrimitive.Content className="relative flex flex-col gap-4 bg-white p-6 rounded-2xl w-full">
          {children}
          <DialogPrimitive.Close className="absolute right-2 top-2">
            <div className="size-12">
              <img src={ButtonIcon} alt="Close Icon" />
            </div>
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </div>
    </div>
  </DialogPrimitive.DialogPortal>
))
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
  DialogOverlay,
  DialogContent,
  DialogIlustration,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
