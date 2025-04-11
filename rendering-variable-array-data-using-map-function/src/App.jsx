import React from 'react'

const App = () => {
  let x = "Hello World"
  let array = ["Hello", "World", "React", "JSX"]
  return (
    <div>
      {x}
      {array.map((user)=>{return <h1>{user}</h1>})}
    </div>
  )
}

export default App
