import React, { useState } from "react";
import { View, Text } from 'react-native';
import { TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

import styles from "./styles";

const Task = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Checkbox
                    style={styles.square}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

export default Task;