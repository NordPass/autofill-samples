import { useNavigate } from 'react-router-dom';

export const LoginSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-4xl">Login Success</h1>
      <p className="text-lg">You have successfully logged in.</p>
      <button className="btn btn-outline mt-3" type="button" onClick={() => navigate('/login')}>
        Back to login
      </button>
    </div>
  );
};
