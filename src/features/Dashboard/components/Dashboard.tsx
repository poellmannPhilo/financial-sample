import { DashboardHeader } from "./DashboardHeader";
import { RevenueChart } from "./RevenueChart";
import { VoiceAssistant } from "./VoiceAssistant";
import { data as data1 } from "./data1";
import { data as data2 } from "./data2";

export const Dashboard = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <VoiceAssistant></VoiceAssistant>
      <RevenueChart data={data1} width={700} height={400}></RevenueChart>
      <RevenueChart data={data2} width={700} height={400}></RevenueChart>
    </div>
  );
};
