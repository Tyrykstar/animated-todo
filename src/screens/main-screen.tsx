import React, { useState, useCallback } from 'react'
import { Pressable } from 'react-native'
import {
    Text,
    Box,
    Center,
    VStack,
    themeTools,
    useTheme,
    useColorMode,
    useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import TaskItem from '../components/task-item'

export default function MainScreen() {
    const [checked, setChecked] = useState<boolean>(false)
    const handlePressCheckbox = useCallback(() => {
        setChecked(prev => !prev)
    }, [])

    return (
        <Center
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            px={4}
            flex={1}
        >
            <VStack space={5} alignItems={'center'} w={'full'}>
                <TaskItem
                    isDone={checked}
                    onToggleCheckbox={handlePressCheckbox}
                    subject="Task Item"
                />
                {/* <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                    <Text>hello artur</Text>
                </Box> */}
                <ThemeToggle />
            </VStack>
        </Center>
    )
}
