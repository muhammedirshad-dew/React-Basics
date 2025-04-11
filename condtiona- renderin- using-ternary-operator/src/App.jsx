import React from 'react'

const App = () => {

  let data = "boyconst App = () => {

  let data = "boy";
  return (
    <div>
      {data === "boy" ? (
        <h1>Boy</h1>
      ) : (
        <h1>Girl</h1>
      )}
    </div>
  )
}";
  return (
    <div>
      {data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}
    </div>
  )
}

export default App
