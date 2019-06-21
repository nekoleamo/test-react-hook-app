import React, { useContext } from 'react'

const colorContext = React.createContext('grey')

function Bar() {
  const color = useContext(colorContext)
  return (
    <div>{ color }</div>
  )
}

function Foo() {
  return <Bar />
}

function TestUseContext() {
  return (
    <colorContext.Provider value={ 'red' }>
      <Foo />
    </colorContext.Provider>
  )
}

export default TestUseContext