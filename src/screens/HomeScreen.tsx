import React from 'react';
import { Dimensions, FlatList, Text, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-reanimated-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';


export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width: windowWidth } = Dimensions.get('window');

    /** Esperamos que cargue los datos de la API */
    if (isLoading) {
        return (<Loading />)
    }

    const RenderContent = () => {
        return (
            <View style={{ marginTop: top + 20 }}>

                {/* Carousel principal  */}
                <View style={{ height: 440 }} >
                    <Carousel
                        // Just one of the many styles from the Carousel module
                        mode="parallax"

                        // This style prop regards to the carousel container not to the item itself
                        style={{ width: windowWidth, justifyContent: 'center' }}

                        // Paging in false allows to do superfast scroll
                        pagingEnabled={false}
                        // and that superfast scroll stops on multiples of windowSize
                        windowSize={2}
                        // the snap helps to stop exactly in 1 item, no in the middle of two or so
                        snapEnabled


                        // This props are for the item in the middle
                        width={300}
                        height={420}

                        modeConfig={{
                            // How the "main" item will look
                            parallaxScrollingScale: 0.9,
                            // How separate the adjacent items will be
                            parallaxScrollingOffset: 40,
                            // How big the adjacent items will look compared to the "main" item
                            parallaxAdjacentItemScale: 0.75,
                        }}

                        data={nowPlaying}
                        renderItem={({ item }) => <MoviePoster movie={item} />}

                    />
                </View>

                {/* Peliculas populares */}
                <HorizontalSlider title="Populares" movies={ popular }/>

                {/* Peliculas top */}
                <HorizontalSlider title="Top Rated" movies={ topRated }/>

                {/* Peliculas proximas */}
                <HorizontalSlider title="Upcoming" movies={ upcoming }/>
            </View>
        );
    }

    return (
        <ScrollView>
            <RenderContent />
        </ScrollView>
    );
}
