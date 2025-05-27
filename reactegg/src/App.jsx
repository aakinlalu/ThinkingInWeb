import { useState } from 'react'
import Modal from "./Modal"

import './App.css'

function Hello (props) {
  return <h1>Hello {props.name}</h1>


function Layout (props) {
  return (
    <div cllassName="layout">
      <SideBar />
      {props.children}
     <Footer />
    </div>
  )
}
}

function App() {
  const [isOpen, setIsOpen] = useState(false) 

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <Layout>
        <Hello name="World" />
      </Layout>
       
    </>
  )
}

export default App
