import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, Container, Nome, Saldo, Title, List } from "./styles"
import HistoricoList from '../../components/HistoricoList';

export default function Home() {

  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'receita', valor: 1200 },
    { key: '2', tipo: 'despesa', valor: 200 },
    { key: '3', tipo: 'receita', valor: 5840 },
    { key: '4', tipo: 'despesa', valor: 2800 },
    { key: '5', tipo: 'despesa', valor: 800 },
    { key: '6', tipo: 'receita', valor: 410 },

  ]);

  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <Container>
        <Nome> {user && user.nome} </Nome>
        <Saldo>R$ 10,00</Saldo>
      </Container>

      <Title>Últimas movimentações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item} />)}
      />

    </Background>
  );
}