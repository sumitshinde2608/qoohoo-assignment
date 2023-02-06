import React from 'react'
import Bootcamp from './pages/Bootcamp/Bootcamp'
import Courses from './pages/Courses/Courses'
import Landing from './pages/Landing/Landing'

const App = () => {
  return (
    <div>
      <Landing/>
      <Courses/>
      <Bootcamp/>
    </div>
  )
}

export default App