import { act, findByTestId, render } from '@testing-library/react';
import App from './App';
import * as gistService from './services/gistService';
jest.mock('./components/Header', () => {
  return ()=> <div id="header"></div>
});
jest.mock('./components/GistList', () => {
  return ()=> <div id="list"></div>
});
describe('App', () => {
  it('should render correctly if fetching gists succeeds', async()=> {
    jest.spyOn(gistService,'getPublicGists').mockImplementation(() => {
      return {
        status: 200,
        data: [{}],
      }

  })
  let container
  await act(()=> {
     container = render(<App />).container;

  })
      expect(container).toMatchSnapshot();
  
  

  });
  it('should display error if fetching gists fails', async ()=> {
    jest.spyOn(gistService,'getPublicGists').mockImplementation(() => {
      return {
        status: 400,
        data: [],
      }
    });

      let container
      await act(()=> {
         container = render(<App />).container;
    
      });
      expect(container).toMatchSnapshot();

   
        

  });
  it('should display no results message if gits result is empty', async ()=> {
    jest.spyOn(gistService,'getPublicGists').mockImplementation(() => {
      return {
        status: 200,
        data: [],
      }
    });

      let container
      await act(()=> {
         container = render(<App />).container;
    
      });
      expect(container).toMatchSnapshot();

   
        

  });

});
