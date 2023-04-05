import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import {contacsApi} from "./service/contactsApi"

export const store = configureStore({
    reducer: {
        [contacsApi.reducerPath]: contacsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contacsApi.middleware)

})