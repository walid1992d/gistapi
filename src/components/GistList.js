import React, { useEffect, useState } from 'react'

const GistList = (props) => {
return (
<div>
{
    props.list.map(element => {
        return <div key={element.url}>{JSON.stringify(element)}</div>;
    })
}
</div>
);

}

export default GistList
