import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './Loading/Loading';

interface Props {
  pendingFallback?: React.ReactNode;
  rejectedFallback: React.ReactElement<
    unknown,
    string | React.FunctionComponent | typeof React.Component
  > | null;
  children: React.ReactNode;
}
const AsyncBoundary = ({
  pendingFallback = <Loading />,
  rejectedFallback,
  children,
}: Props) => {
  return (
    <ErrorBoundary fallback={rejectedFallback}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
