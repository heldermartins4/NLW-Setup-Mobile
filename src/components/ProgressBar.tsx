import { View } from "react-native";

interface ProgressProps {
    progress?: number
}

export function ProgressBar ({ progress = 0 }: ProgressProps) {
    return (
        <View className="bg-zinc-700 w-full h-3 rounded-xl mt-4">
            <View 
                className="h-3 rounded-xl bg-violet-600"
                style={{
                    width: `${progress}%`
                }}
            />
        </View>
    )
}