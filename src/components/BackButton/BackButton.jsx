import { useNavigate } from 'react-router-dom';
export default function BackButton({ location }) {
  let navigate = useNavigate();
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <button type="button" onClick={onGoBack}>
      Go back
    </button>
  );
}
