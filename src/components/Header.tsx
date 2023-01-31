import { 
    View, 
    Text,
    TouchableOpacity 
} from "react-native"

import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

import Logo from "../assets/logo.svg"

export const Header = () => {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            {/* Logo | MainButton */}
            <Logo />
            <TouchableOpacity
                activeOpacity={0.7}
                className="h-11 flex flex-row items-center px-4 border border-violet-500 rounded-lg"
            >
                <Feather 
                    name="plus"
                    color={colors.violet[500]}
                    size={20}
                />
                <Text className="ml-3 text-white font-semibold text-base">Novo</Text>
            </TouchableOpacity>
        </View>
    )
}