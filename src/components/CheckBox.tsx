import { 
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";

import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
    checked?: boolean
    title: string
}

export function CheckBox ({checked = false, title, ...rest}: Props) {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            className="flex flex-row items-center my-2"
            {...rest}
        >
            {checked? // verify checkbox
                    <View className="w-8 h-8 flex rounded-lg bg-green-500 items-center justify-center">
                        <Feather 
                            name="check" 
                            size={20}
                            color={colors.white}
                        />
                    </View>
            : <View  className="w-8 h-8 bg-zinc-800 rounded-lg" />
            }

            <Text className="ml-3 text-white font-semibold">{title}</Text>
        </TouchableOpacity>
    )
}