import React, { useEffect, useState } from 'react'

import "./style.css"

export default function ColorPicker({ color, colorChange, percentage, changePercent }) {

    const [textColor, setTextColor] = useState(color)

    useEffect(() => {
        setTextColor(color)
    }, [color])


    const handleColorChange = e => {
        colorChange(e.target.value)
    }

    const handleColorChangeText = e => {
        setTextColor(e.target.value)
    }

    const onBlurText = e => {
        if (e.target.value.length <= 7) {
            if (e.target.value.includes("#")) {
                colorChange(e.target.value)
            }
        }
    }

    const handleReset = () => {
        colorChange("#000000")
        changePercent(0)
    }

    const handlePercentChange = e => {
        if (e.target.value >= 0 && e.target.value <= 100) {
            changePercent(e.target.value)
        }
    }

    return (
        <div className="color_picker">
            <div>
                <input type="number" value={percentage} className="color_picker__percentage" onChange={handlePercentChange} />%
            </div>
            <input type="color" value={color} id="colorPickerSelect" className="color_picker__color_selector" onChange={handleColorChange} />
            <input type="text" className="color_picker__text" id="colorPickerText" value={textColor} onChange={handleColorChangeText} onBlur={onBlurText} maxLength="7" prefix="#" />
            <button id="reset" className="color_picker__reset" onClick={handleReset}>X</button>
        </div>
    )
}
