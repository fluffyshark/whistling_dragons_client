import { configureStore } from "@reduxjs/toolkit"
import CampaignSlice from "./CampaignReducer"
import CreateCampaignSlice from "./CreateCampaignReducer"


export const store = configureStore({
    reducer: {
        campaign: CampaignSlice,
        createcampaign: CreateCampaignSlice,
      
    }
})

