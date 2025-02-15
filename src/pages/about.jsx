import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/logos/jatinder-php-react-nodejs.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const PhoneIcon = () => {
  return (
    <svg
      height="24px"
      width="24px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          className="fill-zinc-500"
          d="M130.344,129.778c-27.425,17.786-32.812,73.384-22.459,118.698c8.064,35.288,25.208,82.623,54.117,127.198
	c27.196,41.933,65.138,79.532,94.069,101.286c37.151,27.934,90.112,45.688,117.537,27.902c13.868-8.994,34.47-33.567,35.41-37.976
	c0,0-12.082-18.629-14.733-22.716l-40.516-62.47c-3.011-4.642-21.892-0.399-31.484,5.034
	c-12.938,7.331-24.854,27.001-24.854,27.001c-8.872,5.125-16.302,0.019-31.828-7.126c-19.081-8.779-40.535-36.058-57.609-60.765
	c-15.595-25.666-31.753-56.38-31.988-77.382c-0.192-17.09-1.824-25.957,6.473-31.967c0,0,22.82-2.858,34.79-11.681
	c8.872-6.542,20.447-22.051,17.436-26.693l-40.515-62.47c-2.651-4.088-14.733-22.716-14.733-22.716
	C175.05,111.994,144.211,120.784,130.344,129.778z"
        />
        <path
          className="fill-zinc-500"
          d="M360.036,176.391c16.488-67.201-22.687-135.921-88.913-155.97L276.715,0
	c77.488,23.14,123.308,103.517,103.742,181.983L360.036,176.391z"
        />
        <path
          className="fill-zinc-500"
          d="M315.781,164.273c9.845-42.802-14.93-86.262-56.776-99.596l5.594-20.428
	c53.106,16.435,84.524,71.548,71.61,125.618L315.781,164.273z"
        />
        <path
          className="fill-zinc-500"
          d="M271.466,152.138c3.288-18.373-7.111-36.616-24.596-43.147l5.605-20.468
	c28.724,9.694,45.751,39.564,39.459,69.22L271.466,152.138z"
        />
      </g>
    </svg>
  );
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jatinder Sandhu</title>
        <meta
          name="description"
          content="I'm Jatinder Sandhu. A leader, artist, and frontend enthusiast in Austin, TX."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Jatinder Sandhu. A Full Stack Developer in Mohali, Paujab, India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Full Stack Developer with more than 5 years of expertise in web development. My experience is in developing powerful apps with PHP, React, Nodejs, Laravel, and WordPress. I&apos;ve spent my career developing efficient, scalable solutions that have a significant influence on the digital world.
              </p>
              <p>
                Throughout my professional career, I&apos;ve successfully executed a number of complicated projects, ranging from e-commerce platforms to enterprise-level apps. My methodology combines technical competence with a thorough grasp of business requirements, ensuring that each solution not only functions perfectly but also adds actual value to users and stakeholders.
              </p>
              <p>
                I specialize in creating high-performance online apps, RESTful APIs, and responsive front-ends. My technological toolset includes contemporary frameworks and technologies, and I continuously study and adapt to stay ahead in the ever-changing digital scene. I take pleasure in producing clean, maintainable code that follows industry best practices.
              </p>
              <p>
                When not coding, I contribute to open-source projects, mentor junior developers, and explore new technologies.
                I am passionate about information sharing and community-driven development.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/pb03jatinder77"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jatindersingh667/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:jatinder17966@gmail.com"
                icon={MailIcon}
                className="mt-4"
              >
                jatinder17966@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:9888360667"
                icon={PhoneIcon}
                className="mt-4"
              >
                9888360667
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
