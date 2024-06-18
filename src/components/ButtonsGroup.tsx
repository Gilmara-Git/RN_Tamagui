import { PlusCircle, MinusCircle } from '@tamagui/lucide-icons';
import { XStack, Button, ButtonProps} from 'tamagui'

type ButtonsGroupProps = ButtonProps & {
    updateBear : (action: string) => void;
};

export const ButtonsGroup = ({ updateBear, ...rest}: ButtonsGroupProps) : JSX.Element =>{

    return (
        <XStack ai='center' jc='center' mt={12} gap={8}>
        <Button bg='$red9' w='$2' h='$2' onPress={()=>updateBear('add')} {...rest} >
            <PlusCircle/>
        </Button>

        <Button bg='$red9' w='$2' h='$2' onPress={()=>updateBear('remove')} {...rest}>
            <MinusCircle/>
        </Button>
        </XStack>

    )
};


