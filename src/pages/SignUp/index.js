import React, { useState, useContext } from 'react';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import {
    Background, Container, Logo, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
} from '../SignIn/styles'
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);


    function handleSignUp() {
        signUp(email, password, nome);
    }


    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>


                <AreaInput>
                    <Input
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff" />
                        ) :
                            (
                                <SubmitText>
                                    Criar Conta
                                </SubmitText>
                            )
                    }

                </SubmitButton>

            </Container>
        </Background>
    );
}