import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}
export const HorizontalSlider = ({ title, movies }: Props) => {

    return (
        <View style={{ 
            height: (title) ? 260 : 220 
        }}>

            {/* Title */}
            { title && (<Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{ title }</Text>)}

            {/* Slider */}
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster width={140} height={200} movie={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />

        </View>
    );
}
