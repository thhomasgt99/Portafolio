import React from 'react';

const Header = ()=>{
  React.useEffect(() => {
		const menuVisible = document.querySelector('.menu')
		menuVisible.addEventListener('click', () => {
			const menuClick = document.querySelector('#menu')
      menuClick.style.display = 'flex'
		})
	}, [])

  return (
    <header className="header">
      <div className="subtitle">THOMAS BERNAL</div>
      <nav>
        <ul>
          <li><i class="fa-solid fa-screwdriver-wrench"></i></li>
          <li>En construcción</li>
        </ul>
      </nav>
      <div className="menu">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
    </div>
  </header>
  )
}

export default Header