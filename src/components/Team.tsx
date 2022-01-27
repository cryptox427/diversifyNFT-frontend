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
        "p-xl-4",
      ]}
    >
      <Box cssClasses={["p-3", "p-xl-4", "rounded-20"]} background="#000">
        <Box cssClasses={["team-box"]}>
          <Flex direction="row" justifyContent="center">
            <Image cssClasses={["p-2", "team-img"]} src={team.img} />
          </Flex>
          <Box cssClasses={["team-description", "rounded-bottom-20", "p-4"]}>
            <Box cssClasses={["py-2", "w-100"]}>Team name: {team.title}</Box>
            <Box cssClasses={["py-2", "w-100"]}>Position: {team.position}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
