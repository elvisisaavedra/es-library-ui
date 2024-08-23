import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/utils'
import { ChevronDownIcon } from '@/icons'

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  title: string
  subtitle?: string
}

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, title, subtitle, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-b-gray-50', className)}
    {...props}
  >
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between px-4 py-6 font-medium transition-all [&[data-state=open]>svg]:rotate-180">
        <div className="flex flex-col text-left">
          <span className="text-xl font-bold">{title}</span>
          {subtitle && (
            <span className="text-base text-gray-300">{subtitle}</span>
          )}
        </div>
        <ChevronDownIcon className="size-10 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="px-4 pb-6">{children}</div>
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
))

AccordionItem.displayName = 'AccordionItem'
