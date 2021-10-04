import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Pressable,
} from "react-native";
import { theme } from "./colors";

export default function App() {
    const [working, setWorking] = useState(true);
    const travel = () => setWorking(false);
    const work = () => setWorking(true);

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
});
