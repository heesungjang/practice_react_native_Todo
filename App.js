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
    const [selectedButton, setSelectedButton] = useState(null);
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Work</Text>
                </TouchableOpacity>
                <Pressable
                    onPress={() => {
                        console.log("23");
                    }}
                >
                    <Text style={styles.buttonText}>Travel</Text>
                </Pressable>
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
        color: theme.grey,
    },
});
