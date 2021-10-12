import { useState, useEffect } from 'react';

function Functional(props) {
    const [exState, setExState] = useState('im a prop');
    useEffect(() => {
        console.log('functional')
    }, [])

    return (
        <div>functional component {exState}</div>

    )
}

export default Functional;