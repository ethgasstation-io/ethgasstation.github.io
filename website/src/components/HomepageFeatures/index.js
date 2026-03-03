import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Live gas lanes',
    Icon: require('@site/static/img/icon-gas.svg').default,
    description: (
      <>
        Track <strong>Economy</strong>, <strong>Standard</strong>, and <strong>Fast</strong> lanes
        with freshness indicators so you can act on real-time numbers.
      </>
    ),
  },
  {
    title: 'Alerts that don’t spam you',
    Icon: require('@site/static/img/icon-alerts.svg').default,
    description: (
      <>
        Threshold alerts with cooldowns — notify on meaningful crossings, not
        every tiny fluctuation.
      </>
    ),
  },
  {
    title: 'API + AI Connect (MCP)',
    Icon: require('@site/static/img/icon-api.svg').default,
    description: (
      <>
        Use the API for integrations, or manage alerts from chat via{' '}
        <strong>AI Connect</strong> (MCP).
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap}>
          <Icon className={styles.featureIcon} role="img" aria-hidden="true" />
        </div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
