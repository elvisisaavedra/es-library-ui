import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/button'
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogDescription,
  DialogIlustration,
  DialogFooter,
  DialogContent,
} from '@/dialog'

import AlertIcon from '@src/assets/alert.svg'

const meta: Meta<typeof DialogContent> = {
  title: 'UI/Dialog',
  component: DialogContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    staticBackdrop: {
      control: 'boolean',
      description:
        'Disable escape key is down event and when an interaction (pointer or focus event) happens outside',
    },
  },
  render: ({ ...args }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogIlustration>
          <img src={AlertIcon} alt="alert icon" />
        </DialogIlustration>
        <DialogTitle>Basic dialog title</DialogTitle>
        <DialogDescription>
          A dialog is a type of modal window that appears in front of app
          content to provide critical information, or prompt for a decision to
          be made.
        </DialogDescription>
        <DialogFooter>
          <Button variant={'secondary'} type="button">
            Button
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export default meta

type Story = StoryObj<typeof DialogContent>

export const Default: Story = {}

export const Static: Story = {
  args: {
    staticBackdrop: true,
  },
}

export const CustomClose: Story = {
  render: ({ ...args }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogIlustration>
          <img src={AlertIcon} alt="alert icon" />
        </DialogIlustration>
        <DialogTitle>Basic dialog title</DialogTitle>
        <DialogDescription>
          A dialog is a type of modal window that appears in front of app
          content to provide critical information, or prompt for a decision to
          be made.
        </DialogDescription>
        <DialogFooter>
          <Button variant={'secondary'} type="button">
            Button
          </Button>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithoutTrigger: Story = {
  render: ({ ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    const wait = () => new Promise((resolve) => setTimeout(resolve, 1000))

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent {...args}>
            <DialogIlustration>
              <img src={AlertIcon} alt="alert icon" />
            </DialogIlustration>
            <DialogTitle>Basic dialog title</DialogTitle>
            <DialogDescription>
              A dialog is a type of modal window that appears in front of app
              content to provide critical information, or prompt for a decision
              to be made.
            </DialogDescription>
            <DialogFooter>
              <Button
                variant={'secondary'}
                type="button"
                onClick={() => wait().then(() => setOpen(false))}
              >
                Close After 1 second
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}
