import Logo from '../assets/img/layout/logo.png'

function Footer() {
  return (
    <footer className='wrapper-footer'>
      <div className='grid-container'>
        <div className='grid-x grid-padding-x'>
          <div className='medium-12 text-center cell'>
            <img className='logo' alt='Sturit Movies footer logo' src={Logo} />
            <p>&copy; 2021 Sturit Movies</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
