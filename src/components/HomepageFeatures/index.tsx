import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  href: string;
  level: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Concepts fondamentaux',
    href: '/docs/concepts-fondamentaux',
    level: 'Commencer ici',
    Svg: require('@site/static/img/concepts-fondamentaux.svg').default,
    description: (
      <>
        Les bases indispensables pour comprendre la modularité, le couplage, la
        complexité et les grands principes de conception logicielle.
      </>
    ),
  },
  {
    title: 'Architecture logicielle',
    href: '/docs/architecture-logicielle',
    level: 'Socle',
    Svg: require('@site/static/img/architecture-logicielle.svg').default,
    description: (
      <>
        Comprendre les enjeux de l&apos;architecture logicielle, ses niveaux de
        décision et les critères qui orientent les choix techniques.
      </>
    ),
  },
  {
    title: 'Architecture monolithique',
    href: '/docs/architecture-monolithique',
    level: 'Approfondir',
    Svg: require('@site/static/img/architecture-monolithique.svg').default,
    description: (
      <>
        Une introduction claire aux forces, aux limites et aux différents
        styles d&apos;organisation d&apos;une application monolithique.
      </>
    ),
  },
  {
    title: 'Architecture distribuée',
    href: '/docs/architecture-distribuee',
    level: 'Comparer',
    Svg: require('@site/static/img/architecture-distribuee.svg').default,
    description: (
      <>
        Un premier repère pour aborder les systèmes distribués, leurs
        contraintes et les compromis qu&apos;ils imposent.
      </>
    ),
  },
  {
    title: 'DDD',
    href: '/docs/ddd',
    level: 'Relier au métier',
    Svg: require('@site/static/img/ddd.svg').default,
    description: (
      <>
        Une introduction au Domain-Driven Design pour mieux relier le modèle
        métier, le langage de l&apos;équipe et les choix d&apos;architecture.
      </>
    ),
  },
];

function Feature({title, href, level, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureColumn)}>
      <Link className={styles.featureCard} to={href}>
        <div className={styles.featureVisual}>
          <span className={styles.featureBadge}>{level}</span>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureBody}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
          <span className={styles.featureCta}>Lire ce chapitre</span>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Parcours de lecture</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Choisissez votre point d&apos;entrée, ou suivez le fil proposé
          </Heading>
          <p className={styles.sectionDescription}>
            Chaque section introduit un ensemble de notions clés avec une
            progression pensée pour aider le lecteur à relier les concepts entre
            eux.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
