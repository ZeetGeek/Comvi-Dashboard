// components
import InfoBox from "@/components/global/dashboard/info-box";

// data
import { dashboard_info } from "@/data/dashboard/1";

function DashboardInfo() {
     return (
          <>
               <div className="container">
                    <div className="row">
                         {dashboard_info.map((item) => (
                              <div key={item.id} className="w-1/4">
                                   <InfoBox {...item} />
                              </div>
                         ))}
                    </div>
               </div>
          </>
     );
}

export default DashboardInfo;
