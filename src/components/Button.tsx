type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps): JSX.Element =>
  (
    <button>{children}</button>
  );

export default Button;
