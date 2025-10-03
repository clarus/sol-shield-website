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
    title: 'Automated',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    image: '/img/feature_lone_penguin.png',
    description: (
      <>
        Audits are expensive, especially for new projects.<br />
        Thanks to AI, we leverage automation<br />
        to reduce the cost to a minimum.
      </>
    ),
  },
  {
    title: 'Reliable',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    image: '/img/feature_rocket.png',
    description: (
      <>
        We ensure audits are extensive,<br />
        for the checklist we are verifying.<br />
        We use formal verification, so that you do not need to take our words for granted.
      </>
    ),
  },
  {
    title: 'Subscription Based',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    image: '/img/feature_three_penguins.png',
    description: (
      <>
        Pay as you go, a reasonable fee each month.<br />
        We make sure all your commits are safe<br/ >
        and ready to deploy.
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
        <Heading as="h3" style={{paddingBottom: 12, paddingTop: 20}}>{title}</Heading>
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
