import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavItem, NavItems } from "./_items";
import { ChevronRightIcon } from "@chakra-ui/icons";

const linkColor = "gray.600";
const linkHoverColor = "gray.800";
const popoverContentBgColor = "white";

const DesktopSubNav = ({ label, href, subLabel, children }: NavItem) => {
  return (
    <Box>
      <Popover trigger="hover" placement="right-end">
        <PopoverTrigger>
          <Box
            as="a"
            href={href}
            role="group"
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: "pink.50" }}
          >
            <Stack direction={"row"} align={"center"}>
              <Box>
                <Text
                  transition={"all .3s ease"}
                  _groupHover={{ color: "pink.400" }}
                  fontWeight={500}
                >
                  {label}
                </Text>
                <Text fontSize={"small"}>{subLabel}</Text>
              </Box>
              <Flex
                transition={"all .3s ease"}
                transform={"translateX(-10px)"}
                opacity={0}
                _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                justify={"flex-end"}
                align={"center"}
                flex={1}
              >
                <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
              </Flex>
            </Stack>
          </Box>
        </PopoverTrigger>
        {children && (
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack>
              {children.map((child, idx) => (
                <DesktopSubNav key={idx} {...child} />
              ))}
            </Stack>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NavItems.map((item) => (
        <Box>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={item.href ?? "#"}
                fontSize={"small"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {item.label}
              </Box>
            </PopoverTrigger>
            {item.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {item.children.map((child, idx) => (
                    <DesktopSubNav key={idx} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
