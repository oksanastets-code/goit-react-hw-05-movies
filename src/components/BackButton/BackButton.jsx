import { useNavigate } from 'react-router-dom';
import { HiArrowLeft} from 'react-icons/hi'
import { GoBackButton, GoBackButtonLabel } from './BackButton.styled';
export default function BackButton({ location }) {
  let navigate = useNavigate();
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <GoBackButton type="button" onClick={onGoBack}>
      <HiArrowLeft />
      <GoBackButtonLabel>RETURN</GoBackButtonLabel>
    </GoBackButton>
  );
}
