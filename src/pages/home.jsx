import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/lunanav.png';
import image2 from '@/images/photos/luxor_lim.png';
import image3 from '@/images/photos/invictus_freight.png';
import image4 from '@/images/photos/weeding.png';
import image5 from '@/images/photos/dairy_website.png';
import halcyoncore from '@/images/logos/hc-logo.png';
import amazonIcon from '@/images/logos/amazonlogo.png';
import Supervision from '@/images/logos/logo.svg';
import Envyus_media from '@/images/logos/envyus_media_pvt_ltd_logo.jpeg';

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
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

function Resume() {
  let resume = [
    {
      company: 'Full Stack Developer',
      title: 'SuperVisionIT Solutions',
      logo: Supervision,
      start: 'Aug 2020',
      end: 'Present',
    }
  ]




  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 flex-wrap md:flex-nowrap">
        {[image5,image1, image2, image3, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Jatinder Sandhu | Full Stack Developer | PHP, React, Nodejs, Laravel Expert</title>
        <meta
          name="description"
          content="Experienced Full Stack Developer with expertise in PHP, React, Nodejs, Next.js, Laravel, and WordPress. Developing scalable web apps using cutting-edge technology and best practices. "
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full Stack Developer specializing in PHP, React, Nodejs and Laravel
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Jatinder Sandhu, an experienced Full Stack Developer with 4+ years of experience in PHP, React, Node.js, Laravel, and WordPress. I have a great gift for construction. Our focus is on developing scalable web apps with good speed. I stay current with technology and adhere to industry standards in my delivery. I have gained experience with complicated web development projects, API connections, and responsive front-end designs.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/pb03jatinder77"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jatindersingh667/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="mailto:jatinder17966@gmail.com"
              icon={MailIcon}
            >
            </SocialLink>
            <SocialLink
              href="tel:9888360667"
              icon={PhoneIcon}
            >
            </SocialLink>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* {<Newsletter />} */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
