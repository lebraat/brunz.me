import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="not-prose my-8">
      <div className="rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <img {...props} className="w-full" loading="lazy" />
      </div>
      {props.alt && (
        <figcaption className="mt-2 text-[13px] text-neutral-400">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
}

interface MDXContentProps {
  source: string
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-sm prose-neutral max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
