export function randomString() {
  return Math.random().toString(36).substring(2, 15).slice(0, 8);
}
