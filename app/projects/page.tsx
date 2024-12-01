export const metadata = {
  title: 'Projects',
  description: 'Check out my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <div className="flex flex-col gap-6">
        <div className="group">
          <a 
            href="https://github.com/wintervoid/wintervoid.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col space-y-1 hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            <div className="flex items-center">
              <h2 className="font-medium">.me</h2>
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              My personal website built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
