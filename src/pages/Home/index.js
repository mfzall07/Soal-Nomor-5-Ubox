import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../Api'
import { Card } from '../../components'
import imageHandle from '../../utils/imageHandle'

const Home = ({navigation}) => {
    const [discover, setDiscover] = useState('')
    const getData = async() => {
        try {
            const response = await Api.Discover()
            setDiscover(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <View style={styles.container}>
            <View style={{ borderBottomWidth: 1 , borderBottomColor: '#2B2B2B', marginBottom: 10 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 900 }}>Movie List</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10, justifyContent: 'space-between' }}>
                    {Object.values(discover).map((data, index) => {
                        const movieID = {
                            id : data.id
                        }
                        return (
                            <Card
                                image={imageHandle(data.poster_path)}
                                title={data.original_title}
                                description={data.overview}
                                onPress={ () => navigation.navigate('Detail', movieID)}
                                key={index}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16
    }
})