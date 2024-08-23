import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionItem } from '@/accordion'
import { Button } from '@/button'

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    collapsible: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
  },
  render: ({ ...args }) => (
    <Accordion {...args}>
      <AccordionItem title="Is it accessible?" value="item-1">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionItem>
      <AccordionItem title="Is it unstyled?" value="item-2">
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionItem>
      <AccordionItem title="Can it be animated?" value="item-3">
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionItem>
    </Accordion>
  ),
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {}

export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const SingleDisabled: Story = {
  render: ({ ...args }) => (
    <Accordion {...args}>
      <AccordionItem title="Is it accessible?" value="item-1">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionItem>
      <AccordionItem title="Is it unstyled?" value="item-2">
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionItem>
      <AccordionItem disabled title="Can it be animated?" value="item-3">
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionItem>
    </Accordion>
  ),
}

export const WithSubtitles: Story = {
  render: ({ ...args }) => (
    <Accordion {...args}>
      <AccordionItem
        title="Is it accessible?"
        subtitle="Supportin text"
        value="item-1"
      >
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionItem>
      <AccordionItem
        title="Is it unstyled?"
        subtitle="Supportin text"
        value="item-2"
      >
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionItem>
      <AccordionItem
        title="Can it be animated?"
        subtitle="Supportin text"
        value="item-3"
      >
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
}

export const DefaultValue: Story = {
  render: () => (
    <Accordion defaultValue="item-2" type="single">
      <AccordionItem
        title="Is it accessible?"
        subtitle="Supportin text"
        value="item-1"
      >
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionItem>
      <AccordionItem
        title="Is it unstyled?"
        subtitle="Supportin text"
        value="item-2"
      >
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionItem>
      <AccordionItem
        title="Can it be animated?"
        subtitle="Supportin text"
        value="item-3"
      >
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionItem>
    </Accordion>
  ),
}

export const HandleValue: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [accordionValue, setAccordionValue] = useState('')
    return (
      <>
        <div className="flex gap-2">
          <Button onClick={() => setAccordionValue('item-1')}>
            Open Accordion 1
          </Button>

          <Button
            variant={'secondary'}
            onClick={() => setAccordionValue('item-2')}
          >
            Open Accordion 2
          </Button>

          <Button
            variant={'outline'}
            onClick={() => setAccordionValue('item-3')}
          >
            Open Accordion 3
          </Button>

          <Button
            className="ml-auto"
            variant={'neutral'}
            onClick={() => setAccordionValue('')}
          >
            Close All
          </Button>
        </div>

        <hr className="my-3" />

        <Accordion
          value={accordionValue}
          onValueChange={setAccordionValue}
          collapsible
          type="single"
        >
          <AccordionItem
            title="Is it accessible?"
            subtitle="Supportin text"
            value="item-1"
          >
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionItem>
          <AccordionItem
            title="Is it unstyled?"
            subtitle="Supportin text"
            value="item-2"
          >
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionItem>
          <AccordionItem
            title="Can it be animated?"
            subtitle="Supportin text"
            value="item-3"
          >
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionItem>
        </Accordion>
      </>
    )
  },
}
