import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    cast: Cast
}
export const ActorCard = ({ cast }: Props) => {

    const { profile_path } = cast
    const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;

    return (
        <View style={ styles.cardContainer }>
            {
                profile_path && (
                    <View style={ styles.imageContainer }>
                        <Image source={{ uri }} style={ styles.image } />
                    </View>
                )
            }
            <View style={ styles.detailsContainer }>
                <Text style={ styles.title }>{cast.original_name}</Text>
                <Text style={ styles.subtitle }>{cast.character}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        overflow: 'hidden',
        marginHorizontal: 5,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 9,
    },
    imageContainer: {
        width: 50,
        height: 50 
    },
    image:{
        flex: 1
    },
    detailsContainer: { 
        paddingHorizontal: 10,
        marginTop: 5
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12,
        opacity: 0.8
    }
});