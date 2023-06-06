import React from 'react'

function SearchBar({placeholder}) {
  return (
    <>
    <div style={{width: '100%', backgroundColor: '', padding: '0px 30px 50px ', display:'flex', gap: '10px'}}>
        <input type="text" style={{width:'300px', padding: '10px', borderRadius: '10px', border:'1px white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px'}} placeholder={`Enter the ${placeholder}`}/>
        <button className='btn' style={{padding:'8px', backgroundColor: '#ffff', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', color: '#00A8CA', borderRadius: '8px', fontWeight:'bolder'}}>Search</button>
    </div>
    </>
  )
}

export default SearchBar