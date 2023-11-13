import { Card, CardBody, Flex } from "@chakra-ui/react";
import { HiMiniChartBar } from "react-icons/hi2";

const MiniStatistic = ({}) => {
    return (
        <Card>
            <CardBody>
                <Flex
                    w={"56px"}
                    h={"56px"}
                    bg={"gray.100"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"50%"}
                >
                    <HiMiniChartBar />
                </Flex>
            </CardBody>
        </Card>
    );
};

export default MiniStatistic;
