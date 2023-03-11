

function Header(){
    return(
        <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <a href="#" className="brand">あふぃかす除外検索</a>
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul className="nav__wrapper">
              <li className="nav__item"><a href="/">Home</a></li>
              <li className="nav__item"><a href="/exclusions">アフィカスリスト</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}
export default Header