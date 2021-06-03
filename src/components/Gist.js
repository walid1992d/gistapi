import styled from "styled-components";

const Gist = ({ gist }) => <GistWrapper>
    {JSON.stringify(gist)}
</GistWrapper>;

const GistWrapper = styled.div `
border: 1px solid black;
overflow:scroll;
`;
export default Gist
