import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const MainFeatureSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary text-white to-violet-500 relative w-screen overflow-hidden pb-0">
      <div className=" w-full pl-32 py-12 sm:py-32 ">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-7">
          <div className="">
            <span className="mb-4 block font-mono text-lg font-medium">
              Smart Finance
            </span>
            <h1 className="text-7xl font-medium tracking-tight text-white">
              Manage money like never before
            </h1>
            <p className="pt-10 text-lg leading-8 text-gray-100">
              The complete financial platform. Track, invest, and grow wealth.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                asChild
                className="h-fit bg-white text-foreground rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-200 shadow-sm"
              >
                <a href="#">Start free trial</a>
              </Button>
              <Button
                asChild
                className="h-fit bg-transparent border-2 border-white text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-white hover:text-foreground shadow-sm"
              >
                <a href="#">Watch demo</a>
              </Button>
            </div>
          </div>
          <div>
            <div className="relative  overflow-hidden rounded-l-lg bg-primary shadow-lg lg:mx-0">
              <div className="overflow-hidden w-full object-cover rounded-tl-md">
                <video
                  // alt=""
                  src="https://cdn.dribbble.com/userupload/8073511/file/original-a5de25ece991e2bdcc96991b3ae48719.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white text-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for financial success
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful tools and insights to help you make smarter financial decisions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  Real-time Analytics
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Track your spending patterns and investment performance with detailed insights and reports.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  Bank-level Security
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Your financial data is protected with enterprise-grade encryption and security protocols.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  Mobile First Design
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Manage your finances on the go with our intuitive mobile app and responsive design.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to take control of your finances?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Join thousands of users who have transformed their financial future with our platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                className="h-fit bg-white text-foreground rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-200 shadow-sm"
              >
                <a href="#">Get started today</a>
              </Button>
              <Button
                asChild
                className="h-fit bg-transparent border-2 border-white text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-white hover:text-foreground shadow-sm"
              >
                <a href="#">Learn more</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainFeatureSection };