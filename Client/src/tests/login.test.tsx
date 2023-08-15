import Form from "../pages/login"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../app/store"

const testWrapper = ({ children }) => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
    </>
  )
}

describe("Form testing - log-in", () => {
  test("Testing header label", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    expect(screen.getByRole("heading").textContent).toMatch("log-in")
  })

  test("Testing for user label", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    expect(screen.getByRole("user-label").textContent).toMatch("")
  })

  test("Testing input for username", async () => {
    const user = userEvent.setup()
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    const userInput = screen.getByPlaceholderText("Username")

    await user.type(userInput, "sample username")

    expect(userInput).toHaveValue("sample username")
  })

  test("Testing for password label", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    expect(screen.getByRole("password-label").textContent).toMatch("")
  })

  test("Testing for password input", async () => {
    const user = userEvent.setup()
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    const passInput = screen.getByPlaceholderText("Password")

    await user.type(passInput, "sample Password")
    expect(passInput).toHaveValue("sample Password")
  })

  test("Valid Form Button", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    expect(screen.getByRole("submit-login").textContent).toMatch("Log in")
  })

  test("Sign-up button", () => {
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
    })

    expect(screen.getByRole("sign-up").textContent).toMatch("Sign up")
  })

  test("Sign-up button: functionality", async () => {
    const user = userEvent.setup()
    const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
      wrapper: testWrapper,
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
        wrapper: testWrapper,
      },
    )

    expect(screen.getByRole("heading").textContent).toMatch("sign-up")
  })

  test("Testing username and password labels", () => {
    const { container } = render(
      <Form type="sign-up" apiUrl="sign-up"></Form>,
      {
        wrapper: testWrapper,
      },
    )
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
  })

  test("Testing username and password inputs", async () => {
    const user = userEvent.setup()

    const { container } = render(
      <Form type="sign-up" apiUrl="sign-up"></Form>,
      {
        wrapper: testWrapper,
      },
    )

    const passInput = screen.getByPlaceholderText("Password")
    const userInput = screen.getByPlaceholderText("Username")

    await user.type(passInput, "testPass")
    await user.type(userInput, "testUser")

    expect(passInput).toHaveValue("testPass")
    expect(userInput).toHaveValue("testUser")
  })
})

test("DOM structure matches snapshot - login form", () => {
  const { container } = render(<Form type="log-in" apiUrl="login"></Form>, {
    wrapper: testWrapper,
  })

  expect(container).toMatchSnapshot()
})
