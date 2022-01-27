import Box from "./common/Box";
import Image from "./common/Image";

const Blog = ({ blog, index }: { blog: any; index: number }) => {
  return (
    <div
      className="col-md-4 container col-12 mb-4 mb-sm-0"
      data-aos="fade-up"
      data-aos-duration={800 * index}
    >
      <Box cssClasses={["p-0", "p-sm-2"]}>
        <Image
          cssClasses={["rounded-20"]}
          width="100%"
          src={blog.img}
          height="auto"
        />
        <Box cssClasses={["mt-4", "pt-2"]}>
          <h3>{blog.title}</h3>
        </Box>
        <Box cssClasses={["mt-3"]}>
          <p className="text-sm">{blog.description}</p>
        </Box>
      </Box>
    </div>
  );
};

export default Blog;
