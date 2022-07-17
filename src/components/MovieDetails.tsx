import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter'


import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { ActorCard } from './ActorCard';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {


    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />

                    <Text> {movieFull.vote_average} </Text>

                    <Text style={{ marginLeft: 5 }}>
                        | {movieFull.genres.map(genre => genre.name).join(', ')}
                    </Text>

                </View>

                {/* Historia */}
                <Text style={styles.title}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                    {movieFull.overview}
                </Text>

                {/* Presupuesto */}
                <Text style={styles.title}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>

            {/* Casting */}
            <FlatList
                data={cast}
                renderItem={({ item }) => (
                    <ActorCard cast={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 10 }}

            />
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    }
});
