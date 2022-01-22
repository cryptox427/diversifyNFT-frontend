import Box from "../../components/common/Box";
import Flex from "../../components/common/Flex";
import RoadmapPhase from "../../components/RoadmapCard";

const Roadmap = () => {
  const roadmaps = [
    {
      title: "Phase One",
      season: "Q2 2021",
      items: [
        {
          label: "Complete Smart Contract - NFT721",
          completed: true,
        },
        {
          label: "Twitter/Intsagam/Discord Launch",
          completed: true,
        },
        {
          label: "Launch our general website - V1",
          completed: true,
        },
        {
          label: "Mint First 50 NFTs",
          completed: true,
        },
        {
          label: "Community Giveaways & Contests",
          completed: true,
        },
      ],
    },
    {
      title: "Phase Two",
      season: "Q3 2021",
      items: [
        {
          label: "Community Event",
          completed: true,
        },
        {
          label: "Upgrade Website V2",
          completed: true,
        },
        {
          label: "Mint 200 NFTs",
          completed: true,
        },
        {
          label: "Announcement",
          completed: true,
        },
        {
          label: "NFT edition Event",
          completed: true,
        },
      ],
    },
    {
      title: "Phase Three",
      season: "Q4 2021",
      items: [
        {
          label: "Mint 500 NFTs",
          completed: true,
        },
        {
          label: "Upgrade website V3",
          completed: false,
        },
        {
          label: "Start Migrating to Polygon",
          completed: false,
        },
        {
          label: "Community Event",
          completed: false,
        },
      ],
    },
    {
      title: "Phase Four",
      season: "Q1 2022",
      items: [
        {
          label: "Mint 1000 NFTs",
          completed: false,
        },
        {
          label: "Token Launch",
          completed: false,
        },
        {
          label: "Launch Website Marketing Place",
          completed: false,
        },
        {
          label: "Big Brand Collaboration",
          completed: false,
        },
        {
          label: "Build, Build, Build",
          completed: false,
        },
      ],
    },
  ];

  return (
    <Box cssClasses={["section-pad-top", "bg-dark1"]}>
      <h1 className="text-center">Roadmap</h1>
      <Box cssClasses={["col-md-10", "mx-auto"]}>
        <Flex
          cssClasses={["mt-4"]}
          direction={"row"}
          justifyContent="space-between"
        >
          {roadmaps.map((roadmap, index) => (
            <RoadmapPhase
              key={index}
              title={roadmap.title}
              items={roadmap.items}
              season={roadmap.season}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Roadmap;
