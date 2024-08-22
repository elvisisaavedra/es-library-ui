import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '@/button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: '',
      values: [{ name: 'dark', value: '#000' }],
    },
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    children: 'Button',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['', 'sm', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'ghost', 'outline'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Variants: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: () => (
    <>
      <div className="flex gap-4">
        <Button>Primary</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'outline'}>Outline</Button>
        <Button variant={'ghost'}>Ghost</Button>
        <Button variant={'neutral'}>Neutral</Button>
      </div>
    </>
  ),
}

export const AnchorLink: Story = {
  render: ({ ...args }) => (
    <Button asChild {...args}>
      <a href="javascript:void(0)">I'm a link</a>
    </Button>
  ),
}

export const Disabled: Story = {
  render: () => (
    <>
      <div className="flex gap-4">
        <Button disabled>Primary</Button>
        <Button disabled variant={'secondary'}>
          Secondary
        </Button>
        <Button disabled variant={'outline'}>
          Outline
        </Button>
        <Button disabled variant={'ghost'}>
          Ghost
        </Button>
        <Button disabled variant={'neutral'}>
          Neutral
        </Button>
      </div>
    </>
  ),
}

export const Sizes: Story = {
  render: () => (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Button size={'sm'}>Small Button</Button>
          <Button>Medium Button</Button>
          <Button size={'lg'}>Large Button</Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button size={'sm'} variant={'secondary'}>
            Small Button
          </Button>
          <Button variant={'secondary'}>Medium Button</Button>
          <Button size={'lg'} variant={'secondary'}>
            Large Button
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button size={'sm'} variant={'outline'}>
            Small Button
          </Button>
          <Button variant={'outline'}>Medium Button</Button>
          <Button size={'lg'} variant={'outline'}>
            Large Button
          </Button>
        </div>
      </div>
    </>
  ),
}

export const Block: Story = {
  render: () => (
    <>
      <div className="flex w-80">
        <Button variant={'secondary'} className="w-full">
          Button
        </Button>
      </div>
    </>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-2 gap-4 w-80">
        <Button variant={'neutral'}>Button</Button>
        <Button variant={'secondary'}>Button</Button>
      </div>
    </>
  ),
}

export const TwoRows: Story = {
  render: () => (
    <>
      <div className="grid grid-rows-2 gap-4 w-80">
        <Button variant={'secondary'}>Button</Button>
        <Button variant={'neutral'}>Button</Button>
      </div>
    </>
  ),
}
