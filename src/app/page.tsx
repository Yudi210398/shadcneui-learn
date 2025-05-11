// import { Button } from "@/components/ui/button";
// import { ArrowDownToLine } from "lucide-react";

import AppBarChart from "@/components/AppBarChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-b-lg">
        {<AppBarChart />}
      </div>
      <div className="bg-primary-foreground p-4 rounded-b-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-b-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-b-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-b-lg">test</div>
    </div>
  );
}
