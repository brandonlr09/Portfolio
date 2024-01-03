/* eslint-disable prettier/prettier */
import {
  // Languages
  SiJava,
  SiCsharp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  // Frameworks
  SiSpringboot,
  Si,
  SiJquery,
  SiBootstrap,
  SiReact,
  SiLaravel,

  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  // Databases
  SiMysql,
  SiMongodb,
  // Cloud Computing
  SiDocker,
  SiAmazonaws,
  // Tools
  SiGit,
  SiGithub,
  SiAzuredevops,
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/FramerMotionVariants'

const skills = [
  {
    name: 'Java',
    logo: SiJava,
  },
  {
    name: 'C#',
    logo: SiCsharp,
  },
  {
    name: 'Python',
    logo: SiPython,
  },
  {
    name: 'HTML',
    logo: SiHtml5,
  },
  {
    name: 'CSS',
    logo: SiCss3,
  },
  {
    name: 'JavaScript',
    logo: SiJavascript,
  },
  {
    name: 'PHP',
    logo: SiPhp,
  },

  {
    name: 'Spring Boot',
    logo: SiSpringboot,
  },
  {
    name: 'jQuery',
    logo: SiJquery,
  },
  {
    name: 'Bootstrap',
    logo: SiBootstrap,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Laravel',
    logo: SiLaravel,
  },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
  },
  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss,
  },
  
  {
    name: 'MySQL',
    logo: SiMysql,
  },
  {
    name: 'MongoDB',
    logo: SiMongodb,
  },

  {
    name: 'Docker',
    logo: SiDocker,
  },
  {
    name: 'Amazon Web Services',
    logo: SiAmazonaws,
  },

  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'Github',
    logo: SiGithub,
  },
  {
    name: 'Azure DevOps',
    logo: SiAzuredevops,
  },
]

const skillsl = [
  {
    name: 'Java',
    logo: SiJava,
  },
  {
    name: 'C#',
    logo: SiCsharp,
  },
  {
    name: 'Python',
    logo: SiPython,
  },
  {
    name: 'HTML',
    logo: SiHtml5,
  },
  {
    name: 'CSS',
    logo: SiCss3,
  },
  {
    name: 'JavaScript',
    logo: SiJavascript,
  },
  {
    name: 'PHP',
    logo: SiPhp,
  },
]

const skillsf = [
  {
    name: 'Spring Boot',
    logo: SiSpringboot,
  },
  {
    name: 'jQuery',
    logo: SiJquery,
  },
  {
    name: 'Bootstrap',
    logo: SiBootstrap,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Laravel',
    logo: SiLaravel,
  },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
  },
  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss,
  },
]

const skillsd = [
  {
    name: 'MySQL',
    logo: SiMysql,
  },
  {
    name: 'MongoDB',
    logo: SiMongodb,
  },
]

const skillsc = [
  {
    name: 'Docker',
    logo: SiDocker,
  },
  {
    name: 'Amazon Web Services',
    logo: SiAmazonaws,
  },
]

const skillst = [
  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'Github',
    logo: SiGithub,
  },
  {
    name: 'Azure DevOps',
    logo: SiAzuredevops,
  },
]

const Skills = () => {
  return (
    <>
      <br />
      <span className="font-poppins title-font text-3xl font-bold">My Top Skills</span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4"
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              title={skill.name}
              variants={popUp}
              key={skill.name}
              onMouseMove={(e) => showHoverAnimation(e)}
              onMouseLeave={(e) => removeHoverAnimation(e)}
              className="dark:bg-darkPrimary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                <skill.logo className="h-8 w-8" />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default Skills
