import {MPLocation} from "@mapsindoors/react-native-maps-indoors-google-maps";
import {Button, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import React from "react";

const BoldText = (props: React.PropsWithChildren) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

type NavigationHeaderProps = {
  searchResults: MPLocation[] | undefined;
}
export default function NavigationHeader({searchResults}: NavigationHeaderProps) {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{
          flexDirection: 'row',
          backgroundColor: '#FFA8',
          marginVertical: 10,
          borderColor: Colors.dark,
          borderWidth: 1,
          display: searchResults ? 'flex' : 'none'
        }}>
        <View style={{flex: 1, paddingHorizontal: 5}}>
        </View>
        <Button title={'Query'} onPress={() => {
        }}/>
      </View>
    </View>
  )
}
