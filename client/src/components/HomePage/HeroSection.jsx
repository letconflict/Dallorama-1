/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'Quantum Dreams',
      description: 'On a journey through the cosmos of creativity with Quantum Dreams, where pixels dance in harmony',
      imageSrc: 'https://img.playbook.com/h-6Q-ONU4obR6qDPz0NJCup86jjRy-4WP5zeVSMWmV8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzYzYjUyYTI0/LWY5YjktNDg0NC04/YjJkLTNmYzc3ZWI0/OWE5Zg',
      imageAlt: '',
    },
    {
      name: 'Synthetica Serenity',
      description: 'Step into the surreal beauty of Synthetica Serenity, where the ethereal meets the artificial. ',
      imageSrc: 'https://img.playbook.com/e26HAp7-tKjbjCHupezLuJMSqkoF61O9hu5p3fhn9I4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I4ZmIyMDkw/LWZiNmUtNDFmNy04/OTFkLWFjNjdlZGUy/ZThiMw',
      imageAlt: '',
    },
    {
      name: 'Cyborg Symphony',
      description: 'Witness the harmonious fusion of man and machine in the Cyborg Symphony, a masterpiece crafted by artificial intelligence.',
      imageSrc: 'https://img.playbook.com/9ZKqqeDCJ_zL4rYeXki6_1TroyY3ltQUBmFbH6VQP50/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg0MjQzYjg2/LTMzZDItNGU2OC04/ZDU4LTljZjVlYmNl/YTllZQ',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    },
  ]
  
  export default function HeroSection() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  