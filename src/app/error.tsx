'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Global error boundary component
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="rounded-lg bg-red-50 px-8 py-10 dark:bg-red-950/30">
        <div className="flex flex-col items-center">
          <AlertTriangle size={48} className="text-red-500" />
          <h1 className="mt-6 text-2xl font-bold text-red-700 dark:text-red-400">
            Something went wrong!
          </h1>
          <p className="mt-2 max-w-md text-center text-gray-600 dark:text-gray-300">
            We&apos;re sorry, but an unexpected error occurred. Our team has been notified.
          </p>
          <div className="mt-6">
            <button
              onClick={() => reset()}
              className="rounded-md bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
            >
              Try Again
            </button>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 w-full max-w-md overflow-auto rounded border border-red-200 bg-white p-4 dark:border-red-900 dark:bg-black">
              <p className="text-sm font-mono text-red-600 dark:text-red-400">
                {error.message}
              </p>
              {error.stack && (
                <pre className="mt-2 text-xs font-mono text-gray-700 dark:text-gray-300">
                  {error.stack}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 