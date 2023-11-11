import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-bold text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/proj-i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.svg"
              alt="36대 학생자치정부 정보부 로고"
              className="dark:invert"
              width={80}
              height={20}
              priority
            />
          </a>
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:dark:bg-zinc-800/30">
          HANIL Project_i&nbsp;
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <Image
          className="relative dark:drop-shadow-[0_0_1rem_#9c33ff70]"
          src="/ipad.png"
          alt="iPad Pro"
          width={480}
          height={300}
          priority
        />
      </div>

      <div className='flex flex-col before:h-[50px] before:w-[400px] after:h-[0px] after:w-[400px] items-center justify-center w-full h-full'>
      <h1 className="text-4xl font-bold text-center lg:text-center lg:text-4xl">
        모두가 바라던 꿈, 마침내 현실이 되다.
      </h1>
      </div>

      <div className='flex flex-col before:h-[0px] before:w-[400px] after:h-[30px] after:w-[400px] items-center justify-center w-full h-full'>
      <h1 className="m-3 text-medium font-regular text-center lg:text-center lg:text-medium">
        전자기기 확대 사업의 일환으로 이제 학교에서 Chromebook 대신 iPad를 사용할 수 있습니다.
      </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-300 lg:mb-0 lg:text-left">
        <a
          href="https://github.com/proj-i/proji_profile"
          className="group rounded-lg border px-5 py-4 transition-colors hover:border-purple-300 hover:bg-purple-100 hover:dark:border-purple-700 hover:dark:bg-purple-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            가이드{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            한일고등학교 내에서 iPad를 사용하는 방법을 알아보세요.
          </p>
        </a>
      </div>
    </main>
  )
}
