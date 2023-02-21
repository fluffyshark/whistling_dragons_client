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



const initialState: CampaignData[] = [{id:"", owner: "", title: "", players: [] as any[], numberOfPlayers:"", invitedPlayers: [], description: "", thumbnail: "", maps: [] as string[], encounters: [] as any[], status: ""},];

const CampaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    getUserCampaigns: (state, action: PayloadAction<CampaignData>) => {
      state.push(action.payload);
    },
    addCreatedCampaignCard: (state, action: PayloadAction<CampaignData>) => {
      state.push(action.payload);
      console.log("campaign action", action.payload)
    },
  },
});

export const { getUserCampaigns, addCreatedCampaignCard } = CampaignSlice.actions;
export default CampaignSlice.reducer;