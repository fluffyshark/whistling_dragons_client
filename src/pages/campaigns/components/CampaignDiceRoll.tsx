import React, { useState } from 'react'
import d4 from "../../../components/assets/dices/dice_d4.png"
import d6 from "../../../components/assets/dices/dice_d6.png"
import d8 from "../../../components/assets/dices/dice_d8.png"
import d9 from "../../../components/assets/dices/dice_d9.png"
import d90 from "../../../components/assets/dices/dice_d9-00.png"
import d12 from "../../../components/assets/dices/dice_d12.png"
import d20 from "../../../components/assets/dices/dice_d20.png"

type CampaignDiceRoll = {
  moduleType: string
}


const CampaignDiceRoll = ({moduleType}: CampaignDiceRoll) => {

    const [diceResult, setDiceResult] = useState<String>("Roll A Dice")


    function diceRoll(dice: number, multiplier: number) {
        const possibleNr: number[] = Array.from({ length: dice }, (_, i) => i + 1);
        const diceResults = possibleNr[Math.floor(Math.random() * possibleNr.length)];

        (document.getElementById("diceResult") as HTMLFormElement).style.fontSize = "50px";
        (document.getElementById("diceResult") as HTMLFormElement).style.transform = "translateY(-10px)";
        (document.getElementById(`d${dice*multiplier}`) as HTMLFormElement).classList.add('diceAnimation');

        setTimeout(() => {
            (document.getElementById(`d${dice*multiplier}`) as HTMLFormElement).classList.remove('diceAnimation');
          }, 500)
        

        setDiceResult(String(diceResults * multiplier))
    }



  return (
      <>

    {moduleType === "AllDices" && (

      <div className='campaignDice'>
        <div className="campaignDice_results"><p id="diceResult">{diceResult}</p></div>
        <div className="campaignDice_diceContainter">
            <img id="d20" src={d20} alt="" onClick={() => diceRoll(20, 1)} />
            <img id="d12" src={d12} alt="" onClick={() => diceRoll(12, 1)} />
            <img id="d90" src={d90} alt="" onClick={() => diceRoll(9, 10)} />
            <img id="d9" src={d9} alt="" onClick={() => diceRoll(9, 1)} />
            <img id="d8" src={d8} alt="" onClick={() => diceRoll(8, 1)} />
            <img id="d6" src={d6} alt="" onClick={() => diceRoll(6, 1)} />
            <img id="d4" src={d4} alt="" onClick={() => diceRoll(4, 1)} />
        </div>
      </div>
    
    )}


    {moduleType === "d20" && (
      <div className="characherDice_diceContainter">
        <div className="characherDice_diceContainter_results"><p id="diceResult" className='testingDice'>{diceResult}</p></div>
        <img id="d20" src={d20} alt="" onClick={() => diceRoll(20, 1)} />
      </div>
    )}  

    {moduleType === "d12" && (
      <div className="characherDice_diceContainter">
        <div className="characherDice_diceContainter_results"><p id="diceResult" className='testingDice'>{diceResult}</p></div>
        <img id="d12" src={d12} alt="" onClick={() => diceRoll(12, 1)} />
      </div>
    )}  

    
</>


  )
}

export default CampaignDiceRoll