import { createFont } from 'tamagui';

export const fonts =  createFont({
      
    family: 'Montserrat_400Regular, ' , 
    size:{
        1:12,
        2:14,
        3:16,
        4:18,
        5:20,
        6:22,
        true:16

    }, 
    face:{
        400:{ normal:  'Montserrat_400Regular'},
        600: { normal: 'Montserrat_600Regular'},
        700: { normal: 'Montserrat_700Regular'}
    },
    weight: {
        4: '400',
        6: '600',
        7: '700'
    }
})