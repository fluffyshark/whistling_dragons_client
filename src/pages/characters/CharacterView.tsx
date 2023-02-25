import React, {useEffect, useState} from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './components/PDFfile';
import CharacterDice from './components/CharacterDice';


type Props = {}

interface FormData {
  characterNameInput: string;
  classInput: string;
  backgroundInput: string;
  playernameInput: string;
  raceInput: string;
  alignmentInput: string;
  experienceInput: string;
}

interface StatsData {
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
}

const CharacterView = (props: Props) => {

  const [formData, setFormData] = React.useState<FormData>({
    characterNameInput: "",
    classInput: "",
    backgroundInput: "",
    playernameInput: "",
    raceInput: "",
    alignmentInput: "",
    experienceInput: "",

  });

  const [stats, setStats] = useState<StatsData>({
    strength: "Roll",
    dexterity: "Roll",
    constitution: "Roll",
    intelligence: "Roll",
    wisdom: "Roll",
    charisma: "Roll",
  });



    // Handle inputs from character choices 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
  }



  return (
    <div className='characterView'>
      
      <div className="characterView_characterName">
        <input type="text" name="characterNameInput" placeholder='Character Name...' value={formData.characterNameInput} onChange={handleInputChange} />
      </div>

      <div className="characterView_section">
        <div className="inputContainer">
          <input type="text" name="classInput" placeholder='Class & Level...' value={formData.classInput} onChange={handleInputChange} />
        </div>
        <div className="inputContainer">
          <input type="text" name="backgroundInput" placeholder='Background...' value={formData.backgroundInput} onChange={handleInputChange} />
        </div>
        <div className="inputContainer">
          <input type="text" name="playernameInput" placeholder='Player Name...' value={formData.playernameInput} onChange={handleInputChange} />
        </div>
      </div>

      <div className="characterView_section">
        <div className="inputContainer">
          <input type="text" name="raceInput" placeholder='Race...' value={formData.raceInput} onChange={handleInputChange} />
        </div>
        <div className="inputContainer">
          <input type="text" name="alignmentInput" placeholder='Alignment...' value={formData.alignmentInput} onChange={handleInputChange} />
        </div>
        <div className="inputContainer">
          <input type="text" name="experienceInput" placeholder='Experience Points...' value={formData.experienceInput} onChange={handleInputChange} />
        </div>
      </div>

      <div className="characterView_statsSection">
        <div className="characterView_statsSection_container">
          <div className="characterView_statsSection_container_stats"><p>{stats.strength}</p><p>Strength</p></div>
          <CharacterDice diceType={"d20"}  setStats={setStats} valueType={"strength"} />
        </div>
        <div className="characterView_statsSection_container">
          <div className="characterView_statsSection_container_stats"><p>{stats.dexterity}</p><p>Dexterity</p></div>
          <CharacterDice diceType={"d12"} setStats={setStats} valueType={"dexterity"} />
        </div>
        <div className="characterView_statsSection_container">
          <div className="characterView_statsSection_container_stats"><p>{stats.constitution}</p><p>Constitution</p></div>
          <CharacterDice diceType={"d90"} setStats={setStats} valueType={"constitution"} />
        </div>
        <div className="characterView_statsSection_container">
          <div className="characterView_statsSection_container_stats"><p>{stats.intelligence}</p><p>Intelligence</p></div>
          <CharacterDice diceType={"d9"} setStats={setStats} valueType={"intelligence"} />
        </div>
        <div className="characterView_statsSection_container">
          <div className="characterView_statsSection_container_stats"><p>{stats.wisdom}</p><p>Wisdom</p></div>
          <CharacterDice diceType={"d8"} setStats={setStats} valueType={"wisdom"} />
        </div>
        <div className="characterView_statsSection_container">
          <div className="characterView_statsSection_container_stats"><p>{stats.charisma}</p><p>Charisma</p></div>
          <CharacterDice diceType={"d6"} setStats={setStats} valueType={"charisma"} />
        </div>
        
      </div>

      <PDFDownloadLink document={<PDFFile formData={formData} stats={stats} />} fileName="Character Sheet">
        {({loading}) => (loading ? <button>Loading document...</button> : <button>Download PDF</button> )}
      </PDFDownloadLink>

    </div>
  )
}

export default CharacterView