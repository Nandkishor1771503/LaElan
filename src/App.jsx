import { useState } from 'react'

import './App.css'


import { motion } from 'motion/react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Gallery from './components/Gallery'
import Rules from './components/Rules'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)


  

  // links
  // facebook : https://www.facebook.com/people/La-Elan-Spa-Salon/61551785416468/

  // google : https://www.google.com/search?q=la+elan+spa+%26+salon&sca_esv=580030856&sxsrf=AM9HkKn_XaV_Bn2XEoY-u031IAfgKQZqAw%3A1699333488566&ei=cMVJZc6LItLdseMP-PaP-A0&oq=la+elan+spa+sa&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmxhIGVsYW4gc3BhIHNhKgIIATIEECMYJzIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I_zVQ3gVYlxtwAXgBkAEAmAHjAaAB3wyqAQUwLjcuMrgBAcgBAPgBAcICDRAAGEcY1gQYyQMYsAPCAgoQABhHGNYEGLADwgILEAAYigUYkgMYsAPCAgcQIxiKBRgnwgIIEAAYigUYhgPCAhAQLhgUGK8BGMcBGIcCGIAEwgIFEAAYgATCAgsQLhiABBjHARivAeIDBBgAIEGIBgGQBgk&sclient=gws-wiz-serp#lrd=0x3bcb933c628436ad:0x3f31c5925eefc213,1,,,,

  // trip advisor : https://www.tripadvisor.in/Attraction_Review-g297586-d10405586-Reviews-La_Elan_Spa_Salon_Hi_Tech_City-Hyderabad_Hyderabad_District_Telangana.html

  return (
    <>
      <Hero />
      <Contact />
      <About />
      <Gallery />
      <Rules />
      <Footer />
    </>
  )
}

export default App
