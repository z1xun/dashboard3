import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Card,
    CardHeader,
    CardBody,
    Heading,
} from "@chakra-ui/react";

const Column = () => {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">4-Column Table</Heading>
            </CardHeader>

            <CardBody py={2} px={5}>
                <TableContainer overflowX={"hidden"} overflowY={"auto"} maxH="296px">
                    <Table variant="simple">
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Title</Th>
                                <Th>Title</Th>
                                <Th isNumeric>Title</Th>
                                <Th isNumeric>Title</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Marketplace</Td>
                                <Td>17.5%</Td>
                                <Td isNumeric>2,458</Td>
                                <Td isNumeric>24.Jan.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus PRO</Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>1,458</Td>
                                <Td isNumeric>12.Jun.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>Uranus Kit</Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>1,024</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus DS</Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>858</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus 3D Asset</Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>258</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus 3D Asset</Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>258</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus 3D Asset</Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>258</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    );
};

export default Column;
