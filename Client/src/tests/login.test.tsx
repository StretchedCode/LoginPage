import Login from "../pages/login"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Form testing", () => {
  test("Testing header label", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByRole("heading").textContent).toMatch("Log in")
  })

  test("Testing for user label", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByRole("user-label").textContent).toMatch("")
  })

  test("Testing input for username", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByPlaceholderText("Username").textContent).toMatch("")
  })

  test("Testing for password label", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByRole("password-label").textContent).toMatch("")
  })

  test("Testing for password input", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByPlaceholderText("Password").textContent).toMatch("")
  })

  test("Valid Login Button", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByRole("submit-login").textContent).toMatch("Log in")
  })

  test("Sign-up button", () => {
    const { container } = render(<Login></Login>)

    expect(screen.getByRole("sign-up").textContent).toMatch("Sign up")
  })
})

test("DOM structure matches snapshot", () => {
  const { container } = render(<Login></Login>)

  expect(container).toMatchSnapshot()
})
