import React, { useEffect, useState } from 'react'
import Gist from './Gist';

const GistList = (props) => {
return (
<>
{
    props.list.map(element => {
        return <Gist key={element.url} gist={element}></Gist>;
    })
}
</>
);

}

export default GistList
