import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    const RenderContent = () => {
        return (
            <View>
                {/* Poster image */}
                <View style={styles.imageContainer} >
                    <View style={styles.imageBorder}>
                        <Image
                            source={{ uri }}
                            style={styles.posterImage}
                        />
                    </View>
                </View >

                {/* Title */}
                <View style={styles.marginContainer} >
                    <Text style={styles.subtitle}>{movie.original_title} </Text>
                    <Text style={styles.title}>{movie.title} </Text>
                </View >

                {/* Details */}
                {
                    isLoading
                        ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                        : <MovieDetails movieFull={movieFull!} cast={cast} />
                }

                {/* Boton para cerrar esta pantalla */}
                <View style={styles.backButton} >
                <TouchableOpacity
                    onPress={ () => navigation.pop()}
                >
                    <Icon
                        color="white"
                        name="close-circle-outline"
                        size={40}                        
                    />
                </TouchableOpacity>
                </View>
            </View>
        );
    }


    return (
        <ScrollView>
            <RenderContent />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1,
        borderBottomEndRadius: 100,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 10,
        right: 5
    }

});