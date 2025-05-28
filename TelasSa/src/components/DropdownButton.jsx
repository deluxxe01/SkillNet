import './DropdownButton.css'

function DropdownButton() {
  return (
    <div className='containerDropdown'>
      <ul className="dropdownButton">
        <button>Sobre Nós</button>
        <button>Perfil</button>
        <button>Home</button>
        <button>portifólios</button>
        <button>Serviços</button>
      </ul>
    </div>
  )
}

export default DropdownButton
