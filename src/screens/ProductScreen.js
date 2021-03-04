import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, Animated,
    ScrollView, Dimensions } from 'react-native';

import {colors, sizes, weight} from '../styles/Styles'; 
import {products} from '../constants/Mocks'; 

const { width, height } = Dimensions.get("window");
const product = products[0];


const ProductScreen = ( {navigation} ) => {
    var scrollX = new Animated.Value(0);

    const renderGallery = () => {
        return(
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                data={product.images}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        resizeMode="contain"
                        style={{ width, height: height / 2.8 }}
                    />
                )}
                onScroll={
                    Animated.event(
                        [{nativeEvent: { contentOffset: { x: scrollX } }}],
                        {useNativeDriver: false}
                    )
                }
        />
        );
    };

    const renderDots = () => {
        const dotPosition = Animated.divide(scrollX, width);

        return (
            <View style={styles.dotsContainer}>
                {product.images.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View 
                            key={index}
                            style={[styles.dots, { opacity }]}
                        />
                    )
                })}
            </View>
        )
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.block1}>
                {renderGallery()}
                {renderDots()}
            </View>
            <View style={styles.block2}>
                <Text style={styles.block2a}>
                    {product.name}
                </Text>
                <View style={styles.block2b}   >
                    {product.tags.map(tag => (
                        <Text key={`tag-${tag}`} style={[styles.tag, {fontSize: sizes.caption, color: colors.gray }]}>
                            {tag}
                        </Text>
                    ))}
                </View>
                <Text style={styles.block2c}>
                    {product.description}
                </Text>
                <View style={styles.block2d}>
                    {/* Divider*/}
                </View>

                <View style={styles.block2e}>
                    <Text style={{fontWeight: weight.semibold}}>
                        Gallery
                    </Text>
                    <View style={styles.block2e_gallery}>
                        {product.images.slice(1, 3).map((image, index) => (
                            <Image
                                key={`gallery-${index}`}
                                source={image.source}
                                style={styles.image}
                            />
                        ))}
                        <View style={styles.more}>
                            <Text style={{color: colors.gray}}>
                                +{product.images.slice(3).length}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    block1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: sizes.base * 1,
        //backgroundColor: "pink" // debug
    },
    dots: {
        backgroundColor: "gray",
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
    },

    block2: {
        paddingHorizontal: sizes.base * 2,
        paddingVertical: sizes.padding
    },
    block2a: {
        fontSize: sizes.h2, 
        fontWeight: weight.bold
    },
    block2b: { // Tag
        flex: 0, 
        flexDirection: "row", 
        marginVertical: sizes.base, 
        marginHorizontal: 0
    },
    tag: {
        borderColor: colors.gray2,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: sizes.base,
        paddingHorizontal: sizes.base,
        paddingVertical: sizes.base / 2.5,
        marginRight: sizes.base * 0.625
    },

    block2c: {
        color: colors.black, 
        fontWeight: weight.light, 
        lineHeight: sizes.lineHeight-2
    },
    block2d: { // Divider
        height: 0,
        margin: sizes.base * 2,
        borderBottomColor: colors.grayLight,
        borderBottomWidth: StyleSheet.hairlineWidth,

        marginVertical: sizes.padding * 0.9, 
        marginHorizontal: 0
    },

    block2e: {
        flex: 1
    },
    block2e_gallery: {
        flexDirection: "row", 
        marginVertical: sizes.padding * 0.9, 
        marginHorizontal: 0
    },  
    image: {
        width: width / 3,
        height: width / 3,
        marginRight: sizes.base
    },
    more: {
        flex: 0,
        alignItems: "center", 
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: sizes.radius,  
        backgroundColor: colors.grayLightTransparent,
    }
});


export default ProductScreen;