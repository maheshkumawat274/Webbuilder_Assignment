import React from 'react'
import Page from './pages/Page'

function App() {

  const items = [
    {
      img:"./img/builder.png",
      btn1:"20% Off",
      btn2 :"Limited time",
      text1:"Webbuilder 1",
      text2:"Computer Modern Clasic with wix support",
      old_price:"$39.96",
      new_price:"$49.96",
      offer:"(20% off)",
    },
    {
      img:"./img/builder.png",
      btn1:"20% Off",
      btn2 :"Limited time",
      text1:"Webbuilder 1",
      text2:"Computer Modern Clasic with wix support",
      old_price:"$39.96",
      new_price:"$49.96",
      offer:"(20% off)",
      btn3:"View Deal"
    },
    {
      img:"./img/builder.png",
      btn1:"20% Off",
      btn2 :"Limited time",
      text1:"Webbuilder 1",
      text2:"Computer Modern Clasic with wix support",
      old_price:"$39.96",
      new_price:"$49.96",
      offer:"(20% off)",
      btn3:"View Deal"
    },
  ]
  return (
    <> 
     <Page item={items}/>
    </>
  )
}

export default App