import React, { useState } from 'react'
import { NavBar } from '..'
import { ColorPicker, Gradient } from '../../components'

import "./style.css"

export default function Home() {

    const [firstColor, setFirstColor] = useState("#000000")
    const [secondColor, setSecondColor] = useState("#000000")
    const [thirdColor, setThirdColor] = useState("#000000")
    const [firsPercent, setFirstPercent] = useState(0)
    const [secondPercent, setSecondPercent] = useState(0)
    const [thirdPercent, setThirdPercent] = useState(0)

    const handleColorChange = color => {
        setFirstColor(color)
    }

    const handleColorChange2 = color => {
        setSecondColor(color)
    }

    const handleColorChange3 = color => {
        setThirdColor(color)
    }

    const handleFirstPercentChange = value => {
        setFirstPercent(value)
    }

    const handleSecondPercentChange = value => {
        setSecondPercent(value)
    }

    const handleThirdPercentChange = value => {
        setThirdPercent(value)
    }

    return (
        <div className="home">
            <NavBar />
            <div className="home__body_colorSelect">
                <ColorPicker color={firstColor} colorChange={handleColorChange} percentage={firsPercent} changePercent={handleFirstPercentChange} />
                <ColorPicker color={secondColor} colorChange={handleColorChange2} percentage={secondPercent} changePercent={handleSecondPercentChange} />
                <ColorPicker color={thirdColor} colorChange={handleColorChange3} percentage={thirdPercent} changePercent={handleThirdPercentChange} />
            </div>

            <Gradient firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor} firsPercent={`${firsPercent}%`} secondPercent={`${secondPercent}%`} thirdPercent={`${thirdPercent}%`}/>
        </div>
    )
}
