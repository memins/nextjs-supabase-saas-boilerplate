/** @type {import('next').NextConfig} */
import { createNextIntlPlugin } from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // Add any other Next.js configuration options here
};

export default withNextIntl(nextConfig); 