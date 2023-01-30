'use client'
import { Box, SimpleGrid } from "@chakra-ui/react";
import Features from "./components/features";
import Header from "./components/header";
import Pricing from "./components/pricing";


export default function Home() {
  return (
    <SimpleGrid  minChildWidth='100%'>
<Header></Header>
<Pricing></Pricing>
<Features></Features>
    </SimpleGrid>
  )}