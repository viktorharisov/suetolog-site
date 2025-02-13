import { useState } from 'react'
import Header from './components/header/Header'
import './styles/common.css'
import BlogFirst from "./components/blog-first/BlogFirst.jsx";
import BlogSecond from "./components/blog-second/BlogSecond.jsx";
import BlogThree from "./components/blog-three/BlogThree.jsx";



function App() {

  return (
    <>
      <Header/>
        <BlogFirst/>
        <BlogSecond/>
      <BlogThree/>
    </>
  )
}

export default App
