import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background :linear-gradient(90deg, ${props => props.firstColor} ${props => props.firstPercent} ,${props => props.secondColor} ${props=> props.secondPercent},${props => props.thirdColor} ${props => props.thirdPercent});
    border: 2px solid;
    width: 100%;
    height: 200px;
    margin-top:50px

`

export default function Gradient({firstColor,secondColor,thirdColor,firstPercent,secondPercent,thirdPercent}) {
   
    return (
        <Div firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor} firstPercent={firstPercent} secondPercent={secondPercent} thirdPercent={thirdPercent}/>
    )
}
