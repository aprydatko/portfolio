import React from "react";
import { SocialProps } from "./Social.types";
import { Container, Wrapper, Link } from "./Social.styles";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export const Social = ({
    icons,
    icon,
    openMenu,
    trigger,
    className,
    themeName,
}: SocialProps): JSX.Element => {
    const getIcon = (icon: string): JSX.Element => {
        switch (icon) {
            case "linkendin":
                return (
                    <Link
                        className={className}
                        href={"https://www.linkedin.com/in/aprydatko"}
                        target="_blank"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn className="linkendin" />
                    </Link>
                );
            case "gmail":
                return (
                    <Link
                        className={className}
                        href={"mailto:artyrpridatko@gmail.com"}
                        title="Gmail"
                    >
                        <RiMailFill className="gmail" />
                    </Link>
                );
            default:
                return (
                    <Link
                        className={className}
                        href={"https://github.com/aprydatko"}
                        target="_blank"
                        title="GitHub"
                    >
                        <FaGithub className="github" />
                    </Link>
                );
        }
    };
    return (
        <Container>
            {icon && <Wrapper>{getIcon(icon)}</Wrapper>}
            {icons &&
                icons.map((it, index) => (
                    <Wrapper key={index}>{getIcon(it)}</Wrapper>
                ))}
        </Container>
    );
};
