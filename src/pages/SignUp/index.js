import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import {
    Background, Container, Logo, AreaInput, Input, SubmitButton,
    SubmitText, Link, LinkText
} from '../SignIn/styles'
import firebase from '../../services/firebaseConnection';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');



    async function createAccount() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('Cadastro realizado com sucesso!')
            })
            .catch((error) => {
                alert('Erro: ' + error)
            })
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

                <SubmitButton onPress={createAccount}>
                    <SubmitText>
                        Criar Conta
                    </SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    );
}