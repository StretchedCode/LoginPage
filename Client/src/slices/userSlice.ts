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
    visibleCrumbs: true
}

export const postUser = createAsyncThunk(
    "User/Postuser", async (clientData: dataInterface) => {
        const {apiUrl, username, password} = clientData
        const data = await fetch(`http://localhost:3000/${apiUrl}`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ username, password }),
            headers: { "Content-type": "application/json" },
          })
        console.log(data.status)
        return data.status
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
            .addCase(postUser.fulfilled, (state) => {
                state.loginstatus = "success"
                state.userCreated = true
            })
    }
})

export const {enableCrumbs, disableCrumbs} = userSlice.actions

export default userSlice.reducer