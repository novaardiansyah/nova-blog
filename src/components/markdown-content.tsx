"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { createRoot } from "react-dom/client"

interface MarkdownContentProps {
  content: string
}

function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy!", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none z-10"
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  )
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const preElements = containerRef.current.querySelectorAll("pre")

    preElements.forEach((pre) => {
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return

      const wrapper = document.createElement("div")
      wrapper.className = "code-block-wrapper relative group my-6 overflow-hidden rounded-xl border border-zinc-800"

      pre.parentNode?.insertBefore(wrapper, pre)

      wrapper.appendChild(pre)

      pre.className = "!bg-zinc-950 !text-zinc-100 !m-0 !p-4 overflow-x-auto"
      pre.style.backgroundColor = "#09090b"
      pre.style.color = "#f4f4f5"

      const buttonContainer = document.createElement("div")
      wrapper.appendChild(buttonContainer)

      const code = pre.querySelector("code")?.innerText || pre.innerText

      const root = createRoot(buttonContainer)
      root.render(<CopyButton text={code} />)
    })
  }, [content])

  return (
    <div
      ref={containerRef}
      className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl max-w-none [&>pre]:hidden"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
