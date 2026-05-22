import { siteConfig } from '../data/siteConfig'

/**
 * Fetches the resume as a PDF blob and triggers a proper .pdf download
 * (avoids browsers saving SPA HTML as .htm when the link fails).
 */
export async function downloadResume() {
  const response = await fetch(siteConfig.resumeUrl, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Resume file not found. Add public/resume.pdf')
  }

  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('text/html')) {
    throw new Error('Resume URL returned HTML instead of PDF')
  }

  const blob = await response.blob()
  const pdfBlob =
    blob.type === 'application/pdf'
      ? blob
      : new Blob([blob], { type: 'application/pdf' })

  const url = URL.createObjectURL(pdfBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = siteConfig.resumeFileName
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
