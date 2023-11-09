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
    IconButton,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const Complex = () => {
    return (
        <Card>
            <CardHeader>
                <Heading size="md">Complex Table</Heading>
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
                                <Td>Approved</Td>
                                <Td isNumeric>25.4</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus Dashboard Builder</Td>
                                <Td>Disable</Td>
                                <Td isNumeric>30.48</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>Venus Design System</Td>
                                <Td>Error</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>Uranus</Td>
                                <Td>Approved</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>Uranus</Td>
                                <Td>Approved</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>Uranus</Td>
                                <Td>Approved</Td>
                                <Td isNumeric>0.91444</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    );
};

export default Complex;
