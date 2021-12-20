import { ButtonDiv } from "./button.style";

export const Button = ({ onPress, className, ...props }) => (
  <ButtonDiv {...props} className={className} onClick={onPress}>
    {props.icon && props.icon}
    <small className="ml-1 md:block hidden">{props.name}</small>
  </ButtonDiv>
);
