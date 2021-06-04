
import { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import { GistContext } from './contexts/gistContext';
import { UsernameContext } from './contexts/usernameContext';
import GlobalStyles from "./GlobalStyle";
import { getGistForUser, getPublicGists } from './services/gistService';

const App = () => {
  const [usernameState, setUserName] = useState();
  const [gistListState, setGistList] = useState([]);
  const [screenMessage, setScreenMessage] = useState('');
  const usernameProviderValue = useMemo(() => ({ usernameState, setUserName}), [usernameState, setUserName]);
  const gistListProvider = useMemo(() => ({gistListState, setGistList}), [gistListState, setGistList]);
  useEffect( ()=> {
    const fetchData = async() => {
      try {
      let response;
      if(!usernameState) {
        response = await getPublicGists();
      } else {
        response = await getGistForUser(usernameState);
        
      }

      const {status, data, message} = response;
      if(status === 200) {
        if(data.length === 0) {
          setScreenMessage("No Results Found");

        } else {
          setGistList(data);
          setScreenMessage("");
          
        }

      }  else {
        setScreenMessage("Something Went Wrong :(");
      }

     } catch(e) {
      setScreenMessage("Something Went Wrong :(");

     }
    }

    fetchData();
    
  },[usernameState])
  return (

    <Wrapper className="App" data-testid="app">
      <UsernameContext.Provider value={usernameProviderValue} >
      <GistContext.Provider value={gistListProvider}>
      <Header />
      {
        screenMessage ? <ScreenMessageDiv>{screenMessage}</ScreenMessageDiv> :  <GistListWrapper><GistList>  </GistList></GistListWrapper>

      }
     
    
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

const ScreenMessageDiv = styled.div `
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2vw;
  font-size: 2vw;
`

const GistListWrapper = styled.div `
  width: 40%;
  min-width: 500px;
  margin: auto;

  @media (max-width: 500px) {
   width: 90%;
   min-width: unset;
  }
`;

export default App;
