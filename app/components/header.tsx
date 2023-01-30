import { Box, Heading,Spacer,Text } from '@chakra-ui/react'


export default function Header() {
  return (
    <Box pb={'112px'} as={'section'}>
    <Box bg={'#6B46C1'}  pt='90px' pb='220px' px='12px'>
        <Heading textAlign={'center'} color='white' fontWeight='800' fontSize={{ base: '28px', md: '35px', lg: '48px' }}>Simple pricing for your business</Heading>
        <Text textAlign={'center'} color='#F7FAFC' fontWeight='500' fontSize={{ base: '18px', md: '20px', lg: '24px' }} pt='16px'>Plans that are carefully crafted to suit your business.</Text>
    </Box>  
    </Box>)
}
