import { configureStore } from "@reduxjs/toolkit"
import CampaignSlice from "./CampaignReducer"
import CreateCampaignSlice from "./CreateCampaignReducer"
import CreateEncounterSlice from "./CreateEncounterReducer"
import UserSlice from "./UserReducer"


export const store = configureStore({
    reducer: {
        campaign: CampaignSlice,
        createcampaign: CreateCampaignSlice,
        createencounter: CreateEncounterSlice,
        user: UserSlice,
      
    }
})

