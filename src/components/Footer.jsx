import React from 'react'

const Footer = () => {
  var today = new Date();

  return (
    <footer className='container'>
      <div className='row justify-content-center mt-4 mb-4'>
        <div className='col-8'>
          <h1>Team Allocation App - {today.getFullYear()}</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer