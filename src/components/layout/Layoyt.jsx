import React from 'react';
import Header from './header/Header';
import styled from 'styled-components';

// const Layout은 꼭 대문자로 해야지만 컴포넌트라고 인식을 한다 소문자는 html로 인식함

const Layout = (props) => {
    return (
        <Wrap>
            <Header />
            <main id="main">{props.children}</main>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-left: 290px;
    background: var(--secondary-grey-300, #f4f7fe);
    #main {
        flex: 1;
        padding: 50px 20px;
    }
`;

export default Layout;
