type RateEntry = {
  count: number;
  resetAt: number;
};

const hits = new Map<string, RateEntry>();

/**
 * Simple in-memory rate limiter (per server instance).
 * Suitable for Vercel serverless soft protection; not a substitute for WAF.
 */
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 15 * 60 * 1000,
): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const existing = hits.get(key);

  if (!existing || existing.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  hits.set(key, existing);
  return { allowed: true, retryAfterSec: 0 };
}
