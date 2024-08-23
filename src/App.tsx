import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogIlustration,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Accordion,
  AccordionItem,
} from 'es-library-ui'
import AlertIcon from './assets/alert.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <Button variant={'secondary'}>Secondary</Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent staticBackdrop>
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

      <hr />

      <Accordion type="single" collapsible>
        <AccordionItem title="Title" subtitle="Supporting text" value="item-1">
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
    </>
  )
}

export default App
