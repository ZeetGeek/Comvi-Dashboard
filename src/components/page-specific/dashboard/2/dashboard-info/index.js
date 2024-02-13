// components
import InfoBox from "@/components/global/dashboard/info-box";

// data
import { dashboard_info } from "@/data/dashboard/1";

function DashboardInfo() {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-32">
                {dashboard_info.map((item) =>
                    item.id <= 1 ? (
                        <>
                            <InfoBox key={item.id} {...item} />
                        </>
                    ) : null
                )}
            </div>
        </>
    );
}

export default DashboardInfo;
