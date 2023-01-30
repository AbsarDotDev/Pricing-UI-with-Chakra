import { Box, Button, Flex, Heading ,HStack,Icon,SimpleGrid,Stack,StackProps,Text, VStack} from "@chakra-ui/react";
import { SymbolDisplayPartKind } from "typescript";
import { CheckIcon } from "../icons/Icons";

export const ListItem=(props:StackProps)=>{
    const {children, ...rest}=props;

    return (
    <HStack as={'li'} {...rest}>
        <Icon as={CheckIcon} w={'22px'} h='22px'/>
        <Text>{children}</Text>
    </HStack>
    )
}
export default function Pricing() {
  return (
    <Box  margin={'auto'} px={'10px'} maxW='1024px'>
    <Box  margin={'auto'}  mt='-280px' borderRadius={'12px'} overflow='hidden' boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'}>
            <Flex >
<SimpleGrid  columns={[1, null, 2]} >
    <Box  bg={'#F0EAFB'} p='60px' >
    <Text textAlign={'center'}  color='#171923' fontWeight='800' fontSize='24px'>Premium PRO</Text>
    <Heading as={'h3'} textAlign={'center'}  color='#171923' fontWeight='800' fontSize='60px'>$329</Heading>
    <Text textAlign={'center'}  color='#171923' fontWeight='500' fontSize='18px' pt='16px'>billed just once</Text>
<Box as='button' display={'block'}  _hover={{ bg: 'transparent', border:'2px',borderColor:'#805AD5', color:'#805AD5' }} margin={'auto'} fontWeight='700' fontSize='16px' mt={'24px'} w='282px' h='50px' bg='#805AD5' borderRadius='8px' color={'white'}>Get Started</Box>
    </Box>

        <Box bg='white' p='60px' fontSize={'18px'}>
        <Text  color='#2D3748' fontWeight='400' fontSize='18px'>Access these features when you get this pricing package for your business.</Text>
        <Stack as={'ul'} spacing='20px' mt={'24px'}>
<ListItem >International calling and messaging API</ListItem>
<ListItem >Additional phone numbers</ListItem>
<ListItem >Automated messages via Zapier</ListItem>
<ListItem >24/7 support and consulting</ListItem>

        </Stack>
        </Box>
        </SimpleGrid>
    </Flex>
    </Box>
    </Box>
  )
}
