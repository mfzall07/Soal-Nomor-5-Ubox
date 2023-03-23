import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Default } from '../../assets';
import Gap from '../Gap';
import moment from 'moment';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardDetail = ({image, title, description, date, popularity, dataGenre}) => {
    return (
        <View style={styles.mainCard}>
            <ImageBackground source={image == null ? Default : {uri:image}} resizeMode="cover" imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }} style={{  flex: 1, padding: 12 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' , alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#2B2B2B', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 900}}>{moment(date).format('DD-MMMM-YYYY')}</Text>
                    </View>
                    <View style={{ backgroundColor: '#b3a420', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 900}}>{!popularity ? 0 : '⭐'+ ' ' + popularity}</Text>
                    </View>
                </View>
            </ImageBackground>
            <Gap height={5}/>
            <View style={{ height: '40%', borderBottomStartRadius: 8, borderBottomEndRadius: 8, paddingHorizontal: 10, flexDirection: 'column' }}>
                <Text style={{ color: '#000000', fontSize: 24, fontWeight: 900 }} numberOfLines={1} >{!title ? '-' : title}</Text>
                <Gap height={5}/>
                <View style={{ display:'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                    {Object.values(dataGenre).map((data, index) => {
                        return (
                            <View key={index} style={{ backgroundColor: 'rgba(43, 43, 43, 0.3)', borderRadius: 3, paddingHorizontal: 10, paddingVertical: 3, marginRight: 5 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 8, fontWeight: 900}}>{data.name}</Text>
                            </View>
                        )
                    })}
                </View>
                <Gap height={10}/>
                <Text style={{ color: '#000000', fontSize: 12 }}>{!description ? '-' : description}</Text>
            </View>
        </View>
    )
}

export default CardDetail

const styles = StyleSheet.create({
    mainCard: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 10,
    }
})