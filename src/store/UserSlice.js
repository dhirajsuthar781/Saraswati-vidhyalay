import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodo = createAsyncThunk("todo", async () => {

    const req = await fetch('https://dummyjson.com/todos');

    return req.json();
})
 

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        todo: {
            isLoading: false, data: [], dataLoaded: false, isError: false, message: null
        },
    },

    extraReducers: (builder) => {
 
        builder.addCase(fetchTodo.pending, (state) => {
            state.todo.isLoading = true
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.todo.isLoading = false
            state.todo.data = action.payload;
            state.todo.dataLoaded = true
        });
        builder.addCase(fetchTodo.rejected, (state) => {
            state.todo.isLoading = false
        })


    },

    reducers: {
        RefTheFollowing: (state, action) => {
            state.FollowesData = [];
        }


    },
});


export const { RefTheFollowing } = UserSlice.actions;
export default UserSlice.reducer;

