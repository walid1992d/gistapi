import { fireEvent, getByTestId, render } from "@testing-library/react";
import { UsernameContext } from "../contexts/usernameContext";
import Search from "./Search";
const setUsernameMock = jest.fn();

describe("Search Component", ()=> {
    
    it("should render correctly", () => {
        
        expect(getContainer()).toMatchSnapshot();
    });
    describe("Input Field", ()=> {
        it("should call setUserName on Enter Key Up", () => {
            const container = getContainer();
            const input = getByTestId(container, "searchInput");
            input.value="12345";
            fireEvent.keyUp(input, {key: 'Enter'});
            expect(setUsernameMock).toHaveBeenCalledWith("12345");
        });
        it("should not call setUserName on Key Up other then enter", () => {
            const container = getContainer();
            const input = getByTestId(container, "searchInput");
            input.value="12345";
            fireEvent.keyUp(input, {key: 'q'});
            expect(setUsernameMock).not.toHaveBeenCalled();
        });
    })
})

const getContainer = ()=> {
    const {container} = render(
        <UsernameContext.Provider value={{usernameState: '', setUserName: setUsernameMock}}>
            <Search></Search>
        </UsernameContext.Provider>
    )
    return container;
}