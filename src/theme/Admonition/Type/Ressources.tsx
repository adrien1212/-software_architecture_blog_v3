import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import AdmonitionLayout from '@theme/Admonition/Layout';
import type {Props} from '@theme/Admonition/Type/Info';

function RessourcesIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 3.75A2.75 2.75 0 0 0 3.25 6.5v11A2.75 2.75 0 0 0 6 20.25h12a2.75 2.75 0 0 0 2.75-2.75v-11A2.75 2.75 0 0 0 18 3.75H6Zm0 1.5h12c.69 0 1.25.56 1.25 1.25v11c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25v-11c0-.69.56-1.25 1.25-1.25Zm2 2a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5H8Zm0 3.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm0 3.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Z"
      />
    </svg>
  );
}

const infimaClassName = 'alert alert--ressources';

const defaultProps = {
  icon: <RessourcesIcon />,
  title: 'Ressources',
};

export default function AdmonitionTypeRessources(props: Props): ReactNode {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
