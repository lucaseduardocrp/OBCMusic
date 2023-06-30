export function secondsToTime(sec: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0')

  const seconds = zeroLeft((sec % 60) % 60);
  const minuts = zeroLeft((sec / 60) % 60);
  const hour = zeroLeft((sec / 3600) % 24);
  const day = zeroLeft((sec / 86400));


  return `${day}d ${hour}h ${minuts}m ${seconds}s`
}