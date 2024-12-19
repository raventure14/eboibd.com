import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2, FileText, AlertTriangle } from "lucide-react";

interface DownloadLoadingCardProps {
  step: "verifying" | "generating" | "complete" | null;
}

export function DownloadLoadingCard({ step }: DownloadLoadingCardProps) {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
        Preparing Your Download
      </h2>
      <div className="space-y-4">
        <div className="flex items-center">
          {step === "verifying" ? (
            <Loader2 className="w-6 h-6 text-blue-500 animate-spin mr-2" />
          ) : step === "generating" || step === "complete" ? (
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
          ) : (
            <div className="w-6 h-6 mr-2" />
          )}
          <span className={step === "verifying" ? "font-semibold" : ""}>
            Verifying access token
          </span>
        </div>
        <div className="flex items-center">
          {step === "generating" ? (
            <Loader2 className="w-6 h-6 text-blue-500 animate-spin mr-2" />
          ) : step === "complete" ? (
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
          ) : (
            <div className="w-6 h-6 mr-2" />
          )}
          <span className={step === "generating" ? "font-semibold" : ""}>
            Generating your e-book
          </span>
        </div>
      </div>
      {step === "complete" && (
        <div className="mt-4 text-center">
          <FileText className="w-12 h-12 text-purple-500 mx-auto mb-2" />
          <p className="text-green-600 font-semibold">
            Your e-book is ready for download!
          </p>
        </div>
      )}
      {step === null && (
        <div className="mt-4 text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
          <p className="text-green-600 font-semibold">
            Oops! something went wrong
          </p>
        </div>
      )}
    </Card>
  );
}
