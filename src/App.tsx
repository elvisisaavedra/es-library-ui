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
    </>
  )
}

export default App
