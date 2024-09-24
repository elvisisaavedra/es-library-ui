import type { Meta, StoryObj } from '@storybook/react'
import { type VariantProps } from 'class-variance-authority'

import { Button } from '@/button'
import { ToastProvider, Toast, useToast, toastProviderVariants } from '@/toast'

type SnackbarPropsAndCustomArgs = React.ComponentProps<typeof Toast> &
  VariantProps<typeof toastProviderVariants> & { description?: string }

const meta: Meta<SnackbarPropsAndCustomArgs> = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger'],
    },
    duration: {
      control: 'number',
    },
    placement: {
      control: 'select',
      options: [
        'topLeft',
        'topCenter',
        'topRight',
        'middleLeft',
        'middleCenter',
        'middleRight',
        'bottomLeft',
        'bottomCenter',
        'bottomRight',
      ],
    },
    description: {
      control: 'text',
    },
  },
  args: {
    description: 'Enter your text here',
  },
  render: ({ variant, duration, placement, description }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast()

    const makeToast = () => {
      toast({
        variant,
        duration,
        description,
      })
    }

    return (
      <>
        <ToastProvider placement={placement} />
        <Button variant={'secondary'} onClick={makeToast}>
          Make Snackbar
        </Button>
      </>
    )
  },
}

export default meta

type Story = StoryObj<SnackbarPropsAndCustomArgs>

export const Success: Story = {}

export const Info: Story = {
  args: {
    variant: 'info',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}

export const TopLeft: Story = {
  args: {
    placement: 'topLeft',
  },
}

export const TopCenter: Story = {
  args: {
    placement: 'topCenter',
  },
}

export const TopRight: Story = {
  args: {
    placement: 'topRight',
  },
}

export const MiddleLeft: Story = {
  args: {
    placement: 'middleLeft',
  },
}

export const MiddleCenter: Story = {
  args: {
    placement: 'middleCenter',
  },
}

export const BottomLeft: Story = {
  args: {
    placement: 'bottomLeft',
  },
}

export const BottomCenter: Story = {
  args: {
    placement: 'bottomCenter',
  },
}

export const MultipleLines: Story = {
  args: {
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, nobis atque aliquid quasi dolores facilis, repudiandae cupiditate vero cum totam harum et magnam minus dolorum, eos beatae debitis distinctio minima?',
  },
}

export const CustomDuration: Story = {
  args: {
    duration: 1000,
  },
}
