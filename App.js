import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { theme } from "./colors";

export default function App() {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    const travel = () => setWorking(false);
    const work = () => setWorking(true);

    const onChangText = (payload) => setText(payload);
    const addTodo = () => {
        if (text === "") {
            return;
        }
        // save to do
        const newToDos = Object.assign({}, toDos, {
            [Date.now()]: { text, work: working },
        });
        setToDos(newToDos);
        setText("");
    };
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity onPress={work}>
                    <Text
                        style={{
                            ...styles.buttonText,
                            color: working ? "white" : theme.grey,
                        }}
                    >
                        Work
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={travel}>
                    <Text
                        style={{
                            ...styles.buttonText,
                            color: working ? theme.grey : "white",
                        }}
                    >
                        Travel
                    </Text>
                </TouchableOpacity>
            </View>

            <TextInput
                value={text}
                returnKeyType="done"
                onSubmitEditing={addTodo}
                onChangeText={onChangText}
                placeholder={
                    working ? "Add a Todo" : "Where do you want to go?"
                }
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 100,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 38,
        fontWeight: "600",
    },
    input: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
        fontSize: 18,
    },
});
