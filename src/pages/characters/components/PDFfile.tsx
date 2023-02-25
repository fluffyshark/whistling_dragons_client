import React, {useState} from 'react'
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import backgroundImage from "../../../components/assets/misc/characterCreation.png"


const styles = StyleSheet.create({

    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      
      characterName: {margin: 12,  fontSize: 20, textAlign: "justify",  fontFamily: "Times-Roman", position: "absolute", left: 50, top:47,},
      
      class: {fontSize: 10, fontFamily: "Times-Roman", position: "absolute", left: 263,top:54,},
      background: {fontSize: 10, fontFamily: "Times-Roman", position: "absolute", left: 372,top:54,},
      playername: {fontSize: 10, fontFamily: "Times-Roman", position: "absolute", left: 467,top:54,},

      race: {fontSize: 10, fontFamily: "Times-Roman", position: "absolute", left: 263, top:77,},
      alignment: {fontSize: 10, fontFamily: "Times-Roman", position: "absolute", left: 372,top:77,},
      experience: {fontSize: 10, fontFamily: "Times-Roman", position: "absolute", left: 467,top:77,},

      view1: {
        display:"flex",
        width: '50',
        height:"375",
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Times-Roman",
        position: "absolute",
        left: 29,
        top:136,
      },
      
      strength: {fontSize: 20, position: "absolute", top: 14, fontFamily: "Times-Roman", textAlign: "center",},
      dexterity: {fontSize: 20, position: "absolute", top: 79, fontFamily: "Times-Roman", textAlign: "center",},
      constitution: {fontSize: 20, position: "absolute", top: 144, fontFamily: "Times-Roman", textAlign: "center",},
      intelligence: {fontSize: 20, position: "absolute", top: 206, fontFamily: "Times-Roman", textAlign: "center",},
      wisdom: {fontSize: 20, position: "absolute", top: 271, fontFamily: "Times-Roman", textAlign: "center",},
      charisma: {fontSize: 20, position: "absolute", top: 335, fontFamily: "Times-Roman", textAlign: "center",},
      
      image: {
        marginVertical: 10,
        marginHorizontal: 0,
        width:"113%",
        position:"absolute"
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
      },
      pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
      },

})


type PDFfileProps = {
    formData: any;
    stats: any;
}

const PDFfile = ({formData, stats}: PDFfileProps) => {

    

  return (
    <Document>
    <Page style={styles.body}>
        <Image style={styles.image} src={backgroundImage} />

        <Text style={styles.characterName}>
            {formData.characterNameInput}
        </Text>
        
        <Text style={styles.class}>{formData.classInput}</Text>
        <Text style={styles.background}>{formData.backgroundInput}</Text>
        <Text style={styles.playername}>{formData.playernameInput}</Text>

        <Text style={styles.race}>{formData.raceInput}</Text>
        <Text style={styles.alignment}>{formData.alignmentInput}</Text>
        <Text style={styles.experience}>{formData.experienceInput}</Text>

        <View style={styles.view1}>
            <Text style={styles.strength}>{stats.strength}</Text>
            <Text style={styles.dexterity}>{stats.dexterity}</Text>
            <Text style={styles.constitution}>{stats.constitution}</Text>
            <Text style={styles.intelligence}>{stats.intelligence}</Text>
            <Text style={styles.wisdom}>{stats.wisdom}</Text>
            <Text style={styles.charisma}>{stats.charisma}</Text>
        </View>
        
        <Text 
        render={({pageNumber, totalPages}) => ``} 
        fixed
        />
    </Page>
</Document>
  )
}

export default PDFfile