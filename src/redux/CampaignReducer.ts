import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CampaignData {
  owner: string;
  title: string;
  description: string;
  status: string;
  players: Player[];
  invitedPlayers?: any[];
  thumbnail?: any[];
  maps?: any[];
  encounters?: any[];
}

interface Player {
  name: string;
  id: string;
}

const initialState: CampaignData[] = [{owner: "",title: "",players: [],invitedPlayers: [],description: "",thumbnail: [],maps: [],status: "",encounters: [],},];

const CampaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    getUserCampaigns: (state, action: PayloadAction<CampaignData>) => {
      state.push(action.payload);
    },
  },
});

export const { getUserCampaigns } = CampaignSlice.actions;
export default CampaignSlice.reducer;