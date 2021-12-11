import React, { useState } from 'react'
import links from '../data/links'
import Footer from './footer.jsx'
export default function Main() {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState([]);

  function handleClick(contentLink) {
    setContent(contentLink);
    setShow(false)
  }

  return (
    <div>
      <img className="absolute" src="./topFigure.svg"/>
      <img className="sticky z-50 w-3/5 mt-20 animate-bounce-slow" src="./logo.svg"/>
      <div className="flex flex-col items-center max-w-md mx-10">
      { 
      !show &&
        <div className="flex justify-end w-full">
          <button onClick={() => setShow(true)}  type="button" className="absolute p-2 mb-4 rounded-md shadow-md -translate-y-14 bg-yellow-color">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      }
      { show ? 
      
      links.map((item, idx) => (
        <button 
          key={idx}
          onClick={() => handleClick(item.content)} 
          type="button" 
          className="w-full p-2 m-4 text-sm font-bold text-center transition duration-300 ease-in-out transform border-t-4 rounded-md shadow-md cursor-pointer hover:-translate-y-1 hover:scale-105 border-black-color bg-yellow-color"
        >
          {item.name}
        </button>
      ))
      
      :

      content.map((item, idx) => (
        <a 
          target="_blank" 
          href={item.url}
          key={idx}
          className="w-full p-2 mt-4 mb-4 mr-4 text-sm font-bold text-center transition duration-300 ease-in-out transform border-t-4 rounded-md shadow-md cursor-pointer hover:-translate-y-1 hover:scale-105 border-black-color bg-yellow-color"
        >
          
          {item.name}
        </a>))
       
      }
      </div>
      <Footer />
      <img src="./bottomFigure.svg"/>
    </div>
  )
}
