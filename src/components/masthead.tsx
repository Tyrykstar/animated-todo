import { ImageSourcePropType } from 'react-native'
import { Box, VStack, Heading, Image } from 'native-base'
import React from 'react'

interface Props {
    title: string
    image: ImageSourcePropType
    children: React.ReactNode
}

const Masthead = ({ title, image, children }: Props) => {
    return (
        <VStack h={'300px'} pb={5} flex={0} alignItems={'flex-end'}>
            <Image
                position={'absolute'}
                left={0}
                right={0}
                bottom={0}
                w={'full'}
                h={'300px'}
                resizeMode="cover"
                source={image}
                alt="masthead"
            />
            {children}
            <Box flex={1} />
            <Heading color={'darkBlue.700'} p={6} size="xl">
                {title}
            </Heading>
        </VStack>
    )
}

export default Masthead
