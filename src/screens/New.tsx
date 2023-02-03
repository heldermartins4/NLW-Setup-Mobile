import { useState } from "react";
import { 
    ScrollView, 
    Text, 
    TextInput,
    View 
} from "react-native";
import colors from "tailwindcss/colors";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";

const avaiableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

export function New () {

    const [weekDays, setWeekDays] = useState<number[]>([])

    function handleToggleWeekDays (weekDaysIndex: number) {
        if (weekDays.includes(weekDaysIndex)) {
            setWeekDays(prevState => prevState.filter(weekDays => weekDays !== weekDaysIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDaysIndex])
        }
    }

    return (
        <View className="flex flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />
                <Text className="text-white text-3xl font-extrabold mt-6 leading-tight">
                    Criar Hábito
                </Text>
                <Text className="text-white text-base font-semibold mt-6 leading-tight">
                    Qual é o seu comprometimento?
                </Text>

                <TextInput 
                    className="h-12 mt-3 pl-4 rounded-lg bg-zinc-800 text-white focus:border-2 focus:border-green-600"
                    placeholder="ex.: Treinar, Estudar, Dieta..."
                    placeholderTextColor={colors.zinc[400]}
                    autoFocus
                />

                <Text className="mt-4 mb-3 font-semibold text-base text-white">
                    Qual a recorrência?
                </Text>

                {avaiableWeekDays.map((weekDay, index) => (
                    <CheckBox 
                        key={weekDay}
                        title={weekDay} 
                        checked={weekDays.includes(index)}
                        onPress={() => handleToggleWeekDays(index)}
                    />
                ))}
            </ScrollView>
        </View>
    )
}