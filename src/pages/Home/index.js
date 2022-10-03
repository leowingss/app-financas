import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function Home() {


  const { user, signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Ola {user && user.nome}  </Text>


      <TouchableOpacity onPress={() => signOut(signOut)}>
        <Text>SAIR</Text>
      </TouchableOpacity>

    </View>
  );
}