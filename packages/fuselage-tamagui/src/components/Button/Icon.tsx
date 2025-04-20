// import { CardProps, ColorProp, ColorTokens, useThemeName, XStack } from 'tamagui'
// import {ArrowLeft,MessageCircleMore} from '@tamagui/lucide-icons';
// type Severity = 'ArrowLeft' |'MessageCircleMore'
// export type LmAlertProps = CardProps & {
//   severity?: Severity
//   text?: string
//   outlined?: boolean
//   hideIcon?: boolean
// }
// import {ZButton} from './CustomButton';

// const severityColor: { [k in Severity]: ColorProp } = {
//   ArrowLeft: '$gray3',
//   MessageCircleMore: '$gray3',
// }

// type AlertIconProps = {
//   severity?: Severity
//   outlined?: boolean
//   shouldInvert?: boolean
// }

// function AlertIcon({ severity = 'ArrowLeft', outlined, shouldInvert }: AlertIconProps) {
//   const props: { color?: ColorTokens } = {}
//   if (outlined) {
//     props.color = severityColor[severity] as ColorTokens
//   } else if (shouldInvert) {
//     props.color = 'white'
//   }
//   return {
//     ArrowLeft: <ArrowLeft {...props} />,
//     MessageCircleMore:<MessageCircleMore {...props} />,
//   }[severity]
// }

// export function Icon({
//   severity ,
//   outlined,
// }: LmAlertProps) {
//   const theme = useThemeName()
//   let shouldInverse = theme === 'light' && severity !== 'default' && !outlined
//   return (
//     <ZButton borderRadius="$1">
//        <XStack space alignItems={'center'}>
//         <AlertIcon shouldInvert={shouldInverse} severity={severity} outlined={outlined} />
//       </XStack>
//     </ZButton>
    
//   )
// }
