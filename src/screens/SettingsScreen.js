import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, 
    ScrollView, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

import {colors, sizes, weight} from '../styles/Styles'; 
import {profile} from '../constants/Mocks'; 


const SettingsScreen = ( {navigation} ) => {
    const [editing, setEditing] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const [profileState, setProfileState] = useState({});
    const [userNameState, setUserNameState] = useState("");
    const [budget, setBudget] = useState(850);
    const [monthly, setMonthly] = useState(1700);
    const [notifications, setNotifications] = useState(true);
    const [newsletter, setNewsletter] = useState(false);

    useEffect(()=>{
        setProfileState(profile);
    },[isEditable, editing]);

    const toggleEdit = (name) => {
        setEditing(name);
        setIsEditable( !isEditable );
    };

    const renderEdit = (name) => {
        if (editing === name && isEditable) {
          return (
            <TextInput
                style={{color: colors.black, fontWeight: weight.semiBold}}
                placeholder={isEditable ? "Enter new " + name : profile[name]}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => {
                    setUserNameState(text);
                    profileState[name] = text;
                    setProfileState(profileState);
                }}
                editable={isEditable}
                value={userNameState}
                onSubmitEditing={() => alert("Submitted!")}
            />
          );
        }
    
        return <Text style={{fontWeight: weight.semiBold}}>{profileState[name]}</Text>;
    };

    return (
        <View style={styles.container}>
            <View style={styles.block1}>
                <Text style={{fontSize: sizes.h1, fontWeight: weight.bold}}> 
                    Settings 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                    <Image source={profile.avatar} style={styles.avatar} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                {/* keyboardShouldPersistTaps={'handled'} is needed to allow submit (Edit/Save) on the first click*/}
                {/* Otherwise, two clicks are required - 1st to hide keyboard, 2nd to submit */}
                <View style={styles.block2}>
                    <View style={[styles.block2_username, styles.inputRow]}>
                        <View style={{flex:1}}>
                            <Text style={{ color: colors.grayLight, marginBottom: 10 }}>
                                Username
                            </Text>
                            {renderEdit("username")}
                        </View>
                        <Text 
                            style={{fontWeight: weight.semibold, color: colors.greenSecondary}} 
                            onPress={() => toggleEdit("username")}
                        >
                            {(editing === "username" && isEditable) ? "Save" : "Edit"}
                        </Text>
                    </View>

                    <View style={[styles.block2_username, styles.inputRow]}>
                        <View style={{flex:1}}>
                            <Text style={{ color: colors.grayLight, marginBottom: 10 }}>
                                Location
                            </Text>
                            {renderEdit("location")}
                        </View>
                        <Text 
                            style={{fontWeight: weight.semibold, color: colors.greenSecondary}} 
                            onPress={() => toggleEdit("location")}
                        >
                            {(editing === "location" && isEditable) ? "Save" : "Edit"}
                        </Text>
                    </View>

                    <View style={[styles.block2_username, styles.inputRow]}>
                        <View style={{flex:1}}>
                            <Text style={{ color: colors.grayLight, marginBottom: 10 }}>
                                Email
                            </Text>
                            <Text style={{fontWeight: weight.semiBold}}> 
                                {profile.email}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.divider}>
                        {/* Divider*/}
                    </View>

                    <View style={styles.sliders}>
                        <View style={{marginVertical: 10}}>
                            <Text style={{color: colors.grayLight, marginBottom: 10}}>
                                Budget
                            </Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={1000}
                                style={{ height: 19 }}
                                thumbStyle={styles.thumb}
                                trackStyle={{ height: 6, borderRadius: 6 }}
                                minimumTrackTintColor={colors.greenSecondary}
                                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                                value={budget}
                                onValueChange={(value) => setBudget(value)}
                                onSlidingComplete={(value) => alert("Budget : " + Math.floor(value))}
                            />
                            <Text style={{fontSize: sizes.caption, color: colors.gray, textAlign: "right"}}>
                                $1,000
                            </Text>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <Text style={{color: colors.grayLight, marginBottom: 10}}>
                                Monthly Cap
                            </Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={5000}
                                style={{ height: 19 }}
                                thumbStyle={styles.thumb}
                                trackStyle={{ height: 6, borderRadius: 6 }}
                                minimumTrackTintColor={colors.greenSecondary}
                                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                                value={monthly}
                                onValueChange={(value) => setMonthly(value)}
                                onSlidingComplete={(value) => alert("Monthly Cap : " + Math.floor(value))}
                            />
                            <Text style={{fontSize: sizes.caption, color: colors.gray, textAlign: "right"}}>
                                $5,000
                            </Text>
                        </View>
                    </View>

                    <View style={styles.divider}>
                        {/* Divider*/}
                    </View>

                    <View style={styles.toggles}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginVertical: 10}}>
                            <Text style={{color: colors.grayLight, marginBottom: 10}}>
                                Notifications
                            </Text>
                            <Switch
                                //thumbColor={thumbColor}
                                ios_backgroundColor={"rgba(168, 182, 200, 0.30)"}
                                trackColor={{
                                    // false: GRAY_COLOR,
                                    true: colors.greenSecondary
                                }}
                                value={notifications}
                                onValueChange={(value) => {
                                    setNotifications(value);
                                    alert("Notification ON");
                                }}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginVertical: 10}}>
                            <Text style={{color: colors.grayLight, marginBottom: 10}}>
                                Newsletter
                            </Text>
                            <Switch
                                //thumbColor={thumbColor}
                                ios_backgroundColor={"rgba(168, 182, 200, 0.30)"}
                                trackColor={{
                                    // false: GRAY_COLOR,
                                    true: colors.greenSecondary
                                }}
                                value={newsletter}
                                onValueChange={(value) => {
                                    setNewsletter(value);
                                    alert("Newsletter ON");
                                }}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    /*
        !IMPORTANT!
        - FOR ALL BLOCKS (block 1,2,3...), MAINTAIN SAME : paddingHorizontal OR marginHorizontal
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
        //backgroundColor: "green" // debug 
    },
    avatar: {
        height: sizes.base * 2.2,
        width: sizes.base * 2.2
    },

    block2: {
        marginTop: sizes.base * 0.7,
        paddingHorizontal: sizes.base * 2,
        //backgroundColor: "yellow" // debug
    },
    block2_username: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: "space-between", 
        marginVertical: 10
    },
    inputRow: {
        alignItems: "flex-end"
    },

    divider: { // Divider
        height: 0,
        borderBottomColor: colors.grayLight,
        borderBottomWidth: StyleSheet.hairlineWidth,

        marginVertical: sizes.base, 
        //marginHorizontal: sizes.base,
    },

    sliders: {
        flex: 1,
        marginTop: sizes.base * 0.7,
        // backgroundColor: "purple" // debug
    },
    thumb: {
        width: sizes.base,
        height: sizes.base,
        borderRadius: sizes.base,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: colors.greenSecondary
    },

    toggles: {
        flex: 1,
        marginVertical: 10,
        //paddingHorizontal: theme.sizes.base * 2,
        //backgroundColor: "purple" // debug
    }
});


export default SettingsScreen;