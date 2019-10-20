import React from 'react';
import Main from './pages/Main';
import styled from 'styled-components';

export const AppWrapper = styled.div`
  max-width:1480px;
  width:100%;
  margin: 0 auto;
`;


function App() {
    return (
   
        <AppWrapper>
            <Main />
        </AppWrapper>
   

    );
}

export default App;
