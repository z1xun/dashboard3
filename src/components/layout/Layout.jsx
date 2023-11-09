import React from "react";
import Header from "./header/Header";
import styled from "styled-components";
import Title from "../common/Tilte";
import History from "../common/History";
import { Box, Flex } from "@chakra-ui/react";
import Utill from "../common/Utill";

const Layout = ({ title, pagename, children }) => {
    // const { pagename, children } = props;
    return (
        <Wrap>
            <Header />
            <main id="main">
                <Box p="0 0 35px 10px" display="flex" justifyContent="space-between">
                    <div className="left">
                        <History pagename={pagename} />
                        <Title title={title} />
                    </div>
                    <Utill />
                </Box>
                {children}
            </main>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 290px;
    background: var(--secondary-grey-300, #f4f7fe);
    #main {
        min-height: 100vh;
        padding: 50px 20px;
    }
`;

export default Layout;
