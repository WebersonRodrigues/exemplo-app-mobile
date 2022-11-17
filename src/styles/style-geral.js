import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #ddd;
    align-items: center;
    justify-content: center;
`;

const MeuText = styled.Text`
    font-size: ${props => props.fonte || 18};
    color: ${props => props.cor || "blue"};
`;

const MeuButton = styled.Button`
    color: #fff;
    background-color:blue;
    padding: 20px;
`;

export { 
    Container,
    MeuText,
    MeuButton
}