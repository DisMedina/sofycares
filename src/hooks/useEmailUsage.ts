import { useState, useEffect } from 'react';
import { EMAILJS_CONFIG, EMAIL_LIMITS } from '@/config/emailjs';

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
    const fetchUsage = async () => {
      // Skip if private key is not configured (still in setup phase)
      if (!EMAILJS_CONFIG.privateKey || EMAILJS_CONFIG.privateKey === 'YOUR_PRIVATE_KEY') {
        setUsage(prev => ({
          ...prev,
          isLoading: false,
          error: null,
        }));
        return;
      }

      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/account/usage', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${EMAILJS_CONFIG.privateKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch email usage');
        }

        const data = await response.json();
        const emailsUsed = data.sent || 0;

        setUsage({
          used: emailsUsed,
          limit: EMAIL_LIMITS.FREE_TIER_LIMIT,
          isLoading: false,
          error: null,
          isLimitReached: emailsUsed >= EMAIL_LIMITS.FREE_TIER_LIMIT,
          isWarningLevel: emailsUsed >= EMAIL_LIMITS.WARNING_THRESHOLD && emailsUsed < EMAIL_LIMITS.CRITICAL_THRESHOLD,
          isCriticalLevel: emailsUsed >= EMAIL_LIMITS.CRITICAL_THRESHOLD && emailsUsed < EMAIL_LIMITS.FREE_TIER_LIMIT,
        });
      } catch (error) {
        console.error('Error fetching email usage:', error);
        setUsage(prev => ({
          ...prev,
          isLoading: false,
          error: 'Unable to check email usage',
        }));
      }
    };

    fetchUsage();
  }, []);

  return usage;
}
