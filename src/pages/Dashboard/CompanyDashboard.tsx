import PageMeta from "../../components/common/PageMeta";
import PlacementMetrics from "../../components/placements/PlacementMetrics";

export default function Company() {
  return (
    <>
      <PageMeta
        title="PLACEMENT CELL"
        description="This is React.js Placement Cell project coordinates the details and data in the college."
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 lg:col-span-12 xl:col-span-12">
          <PlacementMetrics />
        </div>
      </div>
    </>
  );
}