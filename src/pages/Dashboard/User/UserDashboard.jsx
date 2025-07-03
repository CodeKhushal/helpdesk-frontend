import Heading from "../../../components/ui/Heading";
import Card from "../../../components/ui/Card";

export default function UserDashboard() {
  return (
    <>
    <Heading value="Dashboard" />
      <div style={{ display: "flex", gap: "20px", width: "100%" }}>
        <Card title="Total Tickets" count={12} bgColor="#2F82FF" />
        <Card title="Total Solved" count={8} bgColor="#00FF00" />
        <Card title="Total Awaiting Approval" count={2} bgColor="red" />
        <Card title="Total in Progress" count={2} bgColor="#F5E960" />
      </div>
    </>
  );
}
