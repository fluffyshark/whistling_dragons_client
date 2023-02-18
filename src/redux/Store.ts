import { configureStore } from "@reduxjs/toolkit"
import CampaignSlice from "./CampaignReducer"


export const store = configureStore({
    reducer: {
        campaign: CampaignSlice,
      
    }
})

