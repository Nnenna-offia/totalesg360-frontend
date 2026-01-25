import { Box } from "@chakra-ui/react";
import GovernanceTopRow from "./top";
import GovernanceMiddleRow from "./middleRow/middleRow";
import GovernanceBottomRow from "./bottomRow/bottomRow";

export default function Governance() {
  return (
    <Box>
      <GovernanceTopRow />
      <GovernanceMiddleRow />
      <GovernanceBottomRow />
    </Box>
  );
}
