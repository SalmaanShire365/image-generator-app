/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import Generator from './components/Generator'
// import WindowTracker from './components/WindowTracker'
export default function App() {

  // const [show, setShow] = React.useState(true)

  // function toggle() {
  //     setShow((prevShow) => !prevShow)
  // }

  /**
    * Challenge:
    * 1. Create state called `show`, default to `true`
    * 2. When the button is clicked, toggle `show`
    * 3. Only display `<WindowTracker>` if `show` is `true`
    */

  // const [starWarsData, setStarWarsData] = React.useState({})
  // const [count, setCount] = React.useState(1)




  // React.useEffect(() => {
  //   console.log("Effect ran")
  //   fetch(`https://swapi.dev/api/people/ + ${count}`)
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // }, [count])


  // const [formData, setFormData] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isFriendly: true,
  //   employment: ""
  // }
  // )
  // function handleChange(event) {
  //   const { name, value, type, checked } = event.target
  //   setFormData(prevFormData => {

  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value
  //     }
  //   })

  // }

  // function handleSubmit(event) {
  //   // event.preventDefault()
  //   console.log(formData)
  //   //  submitToApi(formData)

  // }

  return (
    <div>
    <Header />
    <Generator />
    </div>
    // <div className='container-window'>
    //   <button className='button-window' onClick={toggle}>
    //     Toggle WindowTracker
    //   </button>
    //   {show && <WindowTracker />}
    // </div>
    // <div>
    //   <h2>The count is {count}</h2>
    //   <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
    //   <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    // </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="First Name"
    //     onChange={handleChange}
    //     name="firstName"
    //     value={formData.firstName}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Last Name"
    //     onChange={handleChange}
    //     name="lastName"
    //     value={formData.lastName}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     onChange={handleChange}
    //     name="email"
    //     value={formData.email}
    //   />
    //   <textarea
    //     value={formData.comments}
    //     placeholder="Comments"
    //     onChange={handleChange}
    //     name='comments'
    //   />
    //   <input
    //     type='checkbox'
    //     checked={formData.isFriendly}
    //     id='isFriendly'
    //     onChange={handleChange}
    //     name='isFriendly'
    //   />
    //   <label htmlFor="isFriendly">Are you friendly</label>
    //   <br />
    //   <br />
    //   <fieldset>
    //     <legend>Current employment status</legend>
    //     <input
    //       type="radio"
    //       id="unemployed"
    //       name='employment'
    //       value="unemployed"
    //       checked={formData.employment === 'unemployed'}
    //       onChange={handleChange}
    //     />
    //     <label htmlFor="unemployed">Unemployed</label>
    //     <br />

    //     <input
    //       type="radio"
    //       id="part-time"
    //       name='employment'
    //       value="part-time"
    //       onChange={handleChange}
    //       checked={formData.employment === 'part-time'}
    //     />
    //     <label htmlFor="part-time">Part-time</label>
    //     <br />

    //     <input
    //       type="radio"
    //       id="full-time"
    //       name='employment'
    //       value="full-time"
    //       onChange={handleChange}
    //       checked={formData.employment === 'full-time'}
    //     />
    //     <label htmlFor="full-time">Full-time</label>
    //     <br />
    //   </fieldset>
    //   <br />
    //   <button>Submit</button>
    // </form>
  )
}


// const newSquares = []

//       for (let i = 0; i < prevSquares.length; i++) {
//         const currentSquare = prevSquares[i]
//         if (currentSquare.id === id) {
//           const updatedSquare = {
//             ...currentSquare,
//             on: !currentSquare.on
//           }
//           newSquares.push(updatedSquare)
//         } else {
//           newSquares.push(currentSquare)
//         }
//       }
//       return newSquares



// const [squares, setSquares] = React.useState(boxes)

// function toggle(id) {

//   setSquares(prevSquares => {
//     return prevSquares.map((square) => { 
//        return square.id === id ? {...square, on: !square.on} : square
//     })
//   })
// }

// const squareElements = squares.map(square => (
//   <Box
//     key={square.id}
//     id={square.id}
//     on={square.on}
//     toggle={toggle}
//   />
// ))

// return (
//   <main>
//     {squareElements}
//   </main>
// )

// }