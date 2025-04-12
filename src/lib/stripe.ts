import Stripe from 'stripe';

/**
 * Create a Stripe instance with the secret key
 */
export const getStripe = () => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!stripeSecretKey) {
    throw new Error('Stripe requires STRIPE_SECRET_KEY environment variable');
  }
  
  return new Stripe(stripeSecretKey, {
    apiVersion: '2024-04-10', // Update to the latest API version
    appInfo: {
      name: 'Next.js SaaS Boilerplate',
      version: '0.1.0',
    },
  });
};

/**
 * Get publishable key for client-side Stripe elements
 */
export const getPublishableKey = () => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  
  if (!publishableKey) {
    throw new Error('Stripe requires NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable');
  }
  
  return publishableKey;
}; 