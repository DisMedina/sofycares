import { useState, useEffect } from 'react';
import { EMAIL_LIMITS } from '@/config/emailjs';

interface EmailUsage {
  used: number;
  limit: number;
  isLoading: boolean;
  error: string | null;
  isLimitReached: boolean;
  isWarningLevel: boolean;
  isCriticalLevel: boolean;
}

export function useEmailUsage(): EmailUsage {
  const [usage, setUsage] = useState<EmailUsage>({
    used: 0,
    limit: EMAIL_LIMITS.FREE_TIER_LIMIT,
    isLoading: true,
    error: null,
    isLimitReached: false,
    isWarningLevel: false,
    isCriticalLevel: false,
  });

  useEffect(() => {
    // Usage tracking requires a private key which is not exposed to the client.
    // Default to no usage data so the form stays enabled.
    setUsage(prev => ({
      ...prev,
      isLoading: false,
      error: null,
    }));
  }, []);

  return usage;
}
