import React from "react";
import {useColorMode} from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";

function Header() {

    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const {isLargeScreen} = useMediaQuery("(min-width: 600px)");
    return {
        <Stack>
        </Stack>
    }
}

export default Header;