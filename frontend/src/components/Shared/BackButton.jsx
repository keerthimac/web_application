import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className='mt-5 btn btn-outline btn-warning rounded-btn'
      onClick={() => navigate(-1)}>
      go back
    </button>
  );
}

export default BackButton;
