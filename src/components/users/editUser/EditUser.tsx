"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Harus lebih dari 2 karanter" })
    .max(50),
  email: z.string().email({ message: "tidak sesusai format email" }),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"], { required_error: "Harus dipilih" }),
});

export default function EditUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    shouldFocusError: true,
    mode: "onChange",
    defaultValues: {
      username: "Hana Safira",
      email: "hanasafira@gmail.com",
      phone: "081381871739",
      location: "Jakarta Selatan",
      role: "user",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data, `lers`);
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormDescription>Username data</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription>Email data</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>phone</FormLabel>
                    <FormControl>
                      <Input placeholder="phone" {...field} />
                    </FormControl>
                    <FormDescription>phone data</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>phone</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="data">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>phone data</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
