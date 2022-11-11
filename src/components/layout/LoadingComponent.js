import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { LoadingWrapper } from './styles';

export default function LoadingComponent() {
  return (
    <LoadingWrapper >
      {/* Mudar esse icone por um gif */}
      <AiOutlineLoading3Quarters style={{ fontSize: '8rem' }} />
      <p>CARREGANDO...</p>
    </LoadingWrapper >
  )
} 