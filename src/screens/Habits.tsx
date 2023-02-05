import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import dayjs from "dayjs";

/* Components */
import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";

interface Params {
    date: string
}

export function Habits () {

    const route = useRoute()
    const { date } = route.params as Params

    // format
    const parsedDate = dayjs(date)
    const dayOfWeek = parsedDate.format('dddd')
    const reduceDate = parsedDate.format('DD/MM')

    return (
        <View className="flex flex-1 bg-background px-8 pt-16">
            {/* <Text className="text-white">{date}</Text> */}
            <BackButton />

            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{paddingBottom: 100}}
            >
                <Text className="text-zinc-400 text-base mt-6 lowercase">{dayOfWeek}</Text>
                <Text className="font-extrabold text-3xl text-white">{reduceDate}</Text>

                <ProgressBar progress={25} />

                <View className="mt-6">
                    <CheckBox 
                        title="Beber 2L de água t/dia"
                        checked={true}
                    />
                    <CheckBox 
                        title="Caminhar"
                        checked={false}
                    />
                    <CheckBox 
                        title="Ler e/ou Meditar"
                        checked={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}