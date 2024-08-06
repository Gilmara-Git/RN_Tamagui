import { config as defaultConfig } from '@tamagui/config/v2-native';
import { createTamagui } from 'tamagui';
import {  fonts } from './src/theme/fonts';
import { tokens } from './src/theme/tokens';


const config = createTamagui({
    ...defaultConfig,

    fonts:{
        body: fonts,
        heading: fonts,
        normalFont: {
            family: fonts.family,
            size: fonts.size
        }

    },
    tokens,
});
type Config = typeof config;

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Config {} 
   
};

export default config;