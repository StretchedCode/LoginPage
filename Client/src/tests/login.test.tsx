import Form from "../pages/login"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"

describe("Form testing - log-in", () => {
  test("Testing header label", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByRole("heading").textContent).toMatch("log-in")
  })

  test("Testing for user label", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByRole("user-label").textContent).toMatch("")
  })

  test("Testing input for username", async () => {
    const user = userEvent.setup()
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    const userInput = screen.getByPlaceholderText("Username")

    await user.type(userInput, "sample username")

    expect(userInput).toHaveValue("sample username")
  })

  test("Testing for password label", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByRole("password-label").textContent).toMatch("")
  })

  test("Testing for password input", async () => {
    const user = userEvent.setup()
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    const passInput = screen.getByPlaceholderText("Password")

    await user.type(passInput, "sample Password")
    expect(passInput).toHaveValue("sample Password")
  })

  test("Valid Form Button", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByRole("submit-login").textContent).toMatch("Log in")
  })

  test("Sign-up button", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByRole("sign-up").textContent).toMatch("Sign up")
  })

  test("Sign-up button: functionality", async () => {
    const user = userEvent.setup()
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: BrowserRouter,
    })
    const signUpButton = screen.getByRole("sign-up")

    await user.click(signUpButton)

    expect(window.location.pathname).toMatch("sign-up")
  })
})

describe("Form testing - sign-up", () => {
  test("Testing Header Label", () => {
    const { container } = render(
      <Form type="sign-up" apiUrl="sign-up"></Form>,
      {
        wrapper: BrowserRouter,
      },
    )

    expect(screen.getByRole("heading").textContent).toMatch("sign-up")
  })

  test("")
})

test("DOM structure matches snapshot - login form", () => {
  const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
    wrapper: BrowserRouter,
  })

  expect(container).toMatchSnapshot()
})
