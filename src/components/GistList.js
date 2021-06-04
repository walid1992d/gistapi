import React, { useEffect, useState, useContext } from 'react'
import { GistContext } from '../contexts/gistContext';
import Gist from './Gist';

const GistList = () => {
    const {gistListState} = useContext(GistContext);

  
return (
<>
{
    gistListState.map(element => {
        return <Gist key={element.url} gist={element}></Gist>;
    })
}
</>
);

}

export default GistList
