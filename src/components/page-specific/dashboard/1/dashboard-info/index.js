// components
import InfoBox from "@/components/global/dashboard/info-box";

// data
import { dashboard_info } from "@/data/dashboard/1";

function DashboardInfo() {
    return (
        <>
            <div className="container">
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-32">
                    {dashboard_info.map((item) => (
                        <div key={item.id}>
                            <InfoBox {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DashboardInfo;
