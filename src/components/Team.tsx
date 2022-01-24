import Box from "./common/Box";
import Flex from "./common/Flex";
import Image from "./common/Image";

const Team = ({ team }: { team: any }) => {
  return (
    <Box
      cssClasses={[
        "col-md-4",
        "container",
        "col-12",
        "team-box-container",
        "p-lg-4",
      ]}
    >
      <Box cssClasses={["p-4", "rounded-20"]} background="#000">
        <Box cssClasses={["team-box"]}>
          <Flex direction="row" justifyContent="center">
            <Image cssClasses={["p-2", "team-img"]} src={team.img} />
          </Flex>
          <Box cssClasses={["team-description", "rounded-bottom-20", "p-4"]}>
            {team.description}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
