import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 12 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex
          flex={{  md: "auto" }}
          ml={{ base: -10 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontWeight={600}
            color={"gray.800"}
          >
            Wayfair
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={'auto'}>
            <DesktopNav/>
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
};

export default Header;
