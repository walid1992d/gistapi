
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
  const gistListProvider = useMemo(() => ({gistListState, setGistList}), [gistListState, setUserName]);
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
        screenMessage ? <div>{screenMessage}</div> :  <GistList list={gistListState}>  </GistList>

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

export default App;
