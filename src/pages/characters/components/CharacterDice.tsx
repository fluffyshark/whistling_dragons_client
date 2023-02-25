import React from 'react'
import d4 from "../../../components/assets/dices/dice_d4.png"
import d6 from "../../../components/assets/dices/dice_d6.png"
import d8 from "../../../components/assets/dices/dice_d8.png"
import d9 from "../../../components/assets/dices/dice_d9.png"
import d90 from "../../../components/assets/dices/dice_d9-00.png"
import d12 from "../../../components/assets/dices/dice_d12.png"
import d20 from "../../../components/assets/dices/dice_d20.png"


type CharacterDiceProps = {
    diceType: string;
    valueType: string;
    setStats: React.Dispatch<React.SetStateAction<StatsData>>;
  };

  interface StatsData {
    strength: string;
    dexterity: string;
    constitution: string;
    intelligence: string;
    wisdom: string;
    charisma: string;
  }


const CharacterDice = ({diceType, valueType, setStats }: CharacterDiceProps) => {


    function rollDice(dice:number, multiplier:number, statsType:string) {
        const possibleNr: number[] = Array.from({ length: dice }, (_, i) => i + 1);
        const diceResults = possibleNr[Math.floor(Math.random() * possibleNr.length)];
      
        switch (statsType) {
          case "strength":
            setStats((prevState) => ({
              ...prevState,
              strength: String(diceResults * multiplier),
            }));
            break;
          case "dexterity":
            setStats((prevState) => ({
              ...prevState,
              dexterity: String(diceResults * multiplier),
            }));
            break;
            case "constitution":
            setStats((prevState) => ({
              ...prevState,
              constitution: String(diceResults * multiplier),
            }));
            break;
            case "intelligence":
            setStats((prevState) => ({
              ...prevState,
              intelligence: String(diceResults * multiplier),
            }));
            break;
            case "wisdom":
            setStats((prevState) => ({
              ...prevState,
              wisdom: String(diceResults * multiplier),
            }));
            break;
            case "charisma":
            setStats((prevState) => ({
              ...prevState,
              charisma: String(diceResults * multiplier),
            }));
            break;
          default:
            break;
        }

        // Prevent player from doing another throw
        (document.getElementById(`${valueType}`) as HTMLFormElement).style.pointerEvents = "none";
        (document.getElementById(`${valueType}`) as HTMLFormElement).style.opacity = "0.5";
      }


  return (

    <>
    
        {diceType === "d20" && <div className="characterDice" id="strength" onClick={() => rollDice(20, 1, valueType)}><img src={d20} alt="" /></div>}
        {diceType === "d12" && <div className="characterDice" id="dexterity" onClick={() => rollDice(12, 1, valueType)}><img src={d12} alt="" /></div>}
        {diceType === "d90" && <div className="characterDice" id="constitution" onClick={() => rollDice(9, 10, valueType)}><img src={d90} alt="" /></div>}
        {diceType === "d9" && <div className="characterDice" id="intelligence" onClick={() => rollDice(9, 1, valueType)}><img src={d9} alt="" /></div>}
        {diceType === "d8" && <div className="characterDice" id="wisdom" onClick={() => rollDice(8, 1, valueType)}><img src={d8} alt="" /></div>}
        {diceType === "d6" && <div className="characterDice" id="charisma" onClick={() => rollDice(6, 1, valueType)}><img src={d6} alt="" /></div>}

    </>

  )
}

export default CharacterDice