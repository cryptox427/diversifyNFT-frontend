import Box from "./common/Box";
import Image from "./common/Image";

const Art = ({ art }: { art: any }) => {
  return (
    <Box cssClasses={["container", "p-sm-4"]}>
      <Image src={art.img} width="100%" cssClasses={["nft-art"]} />
    </Box>
  );
};

export default Art;
