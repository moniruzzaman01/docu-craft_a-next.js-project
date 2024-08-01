import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <article className="prose dark:prose-invert">
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
        </div>
      </div>

      <h1>API Documentation</h1>
      <p className="lead">
        Use the Protocol API to access contacts, conversations, group messages,
        and more and seamlessly integrate your product into the workflows of
        dozens of devoted Protocol users.
      </p>
      <div className="my-16 xl:max-w-none">
        <div className="not-prose mb-16 mt-6 flex gap-3">
          <Link className="buttonDark" href="/quickstart">
            Quickstart
          </Link>
          <Link className="buttonLight" href="/sdks">
            Explore SDKs
          </Link>
        </div>
      </div>

      <h2>Getting started</h2>
      <p className="lead">
        To get started, create a new application in your
        <Link href="#">developer settings</Link> , then read about how to make
        requests for the resources you need to access using our HTTP APIs or
        dedicated client SDKs. When your integration is ready to go live,
        publish it to our <Link href="#">integrations directory</Link> to reach
        the Protocol community.
      </p>
      <div className="my-16 xl:max-w-none">
        <div className="not-prose">
          <Link className="linkGreen" href="/sdks">
            Get your API key
          </Link>
        </div>
      </div>

      <div className="my-16 xl:max-w-none">
        <h2 id="guides" className="scroll-mt-24">
          <Link
            className="group text-inherit no-underline hover:text-inherit"
            href="#guides"
          >
            <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
              <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                <Image
                  src="/rightArrow.svg"
                  alt=""
                  width="1600"
                  height="1280"
                />
              </div>
            </div>
            Guides
          </Link>
        </h2>
        <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Authentication
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Learn how to authenticate your API requests.
            </p>
            <p className="mt-4">
              <Link className="readMore" href="/authentication">
                <span>Read more</span>
                <Image
                  src="/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  width="1600"
                  height="1280"
                />
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Pagination
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Understand how to work with paginated responses.
            </p>
            <p className="mt-4">
              <Link className="readMore" href="/authentication">
                <span>Read more</span>
                <Image
                  src="/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  width="1600"
                  height="1280"
                />
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Errors
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Read about the different types of errors returned by the API.
            </p>
            <p className="mt-4">
              <Link className="readMore" href="/authentication">
                <span>Read more</span>
                <Image
                  src="/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  width="1600"
                  height="1280"
                />
              </Link>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Webhooks
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Learn how to programmatically configure webhooks for your app.
            </p>
            <p className="mt-4">
              <Link className="readMore" href="/authentication">
                <span>Read more</span>
                <Image
                  src="/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                  width="1600"
                  height="1280"
                />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="my-16 xl:max-w-none">
        <h2 id="resources" className="scroll-mt-24">
          <Link
            className="group text-inherit no-underline hover:text-inherit"
            href="#resources"
          >
            Resources
          </Link>
        </h2>
        <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
            <div className="relative rounded-2xl px-4 pb-4 pt-16">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                <Image
                  src="/contact.svg"
                  alt="Contacts"
                  className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                  width="1600"
                  height="1280"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                <Link href="/contacts">
                  <span className="absolute inset-0 rounded-2xl"></span>Contacts
                </Link>
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Learn about the contact model and how to create, retrieve,
                update, delete, and list contacts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 id="test" className="scroll-mt-24">
          <Link
            className="group text-inherit no-underline hover:text-inherit"
            href="#test"
          >
            Test
          </Link>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          pariatur repellendus vero doloremque sint, quod aliquid possimus esse
          labore maxime quaerat error enim! Velit incidunt soluta pariatur
          doloribus hic! Distinctio earum ea enim repudiandae repellat vero
          dignissimos sequi optio nulla explicabo provident ipsum eaque
          incidunt, ducimus dolore dolor accusamus. Exercitationem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque
          quibusdam vel temporibus tempore eum, odio odit adipisci similique
          dolor a illo iusto deserunt voluptate perspiciatis aliquid ad id sed?
        </p>
      </div>
    </article>
  );
}
