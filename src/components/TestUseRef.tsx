import React, { useState, useRef } from 'react'

function TestUseRef() {
  let [name, setName] = useState('jack')
  let nameRef: any = useRef()
  const submitButton = () => {
    setName(nameRef.current.value)
  }
  return (
    <div>
      <p>{ name }</p>
      <div>
        <input type="text" ref={nameRef} />
        <button type="button" onClick={ submitButton }>Submit</button>
      </div>
    </div>
  )
}

export default TestUseRef