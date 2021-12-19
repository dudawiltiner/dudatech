import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-end mt-10 mr-4 space-x-6">
      <a href="https://www.linkedin.com/in/eduardawiltiner/" target="_blank" className="transition duration-300 ease-in-out transform border-t-4 rounded-full shadow-sm cursor-pointer hover:-translate-y-1 hover:scale-105"><img src="./linkedin.svg"/></a>
      <a href="" target="_blank" className="transition duration-300 ease-in-out transform border-t-4 rounded-full shadow-sm cursor-pointer hover:-translate-y-1 hover:scale-105"><img src="./insta.svg"/></a>
      <a href="https://instagram.com/dudatech_oficial?r=nametag" target="_blank" className="transition duration-300 ease-in-out transform border-t-4 rounded-full shadow-sm cursor-pointer hover:-translate-y-1 hover:scale-105"><img src="./port.svg"/></a>
      <a href="https://www.youtube.com/channel/UCsyYo5sKxUlVbZWHhc0p3rw" target="_blank" className="transition duration-300 ease-in-out transform border-t-4 rounded-full shadow-sm cursor-pointer hover:-translate-y-1 hover:scale-105"><img src="./youtube.svg"/></a>
      <a href="https://github.com/dudawiltiner" target="_blank" className="transition duration-300 ease-in-out transform border-t-4 rounded-full shadow-sm cursor-pointer hover:-translate-y-1 hover:scale-105"><img src="./git.svg"/></a>
    </div>
  )
}
