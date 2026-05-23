// Dynamically import all images in assets/images using Vite's glob import
const allImages = import.meta.glob<{ default: string }>('../assets/images/**/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true })

export const getImageUrl = (imagePath: string) => {
  const key = `../assets/images/${imagePath}`
  return allImages[key]?.default || ''
}
