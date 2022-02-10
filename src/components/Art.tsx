import Box from "./common/Box";
import Image from "./common/Image";

const Art = ({ src }: { src: any }) => {
  return (
    <Box cssClasses={["container", "p-sm-4"]}>
      <Image src={src} width="100%" cssClasses={["nft-art"]} />
    </Box>
  );
};

export default Art;
