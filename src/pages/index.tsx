import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            Une documentation pensée comme un parcours d&apos;apprentissage pour
            comprendre les concepts fondamentaux, les styles d&apos;architecture
            et le DDD avec des explications progressives.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--lg',
                styles.primaryButton,
              )}
              to="/docs/concepts-fondamentaux">
              Commencer par les bases
            </Link>
          </div>
        </div>
        <div className={styles.heroCard}>
          <p className={styles.heroCardLabel}>Parcours recommandé</p>
          <ol className={styles.heroSteps}>
            <li>Concepts fondamentaux</li>
            <li>Architecture logicielle</li>
            <li>Architecture monolithique</li>
            <li>Architecture distribuée</li>
            <li>DDD</li>
          </ol>
          <p className={styles.heroCardText}>
            L&apos;idée est simple : construire un socle solide, puis monter en
            abstraction sans perdre le fil.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation d introduction sur les concepts fondamentaux, les architectures et le DDD.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
