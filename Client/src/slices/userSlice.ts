import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { dataInterface } from "../pages/login"

export interface userInterface {
    userCreated: boolean,
    loginstatus: "failure" | "loading" | "success" | "no attempt"
    visibleCrumbs: boolean
}

const initialState: userInterface = {
    userCreated: false,
    loginstatus: "no attempt",
    visibleCrumbs: false
}

export const postUser = createAsyncThunk(
    "User/Postuser", async (clientData: dataInterface) => {
        const {apiUrl, username, password} = clientData
        const response = await fetch(`http://localhost:3100/${apiUrl}`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ username, password }),
            headers: { "Content-type": "application/json" },
          })
        const data = await response.json()
        console.log(data)
        return data
    }
)

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        enableCrumbs: (state) => {
            state.visibleCrumbs = true
        },
        disableCrumbs: (state) => {
            state.visibleCrumbs = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postUser.pending, (state) => {
                state.loginstatus = "loading"
            })
            .addCase(postUser.rejected, (state) => {
                state.loginstatus = "failure"
                state.userCreated = false
            })
            .addCase(postUser.fulfilled, (state, action) => {
                
                if (action.payload.action === "Successful log-in") {
                    state.loginstatus = "success"
                    state.userCreated = false
                } else if (action.payload.action === "User Created") {
                    state.loginstatus = "no attempt"
                    state.userCreated = true
                } else {
                    state.loginstatus = "failure"
                    state.userCreated = false
                }
            })
    }
})

export const {enableCrumbs, disableCrumbs} = userSlice.actions

export default userSlice.reducer