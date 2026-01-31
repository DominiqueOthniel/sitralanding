/**
 * Préfixe pour les assets (images, etc.) en export statique.
 * En production / export HTML : '.' pour chemins relatifs (CSS + images).
 * En dev : '' pour chemins absolus depuis la racine.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function assetUrl(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  return basePath ? basePath + path : path;
}
