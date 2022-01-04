import loadingIcon from '../assets/img/layout/loader.gif'

function Loader() {
  return (
    <div className='grid-container'>
      <div className='grid-x grid-padding-x align-center'>
        <div className='medium-5 cell'>
          <div className='site-loader'>
            <img alt='loading' src={loadingIcon}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
