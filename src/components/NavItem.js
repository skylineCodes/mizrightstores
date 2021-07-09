import '../styles/nav.css';

const NavItem = ({ title, Icon }) => {
    return (
      <div className='nav__item'>
        <Icon size='30' />
        <p className='icon__text'>{title}</p>
      </div>
    );
}

export default NavItem
