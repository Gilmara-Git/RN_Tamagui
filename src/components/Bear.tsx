import { XStack, Avatar, YStack, Separator , Paragraph,  } from 'tamagui';

export const Bear = ()=>{

        return (
            <YStack ai='center' jc='center' mt={20}> 
                        <Avatar circular size='$6' zIndex={1}>
                        <Avatar.Image
                            accessibilityLabel='Nate Wienert'
                            src='https://tsh.io/wp-content/uploads/2023/02/zustand-react-small.png'
                        />
                        <Avatar.Fallback delayMs={600} backgroundColor='$gray8'/>
                    </Avatar>
                <XStack mt={-30} jc='center' ai='center'>
                    
                    <YStack jc='center' gap='$1' bg='$red9' borderRadius={8} p={6}>
                    
                        <Paragraph 
                            color='$white7'
                            fontSize={'$3'}
                            fontFamily={'$body'}
                            fontWeight='bold'
                            textAlign='center'
                            paddingTop={25}
                        
                            >
                                I am a BEAR component managed by ZUSTAND and  styled with TAMAGUI. 
                                
                                
                        </Paragraph>
                        <Separator marginVertical={5}/>

                        <Paragraph
                        color='$white7'
                        fontSize={'$3'}
                        fontFamily={'$body'}
                        fontWeight='bold'
                        textAlign='center'
                        >
                        My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.
                        </Paragraph>

                    </YStack>
                    
                </XStack>
            </YStack>
        )
}
