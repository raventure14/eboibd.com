"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import {
  Download,
  BookOpen,
  Coffee,
  Share2,
  CheckCircle,
  Loader,
} from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { UnauthorizedAccess } from "@/components/global/unauthorize-card";
import { verifyToken } from "@/lib/utils";
import axios from "axios";
import { DownloadLoadingCard } from "../_components/download-card";
import { saveAs } from "file-saver";

type BookData = {
  bookId: string;
  bookName: string;
  customerName: string;
  bookImage: string;
};
export default function DownloadPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isNotAuthorized, setIsNotAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<
    "verifying" | "generating" | "complete" | null
  >(null);

  const [bookData, setBookData] = useState<BookData | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setLoadingStep("verifying");
    if (!token) {
      setIsNotAuthorized(true);
      setIsLoading(false);
    }
    async function init() {
      try {
        // verify the token
        if (token) {
          const verifiedToken = await axios.get(`/api/ebooks/download/verify`, {
            params: {
              token,
            },
          });

          if (verifiedToken.data.status !== 200) {
            setIsLoading(false);
            setIsNotAuthorized(true);
            return;
          }
          setBookData(verifiedToken.data.data);
          setIsNotAuthorized(false);
          setLoadingStep("complete");
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }

    init();
  }, [token, router]);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simulate download process
    try {
      const response = await axios.get(`/api/ebooks/download/${token}`);
      console.log("Response: ", response);
      if (response.status !== 200) {
        toast.error("Error during download. Please try again.", {
          position: "bottom-right",
        });
        return;
      }
      // saveAs(response.data,"ebook.pdf")
      const blob = new Blob([response.data], { type: "application/pdf" });
      console.log("Blog: ", blob);
      const url = URL.createObjectURL(blob);
      const fileName = bookData?.bookName.split(" ").join("-");
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading eBook:", error);
    } finally {
      setIsDownloading(false);
      setIsDownloaded(true);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center z-50">
      {isLoading && <DownloadLoadingCard step={loadingStep} />}
      {isNotAuthorized && <UnauthorizedAccess />}
      {!isNotAuthorized && bookData && (
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
            Download Your E-Book
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Your guide to{" "}
            <span className="text-heading font-semibold">
              {bookData.bookName}
            </span>{" "}
            is just a click away!
          </p>
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-3">
            <Card className="p-8 mb-12">
              <div className="flex flex-col items-center">
                <Image
                  src={bookData.bookImage}
                  alt="E-book cover"
                  width={150}
                  height={200}
                  className="mb-6 rounded-lg shadow-md"
                />
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                  {bookData.bookName}
                </h2>
                {!isDownloaded ? (
                  <Button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    size="lg"
                    className="w-full sm:w-auto gap-2"
                  >
                    {isDownloading ? "Downloading..." : "Download E-Book"}
                    {isDownloading ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <Download className="ml-2 h-5 w-5" />
                    )}
                  </Button>
                ) : (
                  <div className="flex items-center text-green-600 gap-5">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <span>Download Complete</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <Button asChild variant="default" className="w-full">
                        <Link href="/">Return to Homepage</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            <div className="flex flex-col">
              <Card className="p-6 mb-12">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">{`What's Next?`}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BookOpen className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span>
                      Start reading and apply the techniques to enhance your AI
                      interactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Coffee className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span>
                      Join our community forum to discuss strategies and share
                      experiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Share2 className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span>
                      Share your success stories and help inspire others in
                      their learning journey
                    </span>
                  </li>
                </ul>
              </Card>
              <div className="text-center">
                <p className="mb-4">
                  Having trouble with your download? Need assistance?
                </p>
                <Link
                  href="mailto:hello.eboibd@gmail.com"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Contact our support team
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
