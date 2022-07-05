import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/write">Write</Link>
      </div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
    </div>
  );
};

export default Nav;
