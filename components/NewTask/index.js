import React, { useState } from "react"
import { KeyboardAvoidingView, Text, TextInput } from "react-native"
import { TouchableOpacity, View } from "react-native"

import styles from "./styles"

function NewTask() {
    const { task, setTask } = useState('');
    const [taskItems, setTaskItems] = useSate([]);

    const handleAddTask = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
    }
    return (
        <View style={styles.bottom}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'}
                onChangeText={task => setTask(task)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}

export default NewTask;