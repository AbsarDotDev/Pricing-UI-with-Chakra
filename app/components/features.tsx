import { Box, HStack, Icon,Text, SimpleGrid, StackProps } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { HassleFreeIcon } from "../icons/Icons";
import { MonthlySubscriptionIcon } from "../icons/Icons";
import { MoneyBackGuaranteeFunction } from "../icons/Icons";

interface FeatureProps extends StackProps{
  icon:ElementType;
}
export const FeatureBox=(props:FeatureProps)=>{
  const {children, icon, ...rest}=props;
  return (<HStack spacing={'24px'}>
    <Icon as={icon} boxSize={'48px'}/>
    <Text fontSize={'18px'} fontWeight='700'>{children}</Text>
  </HStack>)
}
export default function Features() {
  return (
    <Box  margin={'auto'}  maxW='1024px'>
    <Box  m={'auto'} maxW='1024' pt={'56px'} pb='
    32px'>
      <SimpleGrid px={'48px'}  columns={[1, null, 3]}  spacing='40px'>
<FeatureBox  icon={MoneyBackGuaranteeFunction}>30 days money back Guarantee</FeatureBox>
<FeatureBox  icon={HassleFreeIcon}>No setup fees
100% hassle-free</FeatureBox>

<FeatureBox  icon={MonthlySubscriptionIcon}>No monthly subscription
Pay once and for all</FeatureBox>

      </SimpleGrid>
    </Box>
    </Box>
  )
}
