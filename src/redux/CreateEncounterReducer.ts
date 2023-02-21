import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateEncounter {
  id: string
  title: string;
  description: string;
  attack: number;
  health: number;
  defence: number;
}

interface CreateEncounterThumbnail {
    thumbnail: string;
}


export var createEncounterData = {id:"", title: "",  description: "", thumbnail: "", attack: 0, health: 0, defence: 0} 

const CreateEncounterSlice = createSlice({
  name: "encounter",
  initialState: {value: createEncounterData},
  reducers: {
    createEncounter: (state, action: PayloadAction<CreateEncounter>) => {
      state.value.id = String(Math.floor(Math.random() * (99999999 - 1000000 + 1) + 1000000))
      state.value.title = action.payload.title
      state.value.description = action.payload.description
      state.value.attack = action.payload.attack
      state.value.health = action.payload.health
      state.value.defence = action.payload.defence
    },
    createEncounterThumbnail: (state, action: PayloadAction<CreateEncounterThumbnail>) => {
      state.value.thumbnail = action.payload.thumbnail
    }
  },
});

export const { createEncounter, createEncounterThumbnail } = CreateEncounterSlice.actions;
export default CreateEncounterSlice.reducer;