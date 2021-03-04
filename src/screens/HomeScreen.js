import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, 
    ScrollView, Dimensions } from 'react-native';

import {colors, sizes, weight} from '../styles/Styles'; 
import {categories_mocks, profile} from '../constants/Mocks'; 

const { width } = Dimensions.get("window");
const tabs = ["Products", "Inspirations", "Shop"];
    // TAB NAMES SHOULD BE CONSISTENT WITH categories_mocks.tags

const HomeScreen = ( {navigation} ) => {
    /* Use useState() for vars that will be updated via interaction with the screen */
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        setCategories(categories_mocks);
    },[]);

    const handleTab = (tab) => {
        const filtered = categories_mocks.filter(category =>
            category.tags.includes(tab.toLowerCase())
        );
        
        setActiveTab(tab);
        setCategories(filtered);
    };

    const renderTab = (tab) => {
        const isActive = activeTab === tab;
    
        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => handleTab(tab)}
                style={[styles.tab, isActive ? styles.activeTab : null]}
            >   
                {!isActive && (
                    <Text style={{fontSize: sizes.base, color: colors.gray}}>
                        {tab}
                    </Text>
                )}
                {isActive && (
                    <Text style={{fontSize: sizes.base, color: colors.greenSecondary}}>
                        {tab}
                    </Text>
                )}
          </TouchableOpacity>
        );
    }

    const renderCards = (category) => {
        return(
            <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate("Explore", {category})}
            >
                <View style={styles.card}> 
                    <View style={styles.badge}>
                        <Image source={category.image} />
                    </View>
                    <Text style={{fontWeight: weight.semibold, lineHeight: sizes.base * 1.5}}>
                        {/* lineHeight : Dictates HEIGHT of card, up to maxHeight (1 of 2) */}
                        {category.name}
                    </Text>
                    <Text style={{color: colors.gray, fontSize: sizes.caption}}>
                        {category.count} products
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.block1}>
                <Text style={{fontSize: sizes.h1, fontWeight: weight.bold}}> 
                    Home 
                </Text>
                <TouchableOpacity onPress={() => alert("Navigate to Settings")}>
                    <Image source={profile.avatar} style={styles.avatar} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.block2}>
                {/* Products, Inspirations, Shop, ... */}
                {tabs.map(tab => renderTab(tab))}
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: sizes.base * 2}}
            >
                <View style={styles.block3}>
                    {/* Plants, Seeds, Flowers, ... */}
                    {categories.map(category => renderCards(category))}
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    /*
        !IMPORTANT!
        - FOR ALL BLOCKS (block 1,2,3), MAINTAIN SAME : paddingHorizontal OR marginHorizontal
    */

    container: {
        flex: 1,
        marginTop: sizes.headerHeight, 
            // Header NOT shown in HomeScreen -> 
            // But give margin to make other screens (with Header) align vertically
        //backgroundColor: "orange" // debug 
    },
    block1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingHorizontal: sizes.base * 2,
    },
    avatar: {
        height: sizes.base * 2.2,
        width: sizes.base * 2.2
    },

    block2: {
        flexDirection: "row",
        borderBottomColor: colors.grayLight,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: sizes.base * 2,
        marginHorizontal: sizes.base * 2,
            // Here, marginHorizontal is used instead of paddingHorizontal
            // Because we need an underline 
            // If padding used, then underline would extend to L/R edges of screen
        //backgroundColor: "blue" // debug 
    },
    tab: {
        marginRight: sizes.base * 2,
        paddingBottom: sizes.base
    },
    activeTab: {
        borderBottomColor: colors.secondary,
        borderBottomWidth: 3
    },

    block3: {
        flexDirection: "row",
        justifyContent: "space-between",

        flexWrap: "wrap",
        paddingHorizontal: sizes.base * 2, // Dictates L/R spacing between cards
        //backgroundColor: "pink" // debug
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: colors.white, //debug "purple"
        borderRadius: sizes.radius,
        padding: sizes.base * 1.5, // Dictates HEIGHT/WIDTH of card (2 of 2) 
        marginBottom: sizes.base, // Dictates T/B spacing between cards

        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2,

        // This should be dynamic based on screen width
        // Formula : 1/2 * ( [Screen width] - [block3 L/R padding x 2] - [some space] )
        minWidth: (width - sizes.base * 2 * 2 - sizes.base) / 2,
        maxWidth: (width - sizes.base * 2 * 2 - sizes.base) / 2,
        maxHeight: (width - sizes.base * 2 * 2 - sizes.base) / 2
    },  
    badge: {
        alignItems: "center",
        justifyContent: "center",

        height: 50,
        width: 50,
        borderRadius: 50,

        backgroundColor: colors.greenLightTransparent,
    },
});


export default HomeScreen;