import React, {useState, useMemo, useCallback} from 'react'
// import User from './User';
import Header from './Header';


// const userData = {
//   id: 1,
//   name: 'Samet',
//   lastName: 'Ertürk'
// }

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Samet')

    console.log('Counter component re-render');

    //ben ne zaman name'nin değerini değiştiririm. O zaman useMemo'nun referansı değişir. ve o zaman User componenti yeniden re render edilir.
    // const userData = useMemo(() => {
    //     return {
    //         id: 1,
    //         name,
    //         lastName: 'Ertürk'
    //     }
    // }, [name])


    //sonucun her zaman sabit olmaması için previous state kullanmamız gerekir
    // const increment = useCallback(() => {
    //   setCount(count+1);  //setCount(1)
    // }, [])


    const increment = useCallback(() => {
      setCount((prev) => prev+1);
    }, [])


    //her defasında referansı Header componentine gitmemesi için useCallback'i kullanmamız gerekir.
    // const increment = () => {
    //   setCount(count+1);
    // }

   

  return (
    <div>
        <Header increment={increment} />

        {/* useMemo kullanıldı. */}
        {/* <User data={userData} /> */}
        <hr/>

        <h2>{count}</h2>
        {/* useMemo kullanıldı */}
        {/* <button onClick={() => setCount(count+1)}>Arttır</button> */}

        <button onClick={increment}>Arttır</button>

        {/* <hr/> 
        <button onClick={() => setName(name === 'Samet' ? 'Abdul' : 'Samet')}>Set Name</button> */}
    </div>
  )
}

export default Counter
