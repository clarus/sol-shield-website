import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '✨ AI Automation',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    image: '/img/feature_nature.jpg',
    description: (
      <>
        Audits are expensive, especially for new projects. Using AI, we leverage as much automation as possible to reduce their cost.
      </>
    ),
  },
  {
    title: '💯 Reliable',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    image: '/img/feature_rocket.jpg',
    description: (
      <>
        Using <a href="https://rocq-prover.org/">formal verification</a>, we make sure audits are extensive, for the checklist we are verifying. No more need to take our words for granted!
      </>
    ),
  },
  {
    title: '🤝 Subscription Based',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    image: '/img/feature_boat.jpg',
    description: (
      <>
        Pay as you go, a reasonable fee each month, to make sure all your commits are safe and ready to deploy!
      </>
    ),
  },
];

function Feature({title, Svg, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {image && <img src={image} alt={title} className={styles.featureImage} style={{width: 220}} />}
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
