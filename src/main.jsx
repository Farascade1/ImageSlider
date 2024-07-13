import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Header from "./Components/Header"
import ImageSlider from "./Components/ImageSlider"

 
 const root = document.querySelector("#root")

 ReactDOM.createRoot(root).render(

    <div>

    <Header />
<ImageSlider />

    </div>
 )


 