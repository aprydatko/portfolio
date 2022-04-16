import { HtagProps } from "./Htag.props";
import { H1, H2, H3, H4 } from "./Htag.style";

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
    switch (tag) {
        case "h1":
            return <H1 className={className}>{children}</H1>;
        case "h2":
            return <H2 className={className}>{children}</H2>;
        case "h3":
            return <H3 className={className}>{children}</H3>;
        case "h4":
            return <H4 className={className}>{children}</H4>;
        case "h5":
            return <h5 className={className}>{children}</h5>;
        default:
            return <></>;
    }
};
