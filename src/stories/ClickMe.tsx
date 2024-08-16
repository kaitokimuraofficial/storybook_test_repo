import React, { useState } from 'react'

export const ClickMe = () => {
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div>
      <div>
        <label htmlFor="example-element">Example Input:</label>
        <input
          id="example-element"
          data-testid="example-element"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button
          role="another-element"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </div>
  )
}
