import React from 'react';
import { Animated, Button, Text, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

   const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#E0E0E0',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity
                }}
            />

            <View style={{ flexDirection: 'row'}}>
                <Button
                    title='FadeIn'
                    onPress={fadeIn}
                />
                 
                <Button
                    title='FadeOut'
                    onPress={fadeOut}
                />

            </View>

        </View>
    );
}
