import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Description = () => {
    return (
        <View>
            <Text style={{ marginTop: 30, fontSize: 15 }}>Descriptions</Text>
            <Text
                style={{
                    color: 'black',
                    fontSize: 15,
                    marginTop: 15
                }}>Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 bilion worth of NFTs are now sold every week - with NFT...</Text>
            <View style={styles.Avatar}>
                <Image source={require('../assets/Avatar.png')} />
                <Image style={{ marginLeft: -8 }} source={require('../assets/Avatar1.png')} />
                <Image style={{ marginLeft: -8 }} source={require('../assets/Avatar2.png')} />
                <Image style={{ marginLeft: -8 }} source={require('../assets/Avatar3.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Avatar: {
        marginTop: 15,
        flexDirection: 'row',
    },
});

export default Description;