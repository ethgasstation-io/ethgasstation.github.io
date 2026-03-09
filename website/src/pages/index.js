import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const quickLinks = [
  {
    label: 'Start here',
    href: '/docs/intro',
    copy: 'Overview of the product, what each docs section covers, and where to go next.',
  },
  {
    label: 'API',
    href: '/docs/api/overview',
    copy: 'Authentication, examples, limits, and errors for application and backend integrations.',
  },
  {
    label: 'Alerts',
    href: '/docs/alerts/overview',
    copy: 'Thresholds, cooldowns, and setup guidance for actionable gas alerts.',
  },
  {
    label: 'AI Connect',
    href: '/docs/ai-connect/overview',
    copy: 'Connect MCP-compatible clients to read gas data and manage alerts from chat.',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Documentation</p>
          <Heading as="h1" className={styles.title}>
            EthGasStation<span className={styles.titleLight}>/Docs</span>
          </Heading>
          <p className={styles.subtitle}>
            Integrate live gas data, transaction alerts, and AI Connect features into your applications.
          </p>

          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/api/overview">
              View API
            </Link>
          </div>
        </div>

        <div className={styles.quickLinks}>
          {quickLinks.map((item) => (
            <Link key={item.label} to={item.href} className={styles.quickLink}>
              <div>
                <strong>{item.label}</strong>
                <p>{item.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
