import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Live gas lanes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Track <strong>Economy</strong>, <strong>Standard</strong>, and <strong>Fast</strong> lanes
        with freshness indicators so you know when numbers are real-time.
      </>
    ),
  },
  {
    title: 'Alerts that don’t spam you',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Set threshold alerts with cooldowns so you get notified when gas crosses
        your target — not every time it wiggles.
      </>
    ),
  },
  {
    title: 'API + AI Connect (MCP)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrate gas data into your systems with the API, or manage alerts from
        chat via <strong>AI Connect</strong> (MCP).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
