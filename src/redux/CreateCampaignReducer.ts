import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateCampaignData {
  id: string
  owner: string;
  title: string;
  description: string;
  numberOfPlayers:string;
  thumbnail: string;
  maps?: any[];
  encounters?: any[];
}

interface CreationPhase {
  creationPhase: string;
}



export var createCampaignData = {id:"", owner: "", title: "", numberOfPlayers: "",  description: "", thumbnail: "", maps: [], encounters: [], creationPhase:""} 

const CreateCampaignSlice = createSlice({
  name: "campaign",
  initialState: {value: createCampaignData},
  reducers: {
    createCampaignCard: (state, action: PayloadAction<CreateCampaignData>) => {
      state.value.id = String(Math.floor(Math.random() * (99999999 - 1000000 + 1) + 1000000))
      state.value.owner = action.payload.owner
      state.value.thumbnail = action.payload.thumbnail
      state.value.title = action.payload.title
      state.value.description = action.payload.description
      state.value.numberOfPlayers = action.payload.numberOfPlayers
    },
    creationPhase: (state, action: PayloadAction<CreationPhase>) => {
      state.value.creationPhase = action.payload.creationPhase
    },
  },
});

export const { createCampaignCard, creationPhase } = CreateCampaignSlice.actions;
export default CreateCampaignSlice.reducer;