"use client";

import Link from "next/link";
import { FC } from "react";
import {
  ArrowLeft,
  House,
  OctagonX,
  RefreshCw,
  ServerCrash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const NotFoundPage: FC<{ isError?: boolean }> = ({ isError = false }) => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-50/50">
        <Card className="w-full max-w-xl text-center">
          <CardContent className="pt-12 px-4">
            <div className="w-full">
              <div className="mx-auto mb-8 w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                {isError ? (
                  <ServerCrash className="w-8 h-8 text-white" />
                ) : (
                  <OctagonX className="w-8 h-8 text-white" />
                )}
              </div>

              <h1 className="mb-4 text-3xl font-bold tracking-tight">
                {isError
                  ? `500 - Internal Server Error`
                  : `404 - Page Not Found`}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {isError
                  ? `Sorry! Something went wrong on our server. We're working to fix the issue.`
                  : `Oops! The page you're looking for doesn't exist. It might have
                been removed or deleted.`}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {isError ? (
                  <Button size="sm" onClick={() => window.location.reload()}>
                    <RefreshCw className="w-4 h-4" /> Refresh
                  </Button>
                ) : (
                  <Button asChild size="sm">
                    <Link href="/">
                      <House className="w-4 h-4" />
                      Go to Homepage
                    </Link>
                  </Button>
                )}

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4" /> Go Back
                </Button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="text-sm text-muted-foreground justify-center py-6">
            &copy; {new Date().getFullYear()} - SchoolPro. All Rights Reserved.
          </CardFooter>
        </Card>
      </main>
    </>
  );
};

export default NotFoundPage;
