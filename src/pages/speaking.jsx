import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Jatinder Sandhu</title>
        <meta
          name="description"
          content="If you are looking for your next guest speaker, I'm your girl!"
        />
      </Head>
      <SimpleLayout
        title="Educational Background & Professional Journey"
        intro="A Computer Science graduate from GURU KASHI UNIVERSITY (NAAC A++), with strong academic foundation and practical expertise in web development technologies. My educational journey reflects dedication to technical excellence and continuous learning."
      >
        <div className="space-y-20">
          <SpeakingSection title="GURU KASHI UNIVERSITY Naac A++">
            <Appearance
              href=""
              title="Master's in Computer Science"
              description="Specialized in Advanced Web Technologies, Database Management Systems, and Software Architecture. Developed strong analytical and problem-solving skills through intensive coursework and practical projects."
              event="Master's degree, Computer Science"
              cta="2015 - 2018"
            />
            <Appearance
              href=""
              title="Bachelor of Computer Applications (BCA)"
              description="Built a strong foundation in programming fundamentals, data structures, and web development. Participated in various technical workshops and coding competitions, enhancing practical knowledge in software development."
              event="Bachelor of Computer Applications"
              cta="2011 - 2014"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
