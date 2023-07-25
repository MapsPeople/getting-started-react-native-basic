import {GestureHandlerRootView} from "react-native-gesture-handler";
import MapsIndoors, {
  MapControl,
  MapView, MPDirectionsRenderer,
  MPDirectionsService,
  MPFilter,
  MPLocation, MPMapConfig,
  MPQuery, MPRoute
} from "@mapsindoors/react-native-maps-indoors-google-maps";
import {Button, NativeEventEmitter, Text, useColorScheme, useWindowDimensions, View} from "react-native";
import SearchBox from "../components/SearchBox";
import BottomSheet from "@gorhom/bottom-sheet";
import NavigationHeader from "../components/NavigationHeader";
import SearchResults from "../components/SearchResults";
import RouteInstructions from "../components/RouteInstructions";
import React, {useEffect, useRef, useState} from "react";

export default function MapScreen({navigation, route}) {

  const [mapControl, setMapControl] = useState<MapControl>()

  const bottomSheet = useRef<BottomSheet>();

  const {width, height} = useWindowDimensions();

  return (
      <GestureHandlerRootView style={{flex:1, flexGrow:1}}>
        <BottomSheet ref={bottomSheet} snapPoints={['15%', '60%']} index={-1} enablePanDownToClose={true}>
        </BottomSheet>
      </GestureHandlerRootView>
  );
}
