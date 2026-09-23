'use client';

import { usePathname } from 'next/navigation';
import ContentContainer from './ContentContainer';

export default function ConditionalContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noContainerRoutes = ['/'];

  if (noContainerRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  return <ContentContainer>{children}</ContentContainer>;
}
