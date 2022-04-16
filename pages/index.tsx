import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { withLayout } from "../layout/Layout";
import {
    Welcome,
    AboutMe,
    MyResume,
    MyProjects,
    Pricing,
    MyBlog,
    MyClients,
    Contact,
    Map,
} from "../scenes/Home";

import styled from "styled-components";

const Wrapper = styled.div``;

function Home(props: any): JSX.Element {
    const { t } = useTranslation();
    // const store = useSelector((store) => store);
    // console.log("store ->>>", store);

    return (
        <div>
            <Head>
                <title>{t("home:seo.title")}</title>
                <meta name="description" content={t("home:seo.description")} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper id="main">
                <Welcome openMenu={props.openMenu} />
                <AboutMe />
                {/* <MyResume /> */}
                {/* <MyProjects /> */}
                {/* <Pricing /> */}
                {/* <MyBlog /> */}
                {/* <MyClients /> */}
                {/* <Contact /> */}
                {/* <Map /> */}
            </Wrapper>
        </div>
    );
}

export default withLayout(Home);
