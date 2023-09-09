import {
    Box,
    Text,
    VStack,
    ScrollView,
    Icon,
    Image,
    useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
    return (
        <AnimatedColorBox
            flex={1}
            bg={useColorModeValue('warmGray.50', 'warmGray.900')}
            w={'full'}
        >
            <Masthead
                title="About this app"
                image={require('../assets/about-image.jpg')}
            >
                <NavBar />
            </Masthead>
            <ScrollView
                borderTopLeftRadius={'20px'}
                borderTopRightRadius={'20px'}
                bg={useColorModeValue('warmGray.50', 'primary.900')}
                mt={'-20px'}
                pt={'30px'}
                p={4}
            >
                <VStack flex={1} space={4}>
                    <Box alignItems={'center'}>
                        <Image
                            source={require('../assets/avatar.jpg')}
                            borderRadius={'full'}
                            resizeMode="cover"
                            w={120}
                            h={120}
                            alt="author"
                        />
                        <Text fontSize={'md'} w={'full'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus architecto corporis culpa dolore
                            inventore, nemo cumque commodi autem quidem
                            necessitatibus fuga recusandae! Temporibus quae esse
                            expedita saepe dolor in dolorem.
                        </Text>
                    </Box>
                </VStack>
            </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen
