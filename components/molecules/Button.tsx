import React from 'react';
import { View, Button, StyleSheet, ViewStyle } from 'react-native';

interface ButtonWrapperProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ title, onPress, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Button title={title} onPress={onPress} color="#0F508A"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 30,
        borderRadius: 6,
        backgroundColor: '#f0f0f0',
    },
});

export default ButtonWrapper;