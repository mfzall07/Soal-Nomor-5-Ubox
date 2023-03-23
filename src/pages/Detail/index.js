import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Api from '../../Api'
import { CardDetail, Gap } from '../../components'
import imageHandle from '../../utils/imageHandle'

const Detail = ({navigation, route}) => {
    const movie_id = route.params
    const [detailData, setDetailData] = useState('')
    const [genre, setGenre] = useState('')
    const [prodCompanies, setProdCompanies] = useState('')
    const [prodCountry, setProdCountry] = useState('')

    const getData = async() => {
        try {
            const response = await Api.DetailDiscover(movie_id.id)
            setDetailData(response.data)
            setGenre(response.data.genres)
            setProdCompanies(response.data.production_companies)
            setProdCountry(response.data.production_countries)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 900 }} numberOfLines={1} >Back To Home</Text>
            </TouchableOpacity>
            <Gap height={20}/>
            <CardDetail
                title={detailData.original_title}
                description={detailData.overview}
                image={imageHandle(detailData.poster_path)}
                date={detailData.release_date}
                dataGenre={genre}
                popularity={detailData.popularity}
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16
    }
})