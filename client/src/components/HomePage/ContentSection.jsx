import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Enhance Your Workflow with Dallorama:

</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Optimized Workflow with Dallorama AI Image Generation</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Welcome to Dallorama, the artistic essence of Cloudafe's AI innovation. Transform your ideas into visual masterpieces with our cutting-edge Image Generation AI. Explore a world where pixels dance to the rhythm of creativity, curated by the intelligence of Dallorama.              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://img.playbook.com/-wFHLC1IkMtC48gX2KDLoVEY6rN2u52gaeW46dldO9Y/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQzZWFkNTY3/LTk5ZGItNDBiNi04/NTc0LWE0YWVhN2I5/ZGExZg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Dive into the world of AI image processing, reshaping industries through precise visual data analysis. Explore automation and insights for a revolutionary approach to handling visual data.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Revolutionizing DevOps with Generative AI</strong> Harness the power of Generative AI to elevate DevOps and SRE workflows. From code generation to testing and troubleshooting, experience a new level of speed, accuracy, and scalability.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Expressive AI Brushes:</strong>mmerse yourself in a palette of AI-generated brushes, crafting visuals that transcend imagination. From brushstroke to pixel, witness the expressive journey of creativity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Dynamic Content Synthesis:</strong>Break the boundaries of conventional design with Dynamic Content Synthesis. Watch as Dallorama weaves elements seamlessly, creating visuals that tell stories beyond pixels.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Engage in a collaborative design ecosystem. Dallorama, as part of Cloudafe, enables seamless teamwork, allowing multiple minds to contribute to the visual narrative.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">AI-Enhanced Image Enhancement:</h2>
              <p className="mt-6">
              Perfect your visuals with AI-Enhanced Image Enhancement. Every detail matters, and Dallorama ensures your images shine with clarity and precision. Step into a realm where AI meets artistry, where Dallorama, a proud part of Cloudafe, transforms your ideas into visually stunning realities. Experience the future of image generation, where innovation knows no bounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
