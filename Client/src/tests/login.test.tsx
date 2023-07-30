import Login from "../pages/login"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test("render of Form", () => {
  const { container } = render(<Login></Login>)

  expect(screen.getByRole("form")).toMatchSnapshot()
})

describe("Form testing", () => {
  test("Testing header label", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByRole("heading").textContent).toMatch("Log In.")
  })
})

test("DOM structure matches snapshot", () => {
  const { container } = render(<Login></Login>)

  expect(container).toMatchSnapshot()
})
