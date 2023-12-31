import Image from 'next/image'

export default function Home() {
  return (
    <><body>
    <header className="z-30">
      <div className="container relative flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:gap-16 md:px-8">
        <a
          className="pointer-events-none flex gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://github.com/proj-i"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.svg"
            alt="36대 학생자치정부 정보부 로고"
            className="dark:invert"
            width={80}
            height={80}
            priority />
        </a>
      </div>
    </header>
    
    <main className="flex flex-col w-full items-center justify-between">
        <div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:content-[''] after:dark:via-[#0141ff] after:dark:opacity-40">
          <Image
            className="relative dark:drop-shadow-[0_0_5rem_#9c33ff90] drop-shadow-[0_0_10rem_#9c33ff70]"
            src="/ipad.png"
            alt="iPad Pro"
            width={480}
            height={300}
            priority />
        </div>

        <div className='flex flex-col before:h-[50px] before:w-[400px] after:h-[0px] after:w-[400px] items-center justify-center w-full h-full'>
          <h1 className="text-5xl font-bold text-center lg:text-center lg:text-5xl">
            모두가 바라던 꿈, 마침내 현실이 되다.
          </h1>
        </div>

        <div className='flex flex-col before:h-[0px] before:w-[400px] after:h-[50px] after:w-[400px] items-center justify-center w-full h-full'>
          <h1 className="m-3 text-xl font-regular text-center lg:text-center lg:text-xl">
            이제 한일고등학교에서도, 남부럽지 않게 iPad를.
          </h1>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-300 lg:mb-0 lg:grid-cols-2 lg:text-left pb-24">
          <a
            href="https://jongstorage.notion.site/0a9ea7a0d1b5445f92a406f531086589?pvs=4"
            className="group rounded-lg border border-transparent px-5 py-4 transition-transform transition-colors hover:border-purple-300 hover:bg-purple-100 hover:dark:border-purple-700 hover:dark:bg-purple-800/30 hover:translate-y-1 motion-reduce:transform-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              📖 가이드{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 text-sm opacity-50`}>
              한일고등학교 내에서 iPad를 사용하는 방법을 알아보세요.
            </p>
          </a>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-300 lg:mb-0 lg:text-left">
            <a
              href="https://github.com/proj-i/proji_profile"
              className="group rounded-lg border border-transparent px-5 py-4 transition-transform transition-colors hover:border-indigo-300 hover:bg-indigo-100 hover:dark:border-indigo-700 hover:dark:bg-indigo-800/30 hover:translate-y-1 motion-reduce:transform-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                <span className="inline-block">
                  <Image
                    src="/github-mark.svg"
                    alt=" GitHub Logo"
                    className="dark:invert"
                    width={20}
                    height={20} />
                </span>
                {' '}기여하기{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                Project_i를 GitHub에서 기여하고, 함께 만들어보세요.
              </p>
            </a>
          </div>
        </div>

        <footer className="bg-mono-100 dark:bg-light text-mono-400 w-full px-4 pb-6 pt-2 text-sm">
          <div className='container mx-auto flex max-w-6xl flex-col items-center px-4 max-sm:flex-col md:px-8'>
            <p className="m-3 text-xs font-regular opacity-50 text-center lg:text-center lg:text-xs">
              We are not affilated or associated with any companies or individuals shown in our content. All rights belong to their respective owners. Unauthorized reproduction is prohibited.
              <br></br> iPad is a trademark of Apple Inc. GitHub is a trademark of GitHub Inc. | Powered by Vercel | Built by love with Project_i developers.
            </p>
            <p className="text-xs font-regular opacity-50 text-center lg:text-center lg:text-xs">
              Any Questions? <a className='text-purple-300 hover:text-indigo-200'
              href="mailto:dev@jonghyunlee.tech"
              target="_blank"
              rel="noopener noreferrer"
              >click here
              </a> to contact us.
            </p>
          </div>
        </footer>
      </main>
    </body>
    </>
  )
}
