import {  create } from 'zustand';

export type BearType ={
        id: string;    
        description: string,
        signature:string,
        imageUrl: string
        };
        
        
        type Bears = {
            bearsSelection: Array<BearType>;
            addBear: (bear: BearType) => void,
            removeBear: (id: string) => void, 
        }

    export const useBearStore = create<Bears>((set)=>({
        bearsSelection : [],
        addBear: (bear) => {
            set((state)=>( { ...state, bearsSelection: state.bearsSelection.concat(bear)}));
        },
        removeBear: (id) => {
        
            set((state)=>( 
               
                {   ...state,
                    bearsSelection:state.bearsSelection.filter(bear =>bear.id !== id)}))
            
        }
    }));

