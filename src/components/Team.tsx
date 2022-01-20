import Box from "./common/Box";
import Image from "./common/Image";

const Team = ({ team }: { team: any }) => {
  return (
    <Box cssClasses={["col-md-4", "container"]}>
      <Box cssClasses={["p-4", "rounded-20"]} background="#000">
        <Box cssClasses={["team-box"]}>
          <Image
            cssClasses={["p-2"]}
            width="100%"
            src={team.img}
            height="auto"
          />
          <Box cssClasses={["team-description", "rounded-bottom-20", "p-4"]}>
            {team.description}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
