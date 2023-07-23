import React, {useState, useMemo} from 'react'
import User from './User';

// const userData = {
//     id: 1,
//     name: 'Samet',
//     lastName: 'Ertürk'
// }

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Samet')

    console.log('Counter component re-render');

    const userData = useMemo(() => {
        return {
            id: 1,
            name,
            lastName: 'Ertürk'
        }
    }, [name])
   


  return (
    <div>
        {/* <Header count={count < 5 ? count : 5} /> */}
        <User data={userData} />
        <hr/>

        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}>Arttır</button>

        <hr/>
        <button onClick={() => setName(name === 'Samet' ? 'Abdul' : 'Samet')}>Set Name</button>
    </div>
  )
}

export default Counter
