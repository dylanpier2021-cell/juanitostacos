/** Format an ISO date string (for example "2026-06-18") as "June 18, 2026". */
export function formatDate(iso: string): string {
  // Parse as UTC noon to avoid timezone drift shifting the day.
  const d = new Date(`${iso}T12:00:00Z`)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
