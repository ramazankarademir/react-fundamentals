// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [usernameValue, setUsernameValue] = React.useState()

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(usernameValue)
  }

  const handleChange = event => {
    const {value} = event.target
    setUsernameValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          id="usernameInput"
          name="username"
          type="text"
          onChange={handleChange}
          value={usernameValue}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
