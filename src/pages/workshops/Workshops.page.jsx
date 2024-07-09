// import { Wrapper } from "../../components/wrapper/Wrapper.component";
import { WorkshopAd } from "../../molecules/workshopAd/workshopAd.molecule";
import { PageSection } from "../../components/pageSection/pageSection.component";
import { SectionHeader } from "../../molecules/sectionHeader/sectionHeader.molecule";
// import { BlogEntries } from "../content/BlogEntries";

export const Workshops = () => {
  return (
    <PageSection
    wrapperId="workshopContentWrapper"
    containerClassName="workshop-content-container"
    containerProps={{
      style: {
        padding: "0 0 5% 0",
      },
    }}
  >
    <SectionHeader
      title={"Helgekurs Høsten 2024"}
      showNav={false}
      showUnderLine={true}
    />
    <WorkshopAd
    />
  </PageSection>
  );
};
