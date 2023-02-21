import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateCardData {
  id: string
  owner: string;
  title: string;
  description: string;
  numberOfPlayers:string;
}

interface CreateStoryData {
  story: string;
}

interface CreateThumbnail {
  thumbnail: string;
}

interface CreationPhase {
  creationPhase: string;
}

interface CreateMap {
  maps: string[];
}



export var createCampaignData = {id:"", owner: "", title: "", numberOfPlayers: "",  description: "", thumbnail: "", story: "", maps: [] as string[], encounters: [], creationPhase:""} 

const CreateCampaignSlice = createSlice({
  name: "campaign",
  initialState: {value: createCampaignData},
  reducers: {
    createCampaignCard: (state, action: PayloadAction<CreateCardData>) => {
      state.value.id = String(Math.floor(Math.random() * (99999999 - 1000000 + 1) + 1000000))
      state.value.owner = action.payload.owner
      state.value.title = action.payload.title
      state.value.description = action.payload.description
      state.value.numberOfPlayers = action.payload.numberOfPlayers
    },
    createCampaignStory: (state, action: PayloadAction<CreateStoryData>) => {
      state.value.story = action.payload.story
    },
    createCampaignThumbnail: (state, action: PayloadAction<CreateThumbnail>) => {
      state.value.thumbnail = action.payload.thumbnail
    },
    createMap: (state, action: PayloadAction<CreateMap>) => {
      state.value.maps.push(...action.payload.maps);
      console.log("action.payload.maps", action.payload.maps)
    },
    creationPhase: (state, action: PayloadAction<CreationPhase>) => {
      state.value.creationPhase = action.payload.creationPhase
    },
  },
});

export const { createCampaignCard, createCampaignStory, createCampaignThumbnail, createMap, creationPhase } = CreateCampaignSlice.actions;
export default CreateCampaignSlice.reducer;