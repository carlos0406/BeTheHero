import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import logoIMG from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'
import styles from './style'




export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoIMG} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>
                        0 Casos.
                        </Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve!</Text>

            <View style={styles.incidentsList}>

                <View style={styles.incidents}>
                    <Text style={styles.incidentsPropety}>
                        ONG:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        APAD
                    </Text>

                    <Text style={styles.incidentsPropety}>
                        CASO:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        Cachorro atropelado
                    </Text>

                    <Text style={styles.incidentsPropety}>
                        VALOR:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        R$ 200.00
                    </Text>

                    <TouchableOpacity style={styles.detailsOP} onPress={() => { }}>
                        <Text style={styles.detailsButton}>Ver Mais detalhes</Text>
                        <Feather name='arrow-right' size={17} color='#e02041' />
                    </TouchableOpacity>

                </View>

                <View style={styles.incidents}>
                    <Text style={styles.incidentsPropety}>
                        ONG:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        APAD
                    </Text>

                    <Text style={styles.incidentsPropety}>
                        CASO:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        Cachorro atropelado
                    </Text>

                    <Text style={styles.incidentsPropety}>
                        VALOR:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        R$ 200.00
                    </Text>

                    <TouchableOpacity style={styles.detailsOP} onPress={() => { }}>
                        <Text style={styles.detailsButton}>Ver Mais detalhes</Text>
                        <Feather name='arrow-right' size={17} color='#e02041' />
                    </TouchableOpacity>

                </View>

                <View style={styles.incidents}>
                    <Text style={styles.incidentsPropety}>
                        ONG:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        APAD
                    </Text>

                    <Text style={styles.incidentsPropety}>
                        CASO:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        Cachorro atropelado
                    </Text>

                    <Text style={styles.incidentsPropety}>
                        VALOR:
                    </Text>

                    <Text style={styles.incidentsValue}>
                        R$ 200.00
                    </Text>

                    <TouchableOpacity style={styles.detailsOP} onPress={() => { }}>
                        <Text style={styles.detailsButton}>Ver Mais detalhes</Text>
                        <Feather name='arrow-right' size={17} color='#e02041' />
                    </TouchableOpacity>

                </View>

            </View>



        </View>
    );
}