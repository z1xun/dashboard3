import React from "react";
import Layout from "../components/layout/Layout";
import { SimpleGrid } from "@chakra-ui/react";
import MiniStatistic from "../components/home/MiniStatisitc";

const Home = () => {
    return (
        <Layout title="DashBoard" pagename="DashBoard">
            <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={10}>
                <MiniStatistic />
                <MiniStatistic />
                <MiniStatistic />
                <MiniStatistic />
                <MiniStatistic />
                <MiniStatistic />
            </SimpleGrid>
        </Layout>
    );
};

export default Home;
