import React from 'react'

function Header({increment}) {
  console.log('Header component re-render');

  return (
    <div>
      Header 
     
      {/* burdan da her iki component de artırma işlemi yapmak için bu şekilde bir prop yazdık. */}
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default React.memo(Header)
