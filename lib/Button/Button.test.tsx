import { render } from '@testing-library/react'
import { Button } from './Button'

describe(`Component: ${Button.name}`, () => {
  it('should render', () => {
    const { container } = render(<Button>My Button</Button>)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          My Button
        </button>
      </div>
    `)
  })
})
