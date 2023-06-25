import * as Font from "expo-font";

 
export default useFonts = async () =>
  await Font.loadAsync({
    'Open-Sans': require('../utils/fonts/Open_Sans/openSans.ttf'),
  })