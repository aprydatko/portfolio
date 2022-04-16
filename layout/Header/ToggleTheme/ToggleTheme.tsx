import React from "react";
import { BsFillMoonFill, BsBrightnessHighFill } from "react-icons/bs";
import { ToggleThemeProps } from "./ToggleTheme.props";
import { Button } from "./ToggleTheme.styles";

const ToggleTheme = (props: ToggleThemeProps): JSX.Element => {
    return (
        <Button
            onClick={() =>
                props.theme === "dark"
                    ? props.toggleTheme("dark")
                    : props.toggleTheme("light")
            }
            title={
                props.theme !== "dark"
                    ? "Изменить на тёмную тему"
                    : "Изменить на светлую тему"
            }
        >
            {props.theme === "dark" && (
                <BsBrightnessHighFill className="dark-icon" />
            )}
            {props.theme === "light" && (
                <BsFillMoonFill className="light-icon" />
            )}
        </Button>
    );
};

export default ToggleTheme;
