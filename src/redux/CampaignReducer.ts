import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CampaignData {
  id: string
  owner: string;
  title: string;
  description: string;
  numberOfPlayers: string;
  thumbnail: string;
  maps: string[];
  encounters: CreateEncounter[];
  players?: any[]
  invitedPlayers?: any[]
  status?: string
}

interface Players {
  players: any[];
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



export const CampaignData: CampaignData[] = [];

const CampaignSlice = createSlice({
  name: "campaign",
  initialState: {value: CampaignData},
  reducers: {
    getUserCampaigns: (state, action: PayloadAction<CampaignData>) => {
      state.value.push(action.payload);
    },
    addCreatedCampaignCard: (state, action: PayloadAction<CampaignData>) => {
      state.value.push(action.payload);
      console.log("campaign action", action.payload)
    },
  },
});

export const { getUserCampaigns, addCreatedCampaignCard } = CampaignSlice.actions;
export default CampaignSlice.reducer;