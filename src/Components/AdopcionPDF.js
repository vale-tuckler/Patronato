import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from  '@react-pdf/renderer';
import styled from 'styled-components';
import FormularioAdopcion from './FormularioAdopcion.js';

const Styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        color: 'black'
    },
    section:{
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const AdopcionPDF = (NuevaR) => { //NuevaP = Nueva pregunta    NuevaR = Nueva Respuesta

    const [respuesta, setResp] = useState ("Juan");

    //Wrapper con styled-components
    const Wrapper = styled.div `
        color: black;
    `;
return(
    <Wrapper>
        <Page size="A4" style={Styles.page}>
            <View style={Styles.section}>
                <Text>
                    <h1>Datos del adoptante</h1>
                        `1. Nombre del adoptante: {setResp(NuevaR)}`
                </Text>
            </View>
            <View style={Styles.section}>
                <Text>
                    `2. Dirección: {}`
                </Text>
            </View>
        </Page>
    </Wrapper>
    );
}
export default AdopcionPDF;