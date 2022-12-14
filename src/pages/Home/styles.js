import styled from "styled-components/native";

export const Background = styled.View`
flex:1;
background-color: #131313;

`;

export const Container = styled.View`
margin-left: 15px;
margin-bottom: 25px;

`;

export const Nome = styled.Text`
font-size: 18px;
color: #fff;
font-style: italic;
`;

export const Saldo = styled.Text`
margin-top: 5px;
font-size: 30px;
color: #fff;
font-weight: bold;

`;

export const Title = styled.Text`
margin-left: 5px;
color: #00b94a;
`;

export const Area = styled.View`
flex-direction: row;
margin-left: 15px;
align-items: baseline;
`;


export const List = styled.FlatList.attrs({
    marginHorizontal: 15,
    contentContainerStyle: {
        paddingBottom: 80,
        flexDirection: "column-reverse",
    }

})`
padding-top: 15px;
background-color: #fff;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin: 0 8px;
`;
