export const Input = ({
  label,
  icon: Icon,
  name,
  register,
  error,
  ...rest
}) => {
  return (
    <Container>
      <div className="label">
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isError={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
