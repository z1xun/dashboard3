import { Box, InputGroup, InputLeftElement, Input, Icon, Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { PiMoonFill, PiWarningCircleBold, PiBellBold } from "react-icons/pi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Utill = () => {
    return (
        <Wrap>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <Icon as={SearchIcon} />
                </InputLeftElement>
                <Input type="text" placeholder="Search" border={0} />
            </InputGroup>
            <div className="LinkList">
                <Link to="/">
                    <Icon as={PiMoonFill} fill="Secondary_Grey_600" />
                </Link>
                <Link to="/">
                    <Icon as={PiBellBold} fill="Secondary_Grey_600" />
                </Link>
                <Link to="/">
                    <Icon as={PiWarningCircleBold} fill="Secondary_Grey_600" />
                </Link>
            </div>
            <Avatar size="md" name="Ryan Florence" src="https://bit.ly/ryan-florence" margin="0 10px" />
        </Wrap>
    );
};

const Wrap = styled(Box)`
    width: 422px;
    height: 61px;
    border-radius: 30px;
    background: var(--secondary-primary-white, #fff);
    box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
    display: flex;
    align-items: center;
    .LinkList {
        display: flex;
        gap: 20px;
        font-size: 20px;
    }
`;

export default Utill;
