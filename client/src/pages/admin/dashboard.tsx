import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MOCK_STATS, MOCK_ENQUIRIES } from "@/lib/data";
import { Package, MessageSquare, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Satyam.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{MOCK_STATS[0].value}</div>
              <p className="text-xs text-muted-foreground">+2 added today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Enquiries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{MOCK_STATS[1].value}</div>
              <p className="text-xs text-muted-foreground">+5 since last hour</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{MOCK_STATS[2].value}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.3%</div>
              <p className="text-xs text-muted-foreground">+1.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Enquiries Preview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Enquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {MOCK_ENQUIRIES.map((enquiry) => (
                  <div key={enquiry.id} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{enquiry.name}</p>
                      <p className="text-sm text-muted-foreground">{enquiry.product}</p>
                    </div>
                    <div className="ml-auto font-medium text-xs text-muted-foreground bg-gray-100 px-2 py-1 rounded">
                      {enquiry.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-3">
             <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
               <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/10 transition-colors">
                  <h3 className="font-semibold text-primary">Add New Product</h3>
                  <p className="text-sm text-muted-foreground">Upload photos and details</p>
               </div>
               <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 cursor-pointer hover:bg-accent/20 transition-colors">
                  <h3 className="font-semibold text-primary">View Analytics</h3>
                  <p className="text-sm text-muted-foreground">Check weekly performance</p>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
