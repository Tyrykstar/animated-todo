import { useEffect, memo } from 'react'
import { Pressable } from 'react-native'
import { Text, HStack, Box } from 'native-base'
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    withDelay,
    interpolateColor
} from 'react-native-reanimated'

interface Props {
    strikethrough: boolean
    textColor: string
    inactiveTextColor: string
    onPress?: () => void
    children?: React.ReactNode
}

const AnimatedBox = Animated.createAnimatedComponent(Box)
const AnimatedHStack = Animated.createAnimatedComponent(HStack)
const AnimatedText = Animated.createAnimatedComponent(Text)

const AnimatedTaskLabel = memo((props: Props) => {
    const { inactiveTextColor, strikethrough, textColor, onPress, children } =
        props

    const hsatckOffset = useSharedValue(0)
    const hsatckAnimedStyles = useAnimatedStyle(
        () => ({
            transform: [{ translateX: hsatckOffset.value }]
        }),
        [strikethrough]
    )

    const textColorProgress = useSharedValue(0)
    const textColorAnimatedStyles = useAnimatedStyle(
        () => ({
            color: interpolateColor(
                textColorProgress.value,
                [0, 1],
                [textColor, inactiveTextColor]
            )
        }),
        [strikethrough, textColor, inactiveTextColor]
    )

    const strikethroughWidth = useSharedValue(0)
    const strikethroughAnimatedStyles = useAnimatedStyle(
        () => ({
            width: `${strikethroughWidth.value * 100}%`,
            borderBottomColor: interpolateColor(
                textColorProgress.value,
                [0, 1],
                [textColor, inactiveTextColor]
            )
        }),
        [strikethrough, textColor, inactiveTextColor]
    )

    useEffect(() => {
        const easing = Easing.out(Easing.quad)
        if (strikethrough) {
            hsatckOffset.value = withSequence(
                withTiming(4, { duration: 200, easing }),
                withTiming(0, { duration: 200, easing })
            )
            strikethroughWidth.value = withTiming(1, { duration: 400, easing })
            textColorProgress.value = withDelay(
                1000,
                withTiming(1, { duration: 400, easing })
            )
        } else {
            strikethroughWidth.value = withTiming(0, { duration: 400, easing })
            textColorProgress.value = withTiming(0, { duration: 400, easing })
        }
    })

    return (
        <Pressable onPress={onPress}>
            <AnimatedHStack alignItems={'center'} style={[hsatckAnimedStyles]}>
                <AnimatedText
                    fontSize={30}
                    noOfLines={1}
                    isTruncated
                    px={1}
                    style={[textColorAnimatedStyles]}
                >
                    {children}
                </AnimatedText>
                <AnimatedBox
                    position={'absolute'}
                    h={1}
                    borderBottomWidth={1}
                    style={[strikethroughAnimatedStyles]}
                />
            </AnimatedHStack>
        </Pressable>
    )
})

export default AnimatedTaskLabel
