import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { Analytics } from '@vercel/analytics/react'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/avatar.jpg'

export default function About() {
  const { author, email, linkedin, github } = siteMetadata

  const alignTxtRight = {
    textAlign: 'right',
  }

  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta name="description" content="Hi, I'm Brandon. Here's a little about me..." />
      </Head>

      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About me
          </h1>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={portraitImage}
              alt="Brandon.jpg"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Brandon <br></br> Lessard-Rook
            </h3>
            <div className="font-medium text-gray-500 dark:text-gray-400">Full stack developer</div>
            <div className="text-gray-500 dark:text-gray-400">#LookingForWork</div>
          </div>

          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div>
              <p>
                Dynamic and skilled Full Stack Developer with a strong foundation in front-end and
                back-end development. Equipped with a diverse set of programming languages and
                frameworks, I specialize in creating dynamic and responsive web applications.
              </p>
              <p>
                Passionate about solving complex problems and constantly seeking opportunities to
                learn and grow, I am excited to contribute my expertise to a dynamic team to drive
                innovation and deliver impactful solutions.
              </p>
            </div>

            <p className="mt-8">
              
              <h2 className="mt-8 mb-4 text-2xl font-semibold dark:text-white">Commendations from my previous work</h2>
              <p><i>
                Brandon is an exceptionally fast learner and productive team member, able to move
                from one area to a drastically different one at the drop of hat. He produces his
                best work when the goal is clear, and his best surprises when the way to reach it is
                uncertain. One of his greatest strengths lies in his active experimentation – he is
                rarely satisfied with thinking a problem through, and tends to validate his ideas by
                manifesting them on a small scale and then making a go/no-go decision. 
              </i>
              </p>
              <p><i>
                Another outstanding attribute is his listening skills: Brandon is a man of few words, but I
                have learned that he is a very engaged and diligent listener, and he has the ability
                to ‘get’ conceptual discussions on the first pass like few others. He possesses a
                very developed analytical side and supplies his team with pragmatic insights that
                are well worth everyone’s time to listen to.</i></p>
              
              <p style={alignTxtRight}>
                <i style={alignTxtRight}>
                  <b>- Robert Hanna, CERASP</b>
                </i>
              </p>
            </p>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  )
}
