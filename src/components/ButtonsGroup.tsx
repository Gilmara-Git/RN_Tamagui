import { PlusCircle, MinusCircle } from '@tamagui/lucide-icons';
import { XStack, Button, } from 'tamagui'

export const ButtonsGroup = ()=>{

    return (
        <XStack ai='center' jc='center' mt={12} gap={8}>
        <Button bg='$red9' w='$2' h='$2' >
            <PlusCircle/>
        </Button>

        <Button bg='$red9' w='$2' h='$2'>
            <MinusCircle/>
        </Button>
        </XStack>

    )
};


