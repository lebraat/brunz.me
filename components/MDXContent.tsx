'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-sm prose-neutral max-w-none">
      <MDXRemote {...source} />
    </div>
  )
}
