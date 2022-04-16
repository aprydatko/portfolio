import { ButtonProps } from "./Button.props";
import { ButtonWrap } from "./Button.styles";

export const Button = ({
    appearance,
    size,
    children,
    type,
    className,
}: ButtonProps): JSX.Element => {
    return (
        <ButtonWrap
            type={type === "submit" ? "submit" : "button"}
            className={`
				${
                    appearance === "primary"
                        ? "primary"
                        : appearance === "ghost"
                        ? "ghost"
                        : "nostroke"
                }
				${size === "large" ? "large" : size === "middle" ? "middle" : "small"}
				${className ? className : ""}
			`}
        >
            {children}
        </ButtonWrap>
    );
};
