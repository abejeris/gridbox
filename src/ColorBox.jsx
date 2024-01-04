import { useState } from "react"
import "./ColorBox.css"

function randomChoice(arr) {
    const idx = Math.floor(Math.random()*arr.length)
    return arr[idx]
}

export default function ColorBox({colors}) {

    const [color, setColor] = useState(randomChoice(colors));
    
    const handleClick = () => {
       const randomColor = randomChoice(colors)
        setColor(randomColor)
    }

    return(
        <div className="ColorBox" style={{backgroundColor: color}} onClick={handleClick}>
        </div>
    
    )
}