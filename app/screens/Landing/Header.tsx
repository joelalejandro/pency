import React from "react";
import {Flex, Box, Button, Text, Image} from "@chakra-ui/core";

import Content from "./Content";

import Link from "~/ui/controls/Link";

const Header: React.FC = () => (
  <Flex alignItems="center" as="header" backgroundColor="teal.600" color="white" paddingY={8}>
    <Content alignItems="center" display="flex" flexDirection={{base: "column", md: "row"}}>
      <Box maxWidth={{base: "auto", sm: 500, lg: 580, xl: 640}}>
        <Text
          as="h1"
          fontSize={{base: "2xl", md: "4xl", lg: "5xl", xl: "6xl"}}
          fontWeight={500}
          lineHeight={"130%"}
          marginBottom={2}
        >
          Ahorrá tiempo y dinero con tu tienda Pency
        </Text>
        <Text
          as="h2"
          color="teal.50"
          fontSize={{base: "lg", sm: "lg", md: "xl", lg: "2xl", xl: "3xl"}}
        >
          Publicá tu catálogo online y recibí por Whatsapp los pedidos de tus clientes ¡GRATIS!
        </Text>
        <Box display={{base: "none", sm: "block"}} marginTop={10}>
          <Link
            isExternal
            href="https://docs.google.com/forms/d/1P1o0HVHDluk-VMHHRLFVPn_TDKkqg_JhlMBmclcd6Co"
          >
            <Button
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-1px)",
              }}
              backgroundColor="white"
              color="black"
              size="lg"
            >
              Crear tienda
            </Button>
          </Link>
          <Link isExternal href="https://pency.app/demo">
            <Button
              _hover={{
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "xl",
                transform: "translateY(-1px)",
              }}
              color="white"
              marginLeft={{base: 0, sm: 6}}
              size="lg"
              variant="outline"
            >
              Ver tienda de prueba
            </Button>
          </Link>
        </Box>
      </Box>
      <Flex
        alignItems="center"
        backgroundImage="url('/assets/landing/bg.png')"
        backgroundPosition="right center"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        flex={1}
        justifyContent={{base: "center", sm: "center", md: "flex-end"}}
        marginRight={{base: -4, sm: 0}}
        marginTop={{base: 10, sm: 0}}
      >
        <Image
          marginBottom={{base: -20, sm: -24}}
          maxWidth={{base: "80vw", sm: "xs", lg: "md"}}
          paddingTop={{base: 2, sm: 0}}
          src="/assets/landing/pency.png"
        />
      </Flex>
    </Content>
  </Flex>
);

export default Header;
