
import { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import { GistContext } from './contexts/gistContext';
import { UsernameContext } from './contexts/usernameContext';
import GlobalStyles from "./GlobalStyle";
import { getGistForUser, getPublicGists } from './services/gistService';

const App = () => {
  const [username, setUserName] = useState();
  const [gistList, setGistList] = useState();
  const usernameProviderValue = useMemo(() => ({username, setUserName}), [username, setUserName]);
  const gistListProvider = useMemo(() => ({gistList, setGistList}), [gistList, setUserName]);
  useEffect(async ()=> {
    if(!username) {
      setGistList(await getPublicGists());
    } else {
      setGistList(await getGistForUser(username));

    }
  },[username])
  return (

    <Wrapper className="App" data-testid="app">
      <UsernameContext.Provider value={usernameProviderValue} >
      <GistContext.Provider value={gistListProvider}>
      <Header />

      </GistContext.Provider>

      </UsernameContext.Provider>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
