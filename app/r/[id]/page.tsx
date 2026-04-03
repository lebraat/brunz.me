import { notFound } from 'next/navigation'
import { getResume, getAllResumeIds } from '@/lib/resumes'
import MDXContent from '@/components/MDXContent'
import DownloadButton from './DownloadButton'

export function generateStaticParams() {
  return getAllResumeIds().map((id) => ({ id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const resume = getResume(params.id)
  if (!resume) return { title: 'Not Found' }

  return {
    title: resume.title,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function ResumePage({ params }: { params: { id: string } }) {
  const resume = getResume(params.id)

  if (!resume) {
    notFound()
  }

  return (
    <div className="resume-page font-mono antialiased">
      <style>{`
        @media print {
          .no-print { display: none !important; }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .resume-page {
            padding: 0 !important;
            max-width: 100% !important;
          }
          .resume-page > div {
            padding: 0.3in 0.4in !important;
            max-width: 100% !important;
          }
          .resume-content { margin-top: 0 !important; }
          @page {
            margin: 0;
            size: letter;
          }
          a { text-decoration: none !important; }
          h2 { page-break-after: avoid; }
          h3 { page-break-after: avoid; }
          ul, ol { page-break-inside: avoid; }
        }
      `}</style>

      <div className="max-w-[680px] mx-auto px-6 py-12 sm:py-16">
        {/* Download button */}
        <div className="no-print flex justify-end mb-8">
          <DownloadButton />
        </div>

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-[15px] font-semibold leading-snug tracking-tight">
            Daniel Brunsdon
          </h1>
          <p className="text-[13px] text-neutral-400 mt-1">
            Denver, CO &middot; linkedin.com/in/danielbrunsdon &middot; @lebraat
          </p>
        </header>

        <hr className="border-neutral-200 mb-6" />

        {/* Resume content */}
        <style>{`
          .resume-content h2 {
            font-size: 15px;
            font-weight: 600;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            letter-spacing: -0.01em;
          }
          .resume-content h3 {
            font-size: 14px;
            font-weight: 600;
            margin-top: 1.2em;
            margin-bottom: 0.4em;
          }
        `}</style>
        <div className="resume-content text-[13px] leading-relaxed">
          <MDXContent source={resume.content} />
        </div>
      </div>
    </div>
  )
}
