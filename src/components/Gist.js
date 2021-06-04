import styled from "styled-components";
import Octicon from 'react-octicon'
const formatDate = (rawDate) => {
    const date = new Date(rawDate);

    return `${date.getMonth()+1}/${date.getDay()}/${date.getFullYear()}`
}
const Gist = ({ gist }) => <GistWrapper>
    <Header>
        <Creator>
        <IconWrapper  href={gist.owner.html_url} target="__blank">
        <Avatar src={gist.owner.avatar_url}></Avatar>
        <Name>{gist.owner.login}</Name>
        </IconWrapper>
   
        </Creator>
        <IconsWrapper>

            <IconWrapper>
            <Octicon name="code"></Octicon>
                <IconTitle> {Object.keys(gist.files).length} Files</IconTitle>
            </IconWrapper>
            <IconWrapper href={gist.forks_url} target="__blank">
            <Octicon name="repo-forked"></Octicon>
                <IconTitle> Forks</IconTitle>
            </IconWrapper>
            <IconWrapper  href={gist.comments_url} target="__blank">
            <Octicon name="comment"></Octicon>
                <IconTitle> Comments</IconTitle>
            </IconWrapper>
            <IconWrapper href={gist.owner.starred_url} target="__blank">
            <Octicon name="star" ></Octicon>
                <IconTitle> Stars</IconTitle>
            </IconWrapper>
        </IconsWrapper>

        
        
    </Header>
    <Dates>
        Created at: {formatDate(gist.created_at)} &nbsp; &nbsp; Last updated: {formatDate(gist.updated_at)}
    </Dates>
    <Description>
        {gist.description}
    </Description>

    <FilesWrapper>
        {Object.keys(gist.files).map((fileName) => {
            const currentFile = gist.files[fileName];
            return ( 
            <FileWrapper key={fileName} href={currentFile.raw_url} target="__blank">
            <Octicon name="file" ></Octicon>
                <IconTitle> {currentFile.filename} </IconTitle>
            </FileWrapper>
            );
        })}
    </FilesWrapper>
</GistWrapper>;

const GistWrapper = styled.div `
width:100%;
margin-top: 1vw;
border-bottom: 1px solid lightgray;
padding-bottom: 3vw;
`;

const Header = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;


`
const Creator = styled.div `
    display:flex;
    align-items: center;

`;
const Avatar = styled.img `
object-fit: contain;
width: 2vw;
height: 2vw;
border-radius: 50%;
margin-right: 0.5vw
`

const Name = styled.div `
 font-size: 1vw;
 color: #2467cf;
`
const IconsWrapper = styled.div `
    width: 50%;
    display: flex;
    justify-content: space-between;
`
const IconWrapper = styled.a `
color: #2467cf;
display: flex;
align-items: center;
font-size: 1vw;
cursor: pointer;
text-decoration: none;

`

const IconTitle = styled.div `
margin-left: 0.25vw;
font-size: 0.75vw;

`

const Dates = styled.div `
    font-size: 0.75vw;
    margin-top: 0.5vw;
`

const Description = styled.div `
    font-size: 1vw;
    margin-top: 1vw;
`
const FilesWrapper = styled.div `
margin-top: 0.75vw;
display: flex;
flex-wrap: wrap;

`
const FileWrapper = styled(IconWrapper) `
    margin-left: 1vw;
`;
export default Gist
