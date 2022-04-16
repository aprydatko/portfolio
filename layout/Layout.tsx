import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Container } from "./Layout.styles";
import { MobileMenu } from "../components";

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
    return (
        <Container openMenu={props.openMenu}>
            <MobileMenu {...props} />
            <Header {...props} />
            <div>{children}</div>
            <Footer />
        </Container>
    );
};

export const withLayout = <T extends LayoutProps>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        );
    };
};
