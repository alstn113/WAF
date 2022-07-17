import { Link } from 'react-router-dom';
import useAuthStore from '@libs/store/useAuthStore';

const Navbar = () => {
  const { currentUser, logout } = useAuthStore();

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/board">Board</Link>
      </div>
      <div>
        <Link to="/board/post/write">Write</Link>
      </div>
      <div>
        <Link to="/form/model-view">Model View</Link>
      </div>
      <div>
        <Link to="/my-page">My Page</Link>
      </div>
      {currentUser ? (
        <div>
          <div>{currentUser?.username}</div>
          <button onClick={() => logout()}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              window.location.href = 'http://localhost:8080/auth/github';
            }}
          >
            GITHUB
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
