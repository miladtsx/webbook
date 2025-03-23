import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI Codes, You Engineer',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        AI can generate code, but only <strong style={{ color: 'orange' }}>you</strong> can make it reliable, scalable, and secure.
      </>
    ),
  },
  {
    title: 'Spot & Fix AI Mistakes',
    Svg: require('@site/static/img/debug.svg').default,
    description: (
      <>
        Learn how to <strong style={{ color: 'orange' }}>review, debug, and refine</strong> AI-generated code to avoid common pitfalls.
      </>
    ),
  },
  {
    title: 'Think Like an Engineer',
    Svg: require('@site/static/img/engineering.svg').default,
    description: (
      <>
        Go beyond AI-generated code—apply <strong style={{ color: 'orange' }}>best practices</strong> for maintainability and security.
      </>
    ),
  },
  {
    title: 'Practical & Hands-On',
    Svg: require('@site/static/img/practical.svg').default,
    description: (
      <>
        Get <strong style={{ color: 'orange' }}>real-world examples</strong> and actionable insights, without unnecessary theory.
      </>
    ),
  },
];


function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
