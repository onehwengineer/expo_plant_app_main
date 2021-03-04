import React, {useState} from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image, 
    FlatList, Modal, ScrollView, TouchableOpacity } from 'react-native';

import {formStyles, colors, sizes, weight} from '../styles/Styles'; 
import {welcomeImages} from '../constants/Mocks';

const { width, height } = Dimensions.get('window');


/* You can do either :
    - 1) export default function fxName(){ ... }
    - 2) const fxName = () => { ... }; export default fxName;
*/
export default function WelcomeScreen( {navigation} ) {

    const [showTerms, setShowTerms] = useState(false);
    var scrollX = new Animated.Value(0);

    const renderWelcomeImages = () => {
        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={welcomeImages}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        resizeMode="contain"
                        style={{ width, height: height / 2, overflow: 'visible' }}
                    />
                )}
                onScroll={
                    Animated.event(
                        [{nativeEvent: { contentOffset: { x: scrollX } }}],
                        {useNativeDriver: false}
                    )
                }
            />
        )        
    };

    const renderDots = () => {
        const dotPosition = Animated.divide(scrollX, width);

        return (
            <View style={styles.dotsContainer}>
                {welcomeImages.map((item, index) => {
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

    const renderTermsService = () => {
        return(
            <Modal animationType="slide" visible={showTerms}>
                <View style={styles.ToS_container}>
                    <Text style={{fontSize: sizes.h2, fontWeight: weight.light}}>Terms of Service</Text>

                    <ScrollView style={styles.ToS_block1}>
                        <Text style={styles.ToS_eachLine}>
                        1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.  
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        2. Support for Expo services is only available in English, via e-mail.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                        </Text>
                        <Text style={styles.ToS_eachLine}>
                        10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
                        </Text>
                    </ScrollView>

                    <View style={styles.ToS_block2}>
                        <TouchableOpacity style={[formStyles.btn, {width: '80%'}]} onPress={() => setShowTerms(false)}>
                            <Text style={formStyles.btnText}>
                                I understand 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    };

    return (
        <View style={styles.container}> 
            <View style={styles.block1}>
                <Text style={{fontSize: sizes.h1, textAlign: "center", fontWeight: weight.bold}}>
                    Your Home.
                    <Text style={{color: colors.greenPrimary}}> Greener. </Text>
                </Text>
                <Text style={{fontSize: sizes.h3, color: colors.grayLight, marginTop: sizes.padding / 2}}>
                    Enjoy the experience.
                </Text>
            </View>

            <View style={styles.block2}>
                {renderWelcomeImages()} 
                {renderDots()}
            </View>
            
            <View style={styles.block3}>
                <TouchableOpacity 
                    style={[formStyles.btn, {width: '80%', marginVertical: sizes.padding / 3}]} 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={formStyles.btnText}>Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[formStyles.btn, formStyles.btnShadow, {width: '80%', marginVertical: sizes.padding / 3}]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={[formStyles.btnText, {color: colors.black}]}>Sign Up </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowTerms(true)}>
                    <Text style={styles.ToS_clickToShow}>Terms of Service </Text>
                </TouchableOpacity>
            </View>
            {renderTermsService()}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    block1: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'flex-end',
        //backgroundColor: "yellow" // debug
    },
    block2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    block3: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: "gray" // debug
    },

    dotsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: sizes.base * 6,
        //backgroundColor: "pink" // debug
    },
    dots: {
        backgroundColor: "gray",
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
    },

    ToS_clickToShow: {
        textAlign: "center",
        marginTop: sizes.padding,
        fontSize: sizes.caption,
        color: colors.gray      
    },
    ToS_container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: sizes.padding * 2, 
        paddingHorizontal: sizes.padding,
    },
    ToS_block1: {
        marginVertical: sizes.padding,
    },
    ToS_block2: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: sizes.base / 2,
        //backgroundColor: "cyan" // debug
    },
    ToS_eachLine: {
        fontSize: sizes.caption, 
        color: colors.gray, 
        lineHeight: sizes.lineHeight, 
        marginBottom: sizes.base,
    },
});