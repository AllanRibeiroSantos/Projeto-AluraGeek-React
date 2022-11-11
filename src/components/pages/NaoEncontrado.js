import { NaoEncontradoWrapper } from "./styles";

export default function NaoEncontrado() {
  return (
    <NaoEncontradoWrapper >
      <div className='naoencontrado_container'>
        <p className='big'>Ops!</p>
        <p className='small'> A página que você está procurando não foi encontrada.</p>
      </div>
    </NaoEncontradoWrapper >
  )
}