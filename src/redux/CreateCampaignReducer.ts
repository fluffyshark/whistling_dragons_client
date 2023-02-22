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

interface CreateEncounter {
  id: string;
  title: string;
  description: string;
  attackInput: string;
  healthInput: string;
  defenceInput: string;
  thumbnail: string;
}



export var createCampaignData = {id:"", owner: "", title: "", numberOfPlayers: "",  description: "", thumbnail: "", story: "", maps: [] as string[], encounters: [] as any[], creationPhase:""} 

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
    createCampaignEncounter: (state, action: PayloadAction<CreateEncounter>) => {
      const encounter = {
        id: String(Math.floor(Math.random() * (99999999 - 1000000 + 1) + 1000000)),
        title: action.payload.title,
        description: action.payload.description,
        attack: action.payload.attackInput,
        health: action.payload.healthInput,
        defence: action.payload.defenceInput,
        thumbnail: action.payload.thumbnail,
      };
      state.value.encounters.push(encounter);
    },
    creationPhase: (state, action: PayloadAction<CreationPhase>) => {
      state.value.creationPhase = action.payload.creationPhase
    },
  },
});

export const { createCampaignCard, createCampaignStory, createCampaignThumbnail, createMap, createCampaignEncounter, creationPhase } = CreateCampaignSlice.actions;
export default CreateCampaignSlice.reducer;

