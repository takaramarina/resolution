import { Check, Instagram, Menu } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-6 md:px-10">
        <div className="text-lg font-medium">Lorum Ipsum™</div>
        <div className="text-lg">Information</div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <Menu className="h-5 w-5" />
            <span>Index</span>
          </button>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 md:px-10">
        {/* Title */}
        <h1 className="mb-20 mt-10 text-center text-7xl font-normal md:text-8xl">Lorem Ipsum</h1>

        {/* Project Details */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="text-lg">Project 1</div>
          <div className="text-lg">Sodales: Malesuada</div>
          <div className="text-lg">09-24-1953</div>
        </div>

        {/* Project Content */}
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square bg-gray-100 relative">
            <div className="absolute inset-0">
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div
                    className="border-t border-gray-300 w-full h-0 absolute top-0 left-0 transform rotate-45 origin-top-left"
                    style={{ width: "141.4%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus odio eleifend risus luctus
              varius. Suspendisse et nulla nec sapien sagittis blandit. Nulla eu ultrices ligula. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae; In imperdiet augue sit a met lacinia
              blandit. Morbi venenatis et lorem convallis pharetra. Ut nulla dolor, posuere at nisi in, congue tristique
              urna. Nunc volutpat ultrices veli.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Sodales: Malesuada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Nulla: Sapien</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Proin: Dignissim</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

