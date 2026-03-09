import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Live gas lanes',
    description: (
      <>
        Track <strong>Economy</strong>, <strong>Standard</strong>, and <strong>Fast</strong>{' '}
        lanes with freshness guidance and product terminology that matches the app.
      </>
    ),
    href: '/docs/gas-lanes-and-stats',
  },
  {
    title: 'Alert operations',
    description: (
      <>
        Configure thresholds and cooldowns so your alerts react to real opportunities,
        not every tiny swing.
      </>
    ),
    href: '/docs/alerts/overview',
  },
  {
    title: 'Developer API',
    description: (
      <>
        Authenticate, handle limits, and wire gas data into wallets, bots, dashboards,
        and backend jobs.
      </>
    ),
    href: '/docs/api/overview',
  },
  {
    title: 'AI Connect workflows',
    description: (
      <>
        Connect MCP-compatible clients so prompts can inspect gas context and manage
        alerts in account-aware sessions.
      </>
    ),
    href: '/docs/ai-connect/overview',
  },
];

function Feature({title, description, href}) {
  return (
    <article className={clsx(styles.featureCard)}>
      <Link to={href} className={styles.featureLink}>
        <div>
          <Heading as="h3">{title}</Heading>
          <p className={styles.featureText}>{description}</p>
          <span className={styles.featureCta}>Open docs</span>
        </div>
      </Link>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionLead}>
          <p className={styles.sectionEyebrow}>Reference surface</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Core product areas documented here.
          </Heading>
          <p className={styles.sectionText}>
            The homepage points into the documentation set: feature usage, integration details,
            and operational guidance for the product.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
