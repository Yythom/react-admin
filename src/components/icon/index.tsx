import { Icon, IconProps } from "@chakra-ui/react"

type Direction = 'top' | 'left' | 'right' | 'bottom'

interface ArrowIconProps extends IconProps {
    /**
     * 箭头方向
     * @default bottom
     */
    direction?: Direction;

    /**
     * 颜色
     * @default gray.900
     */
    color?: string;

    /**
     *
     * @default common
     */
    transitionProperty?: string;

    /**
     *
     * @default normal
     */
    transitionDuration?: string;
}

type DirectionMap = Record<Direction, number>
const directionMap: DirectionMap = {
    left: 90,
    right: 270,
    top: 180,
    bottom: 0,
}
export const ArrowIcon = ({ direction = 'bottom', ...args }: ArrowIconProps) => {
    return (
        <Icon width="16px" height="16px" viewBox="0 0 16 16" color="gray.900" transitionProperty="common" transitionDuration="normal" transform={`rotateZ(${directionMap[direction]}deg)`} {...args}>
            <g fill="none" fillRule="evenodd">
                <path fill="none" d="M16 0v16H0V0z" />
                <path fill="none" d="M16 0v16H0V0z" />
                <path
                    d="M8.53 10.401a.8.8 0 0 1-1.055.067l-.076-.067-3.535-3.535A.8.8 0 0 1 4.92 5.668l.075.066 2.97 2.97 2.97-2.97a.8.8 0 0 1 1.056-.066l.075.066a.8.8 0 0 1 .067 1.056l-.067.076L8.531 10.4Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </Icon>
    )
}