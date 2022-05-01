import React, {useEffect, useState} from 'react';

export default function Time() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div className="App mt-4">
            
            <p className='h3'>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            
            <p className='h4'>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}
