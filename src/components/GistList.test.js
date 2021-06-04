import { render } from '@testing-library/react';
import React from 'react';
import { GistContext } from '../contexts/gistContext';
import GistList from './GistList';
jest.mock('./Gist', ()=> {
    return ()=> <div className="gist"></div>
});
describe("GistList Component", ()=> {
    const list = [{url: '1'}, {url:'2'}]
    it("should render correctly", () => {
        const {container} = render(
            <GistContext.Provider value={{gistListState: list, setGistList:jest.fn()}}>
                <GistList></GistList>
            </GistContext.Provider>
        )
        expect(container).toMatchSnapshot();
        expect(container.querySelectorAll('.gist').length).toEqual(2)
    });
    
})