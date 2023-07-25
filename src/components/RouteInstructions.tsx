import {Button, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import { MPRoute, MPRouteLeg } from "@mapsindoors/react-native-maps-indoors-google-maps";
import RouteInstructionLeg from "./RouteInstructionLeg";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function RouteInstructions({route, goToPage, onPrevious, onNext}: {route: MPRoute|undefined, goToPage: number|undefined, onPrevious: (()=>void)|undefined, onNext: (()=>void)|undefined}) {
  return <View style={{padding: 5, flexDirection: 'column', height: '60%'}}>
    <Text style={{color: Colors.dark}}>legs: {route?.legs?.length}</Text>
    <View style={{flexDirection: 'column', flex: 1}}>
    </View>
    <View>
      <Button title="next" onPress={onNext}/>
      <Button title="previous" onPress={onPrevious}/>
    </View>
  </View>
}
