## expo_plant_app_main
React Native (Expo) Plant App from [here](https://github.com/react-ui-kit/dribbble2react/tree/master/plant-app). <br>
(Corresponding [video](https://youtu.be/gyiwFcrVRCM) and [UI/UX](https://dribbble.com/shots/4569970/attachments/1033490?mode=media)). <br>
<br>
Changes/simplifications are : <br>
- Class components -> Function components with hooks ([Ref](https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component))
- Using React Navigation 5.x
- Simplified styling (instead of custom class components)
- And many comments inline :)
<br>

> This app omits authentication (sign up, sign in, forgot password) <br>
> For a RN app with complete authentication flow using AWS Amplify + Cognito, visit [here](https://github.com/onehwengineer/expo_amplify_init2).
<br>

> **To-do list for later** <br>
> - [ ] Connect to a backend (AWS)
> - [ ] Integrate authentication flow from [here](https://github.com/onehwengineer/expo_amplify_init2) 
> - [ ] Test Expo eject
> - [ ] Integrate BLE features from [here](https://github.com/onehwengineer/rn_ble_manager_v3) 


## App Screenshots
<p float="left">
  <img src="https://user-images.githubusercontent.com/60368973/110685980-b31b0480-8193-11eb-80c8-85ad33b24a9a.png" width="200" />
  <img src="https://user-images.githubusercontent.com/60368973/110685989-b6ae8b80-8193-11eb-8722-1183fd7d1c10.png" width="200" /> 
  <img src="https://user-images.githubusercontent.com/60368973/110685998-b910e580-8193-11eb-8062-b21f031f0653.png" width="200" />
</p>
<p float="left">
  <img src="https://user-images.githubusercontent.com/60368973/110686001-badaa900-8193-11eb-8533-ca73cd48dd90.png" width="200" />
  <img src="https://user-images.githubusercontent.com/60368973/110686007-bc0bd600-8193-11eb-8335-7c9f044ff9bd.png" width="200" /> 
  <img src="https://user-images.githubusercontent.com/60368973/110686011-be6e3000-8193-11eb-9219-713808793b54.png" width="200" />
</p>

## Prerequisites
- Install React Native ([here](https://github.com/onehwengineer/rn_ble_manager_v2) is a step-by-step tutorial)
- Create & launch Expo projects (Refer to Steps [C] & [H] [here](https://github.com/onehwengineer/expo_amplify_init2))

## [A] Clone this repository
- Step-by-step instructions [here](https://github.com/onehwengineer/rn_ble_manager_v2) under "Clone This Repository" section

## [B] Install Dependencies
- Open VSCode by typing `code .` in /expo_plant_app_main -> Opens Terminal within VSCode
  - (alternatively, simply navigate to /expo_plant_app_main in Terminal)
- Install Navigation
  - `expo install @react-navigation/native`
  - `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
- Install Stack Navigator
  - `expo install @react-navigation/stack`
- Install Slider
  - `expo install @react-native-community/slider`

## [C] Run Expo App in Simulator
- In VSCode Terminal, type `expo start`
  - (To run with clear cache, `expo run -c`)
  - (Or if you have yarn installed, `yarn run ios`)
