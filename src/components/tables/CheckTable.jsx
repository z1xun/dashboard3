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
    Checkbox,
} from "@chakra-ui/react";

const CheckTable = () => {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">Check Table</Heading>
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
                                <Td>
                                    <Checkbox defaultChecked>Marketplace</Checkbox>
                                </Td>
                                <Td>17.5%</Td>
                                <Td isNumeric>25.4</Td>
                                <Td isNumeric>24.Jan.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus PRO</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>30.48</Td>
                                <Td isNumeric>12.Jun.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Uranus Kit</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus DS</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Checkbox defaultChecked>Venus 3D Asset</Checkbox>
                                </Td>
                                <Td>10.8%</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>57.Mar.2021</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    );
};

export default CheckTable;
