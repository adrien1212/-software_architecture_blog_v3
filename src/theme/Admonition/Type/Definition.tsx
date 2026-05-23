import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import AdmonitionLayout from '@theme/Admonition/Layout';
import type {Props} from '@theme/Admonition/Type/Info';

function DefinitionIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.25 2.75 5.5v6.18c0 5.18 3.18 9.96 8.03 12.07L12 24l1.22-.25c4.85-2.11 8.03-6.89 8.03-12.07V5.5L12 2.25Zm0 1.59 7.75 2.72v5.12c0 4.52-2.73 8.69-6.92 10.58L12 22.4l-.83-.14c-4.19-1.89-6.92-6.06-6.92-10.58V6.56L12 3.84Zm-.75 4.41v5h1.5v-5h-1.5Zm0 6.5v1.5h1.5v-1.5h-1.5Z"
      />
    </svg>
  );
}

const infimaClassName = 'alert alert--definition';

const defaultProps = {
  icon: <DefinitionIcon />,
  title: 'Définition',
};

export default function AdmonitionTypeDefinition(props: Props): ReactNode {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
