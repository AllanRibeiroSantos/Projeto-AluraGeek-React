import { useContext } from 'react';
import ContextInput from '../../common/context/ContextInput';
import { InputWrapper } from './styles';

export default function Input({ type, placeholder }) {
  const { input, setInput } = useContext(ContextInput);

  function inputHandler(event) {
    const inputValue = event.target.value;

    if (type) {
      type == 'text' && setInput({ ...input, 'text': inputValue });
      type == 'email' && setInput({ ...input, 'email': inputValue });
      type == 'password' && setInput({ ...input, 'password': inputValue });
      type == 'number' && setInput({ ...input, 'number': inputValue });
    }
  }

  // Não apliquei RegEx nos inputs
  return (
    <InputWrapper>
      <input className="form_input"
        type={type}
        placeholder={placeholder}
        onChange={(event) => inputHandler(event)}
      />
    </InputWrapper>
  )
}
