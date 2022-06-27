import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";


// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


const initialState = [
    {
        id: '1',
        avatar: 'https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg',
        name: 'Learning Redux Toolkit',
        desc: "I've heard good things.",
        image: 'https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg',
        date: sub(new Date(), { minutes: 10 }).toISOString(),

    },
    {
        id: '2',
        avatar: 'https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg',
        name: 'Slices...',
        desc: "The more I say slice, the more I want pizza.",
        image: 'https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg',

        date: sub(new Date(), { minutes: 5 }).toISOString(),

    },
    {
        id: '3',
        avatar: 'https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg',
        name: 'Slices of card',
        desc: "The more I say slice, the more I want pizza.",
        image: 'https://i-giaitri.vnecdn.net/2021/03/14/Avatar-1615695904-2089-1615696022_680x0.jpg',
        date: sub(new Date(), { minutes: 5 }).toISOString(),

    }
]



const CardSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(name, desc, avatar) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        desc,
                        date: new Date().toISOString(),
                        avatar,
                    }
                }
            }
        },
    }

})

export const selectAllPosts = (state) => state.posts;


export const { postAdded } = CardSlice.actions
export default CardSlice.reducer