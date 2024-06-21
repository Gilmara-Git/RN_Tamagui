import { PlusCircle, MinusCircle } from '@tamagui/lucide-icons';
import { XStack, Button, ButtonProps, View, Text, Circle } from 'tamagui';
import { useBearStore } from '../store/zustand.store';

type ButtonsGroupProps = ButtonProps & {
    updateBear : (action: string) => void;
};

export const ButtonsGroup = ({ updateBear, ...rest}: ButtonsGroupProps) : JSX.Element =>{

  const bearsList = useBearStore((state) => state.bearsSelection);

    return (
        <XStack ai='center' jc='center' mt={12} gap={8}>
        <Button pressStyle={{bg: '$red8'}} bg='$red9' size='$1' circular onPress={()=>updateBear('add')} {...rest} >
            <PlusCircle/>
        </Button>
       <Circle bg='$red8' size='$2' borderWidth={2}>
        <Text>{bearsList.length}</Text>
       </Circle>

        <Button pressStyle={{bg: '$red8'}}  disabled={bearsList.length === 0} bg={bearsList.length !== 0 ? '$red9': '$gray10'} size='$1' circular onPress={()=>updateBear('remove')} {...rest}>
            <MinusCircle/>
        </Button>
        
        </XStack>

    )
};


