import EnvironmentalBottomRow from "./bottomRow/bottomRow";
import EnvironmentalMiddleRow from "./middleRow/middleRow";
import EnvironmentalThirdRow from "./thirdRow/thirdRow";
import EnvironmentalTopRow from "./top";

export default function EnvironmentalDashboard() {
  return (
    <div>
      <EnvironmentalTopRow />
      <EnvironmentalMiddleRow />
      <EnvironmentalThirdRow />
      <EnvironmentalBottomRow/>
    </div>
  );
}
