import Heading from "../../../components/ui/Heading";
import Card from "../../../components/ui/Card";
import BarGraphCard from "../../../components/ui/BarGraphCard";
import TeamSummaryCard from "../../../components/ui/TeamSummaryCard";
import CustomerFeedbackCard from "../../../components/ui/CustomerFeedbackCard";

export default function OperationDashboard() {
  return (
    <>
    <Heading value="Dashboard" />
      <div style={{ display: "flex", gap: "20px", width: "100%" }}>
        <Card title="Total Tickets" count={12} bgColor="#2F82FF" />
        <Card title="Total Solved" count={8} bgColor="#00FF00" />
        <Card title="Total Awaiting Approval" count={2} bgColor="red" />
        <Card title="Total in Progress" count={2} bgColor="#F5E960" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          width: "87%",
        }}
      >
        <BarGraphCard />
        <div style={{ width: "50%", height: "100%" }}>
          <TeamSummaryCard />
          <CustomerFeedbackCard />
        </div>
      </div>
    </>
  );
}
