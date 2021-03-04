import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, Image,
    TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

import {colors, sizes, weight, formStyles} from '../styles/Styles'; 
import {explore_images} from '../constants/Mocks'; 

const { width, height } = Dimensions.get("window");


const ExploreScreen = ( {navigation} ) => {

    const [searchString, setSearchString] = useState(null);

    const renderSearch = () => {
        return(
            <View style={styles.searchBlock}>
                <TextInput
                    style={styles.searchInput}
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Search"
                    placeholderTextColor={colors.grayLight}
                    onChangeText={(text) => setSearchString(text)}
                    value={searchString}
                    onSubmitEditing={() => alert("Submitted!")}
                />
            </View>
        );
    };

    const renderImage = (img, index) => {
        
        const imgSizes = Image.resolveAssetSource(img);
            // For local images, use resolveAssetSource()
            // For remote image, use getSize()
        const imgFullWidth = width - sizes.base * 2 * 2;
            // Formula : [Screen width] - [block2 L/R padding x 2], see Stylesheet also
        const imgResized = imgSizes.width / imgFullWidth * 100;
        const imgWidth = imgResized > 75 ? imgFullWidth : imgSizes.width * 1.1;
            // "* 1.1" dictates the horizontal margin between images
        
        return(
            <TouchableOpacity
                key={`img-${index}`}
                onPress={() => navigation.navigate("Product")}
            >
                <Image
                    source={img}
                    style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
                />
            </TouchableOpacity>
        );
    };

    const renderExplore = () => {
        const mainImage = explore_images[0];

        return(
            <View style={styles.block2a}>
                <TouchableOpacity
                    style={[styles.image, styles.mainImage]}
                    onPress={() => navigation.navigate("Product")}
                >
                    <Image source={mainImage} style={[styles.image, styles.mainImage]} />
                </TouchableOpacity>
                <View style={styles.otherImages}>
                    {explore_images.slice(1).map((img, index) => renderImage(img, index))}
                </View>
            </View>
        );
    };

    const renderFooter = () => {
        return(
            <LinearGradient
                style={styles.footer}
                locations={[0.5, 1]}
                colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"]}
            >
                <TouchableOpacity 
                    style={[formStyles.btn, {width: width / 3}]} 
                    onPress={() => alert("Do filtering here!")}
                >
                    <Text style={formStyles.btnText}>Filter </Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    };

    return(
        <View style={styles.container}>
            <View style={styles.block1}>
                <Text style={{fontSize: sizes.h1, fontWeight: "bold"}}> 
                    Explore 
                </Text>
                {renderSearch()}
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.block2}>
                {renderExplore()}
            </ScrollView>
            {renderFooter()}
        </View>
    );
};


const styles = StyleSheet.create({
    /*
        !IMPORTANT!
        - FOR ALL BLOCKS (block 1,2,3), MAINTAIN SAME : paddingHorizontal OR marginHorizontal
            - (sizes.base * 2)
    */

    container: {
        flex: 1,
        //backgroundColor: "orange" // debug 
    },
    block1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: sizes.base * 2,
        paddingBottom: sizes.base * 2,
        //backgroundColor: "green", //debug
    },

    block2: {
        marginHorizontal: sizes.base * 2,
        //backgroundColor: "yellow" // debug
    },
    block2a: {
        flex: 1,
        marginBottom: height / 3,
        // backgroundColor: "orange" // debug
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        marginBottom: sizes.base, // Vertical distance between images
        borderRadius: 4
    },
    mainImage: {
        // Formula : [Screen width] - [block2 L/R padding x 2]
        minWidth: width - sizes.base * 2 * 2,
        minHeight: width - sizes.base * 2 * 2, // Make the same as width
    },
    otherImages: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },

    footer: {
        position: "absolute",
        bottom: 0,
        height: height * 0.1,
        width,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: sizes.base * 4,
        overflow: "visible",
        //backgroundColor: "skyblue" // debug
    },

    searchBlock: {
        flex: 0.6, // width of search box
        justifyContent: "center",
        //backgroundColor: "pink" // debug
    },
    searchInput: {
        height: sizes.base * 2,
        paddingLeft: sizes.base / 1.333,
        paddingRight: sizes.base * 1.5,
        
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: sizes.radius,
        borderColor: "rgba(142, 142, 147, 0.06)",
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        
        fontSize: sizes.caption,
        fontWeight: weight.semibold,
        color: colors.black,
        //backgroundColor: "cyan" // debug
    },
});


export default ExploreScreen;