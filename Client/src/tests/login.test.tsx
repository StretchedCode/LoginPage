import Login from "../pages/login"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test("render of login page", () => {
  const { container } = render(<Login></Login>)

  expect(screen.getByRole("label").textContent).toMatch(/Log in/i)
})
