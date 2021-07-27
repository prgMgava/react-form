import { InputContainer } from "./styles";

export const Input = ({
  label,
  icon: Icon,
  name,
  register,
  error,
  ...rest
}) => {
  return (
    <div>
      <div className="label">
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isError={!!error}>
        {Icon && <Icon size={20} />} 
        <input {...register(name)} {...rest} />
      </InputContainer>
    </div>
  );
};
