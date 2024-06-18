import {  create } from 'zustand';

type CountBears = {
    countBears: number;
    addBear: () => void,
    removeBear: () => void, 
}

export const useCountBearsStore = create<CountBears>((set)=>({
    countBears: 0,
    addBear: ()=> {
        set((state)=>({ countBears: state.countBears + 1}));
    },
    removeBear: () =>{
        set((state)=> ({ countBears: state.countBears > 0 ? state.countBears - 1 : 0 }))
    }
}))