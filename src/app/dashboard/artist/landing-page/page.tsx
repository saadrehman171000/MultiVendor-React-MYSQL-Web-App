// dashboard/artist/landing-page/page.tsx
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
import { toast } from "sonner";
import FormSchema from "@/util/form_schemas/landing_page.schema";
import { Separator } from "@/components/ui/separator";
import {
  Delete,
  Facebook,
  FacebookIcon,
  LucideFacebook,
  Plus,
} from "lucide-react";

export default function LandingPageForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tagline: "",
      tagline_description: "",
      artist_name: "",
      description: "",
      keyPoints: [{ value: "" }],
      facebook: "",
      youtube: "",
      instagram: "",
    },
  });

  const {
    fields: keyPointsFields,
    append: addKeyPoint,
    remove: removeKeyPoint,
  } = useFieldArray({
    control: form.control,
    name: "keyPoints",
    rules: { minLength: 1 },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // const result = await createLandingPage(data);
    console.log(data);
    // if (!result) {
    //   toast.error("Something went wrong. Please try again later.");
    //   return;
    // }

    // if (result.error) {
    //   toast.error(result.error.toString());
    //   return;
    // }

    toast.success("Your landing page has been created successfully.");
  }

  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold">Landing Page Editor</h1>
      <p className="pb-10">
        Here is the editor where you can edit you can edit your landing page{" "}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Personal Details</h1>
            <p>personal detail that will show on your landing page</p>
          </div>
          <FormField
            control={form.control}
            name="tagline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tagline</FormLabel>
                <FormControl>
                  <Input placeholder="Tagline" {...field} />
                </FormControl>
                <FormDescription>
                  This is the tagline/Title of your landing page.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tagline_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tagline Description</FormLabel>
                <FormControl>
                  <Input placeholder="tagline_description" {...field} />
                </FormControl>
                <FormDescription>
                  This is the description of your landing page/work that will
                  show below your tagline.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="artist_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name that will display on your landing page.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Description</FormLabel>
                <FormControl>
                  <Input placeholder="description" {...field} />
                </FormControl>
                <FormDescription>
                  This is the description of your landing page/work.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Key Points</h1>
              <p className="mt-2">
                Bullet Points that Show on You Landing Page
              </p>
            </div>
            <Button
              type="button"
              onClick={() => {
                addKeyPoint({ value: "" });
              }}
            >
              <div className="flex items-center justify-between space-x-3">
                <Plus /> <span>Key Point</span>
              </div>
            </Button>
          </div>
          {keyPointsFields.map((keyPoint, index) => (
            <div className="flex flex-row items-center space-x-3 ">
              <FormField
                key={index}
                control={form.control}
                name={`keyPoints.${index}.value`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Key Point {index + 1}</FormLabel>
                    <FormControl>
                      <Input placeholder="Key Point" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is a key point for your landing page.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" onClick={() => removeKeyPoint(index)}>
                <Delete />
              </Button>
            </div>
          ))}

          <Separator />
          <div>
            <h1 className="text-3xl font-bold">Socials</h1>
            <p className="mt-2">Your Social Links</p>
          </div>

          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Facebook</FormLabel>
                <FormControl>
                  <Input placeholder="Your Facebook Link" {...field} />
                </FormControl>
                <FormDescription>This is your facebook link.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="youtube"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Youtube</FormLabel>
                <FormControl>
                  <Input placeholder="Your Youtube Link" {...field} />
                </FormControl>
                <FormDescription>This is your Youtube link.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input placeholder="Your Instagram Link" {...field} />
                </FormControl>
                <FormDescription>This is your Instagram link.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
