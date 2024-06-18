import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';
import {  fonts } from './src/theme/fonts';


const tamaguiConfig = createTamagui({
    ...config,
    // fonts:{
    //     body: fonts,
    //     heading: fonts
    // }
});
export type Config = typeof tamaguiConfig;

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Config {} 
};

export default tamaguiConfig;