"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function CoverImage() {
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        setError(null);
        setVideoPreview(URL.createObjectURL(selectedFile));
      } else {
        setError("Please select a image file");
        setVideoPreview(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      console.log("File submitted:", file);
      toast.success("Your landing page has been updated successfully.");
    }
  };

  return (
    <div className="w-full py-10">
      <h1 className="text-3xl font-bold">Landing Page Cover Image</h1>
      <p>This is where you can edit the cover image of your landing page.</p>
      <form onSubmit={handleSubmit}>
        <Input
          className=""
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {error && <p>{error}</p>}
        <Button className="mt-10" type="submit">
          Submit
        </Button>
      </form>
      {videoPreview && (
        <Image
          alt="selectedImage"
          src={videoPreview}
          width={500}
          height={500}
          className="mt-4"
        />
      )}
    </div>
  );
}
