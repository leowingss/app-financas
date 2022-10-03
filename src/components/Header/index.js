import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonMenu } from './styles';

export default function Header() {

    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Feather name="menu" color='#fff' size={30} />
            </ButtonMenu>
        </Container>
    );
}