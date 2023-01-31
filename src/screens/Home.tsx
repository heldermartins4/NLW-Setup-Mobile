// Essentials
import { 
    View, 
    Text, 
    ScrollView
} from "react-native"

// Components
import { 
    Habits,
    DAY_SIZE 
} from "../components/Habits"

import { Header } from "../components/Header"

import { genDay } from "../utils/days"


const weekDays = ['D','S','T','Q','Q','S','S']
const days = genDay()
const minSumDates = 18 * 7
const amountOfDaysToFill = minSumDates - days.length

export const Home = () => {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            {/** Header */}
           <Header />
           {/** SummaryView  */}
           <View className="flex flex-row mt-6 mb-2">
            {weekDays.map((weekDay, key) => (
                <Text 
                    key={key}
                    className="text-zinc-400 text-xl font-bold text-center m-1"
                    style={{width: DAY_SIZE}}
                >{weekDay}</Text>
            ))}
           </View>
           {/** HabitsList */}
           <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}
           >
            <View className="flex flex-row flex-wrap">
                {days.map(date => (
                        <Habits 
                            key={date.toISOString()}
                        />
                ))}
                {/** amountOfDaysToFill  */}
                {amountOfDaysToFill > 0 && Array
                    .from({length: amountOfDaysToFill})
                    .map((_,i) => ( 
                        <View 
                            key={i}
                            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                            style={{
                                width:DAY_SIZE,
                                height: DAY_SIZE
                            }}
                        />
                    ))
                }
            </View>
           </ScrollView>
           
        </View>
    )
}