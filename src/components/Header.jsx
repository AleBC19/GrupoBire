import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="bg-orange-200 py-2 flex items-center justify-around content-around">
        <img src={logo} alt="" />
        <div className="text-center">
            <h1 className="font-black text-4xl">Bire Patrimonial</h1>
            <p className="font-semibold">Bienestar para tu futuro</p>
        </div>
        <a href="#" className='font-semibold hover:text-white'>Contactanos</a>
    </header>
  )
}

export default Header