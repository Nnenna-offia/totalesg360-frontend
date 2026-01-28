import { Box } from "@chakra-ui/react";
import SocialTopRow from "./top";
import SocialMiddleRow from "./middleRow/middleRow";
import SocialThirdRow from "./thirdRow/thirdRow";
import SocialBottomRow from "./bottomRow/bottomRow";

export default function SocialManufacturing() {
  return (
    <Box>
      <SocialTopRow />
      <SocialMiddleRow />
      <SocialThirdRow />
      <SocialBottomRow/>
    </Box>
  );
}
