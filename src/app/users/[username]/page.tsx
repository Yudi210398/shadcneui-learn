import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import BadgesUser from "@/components/users/badge/Badge";
import EditUser from "@/components/users/editUser/EditUser";
export default function Username() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Hana</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <BadgesUser />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Informasi User</h1>

              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={80} />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Hana Safira</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Lokasi:</span>
                <span>Jakarta Selatan</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold">Badge:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mt-5">
              Bergabung di 21 Maret 2025
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="popular content" />
          </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* chat container */}
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
}
