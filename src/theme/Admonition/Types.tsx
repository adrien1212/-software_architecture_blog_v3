import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

import type AdmonitionTypes from '@theme/Admonition/Types';
import AdmonitionTypeDefinition from './Type/Definition';
import AdmonitionTypeRessources from './Type/Ressources';

const AdmonitionTypesMap: typeof AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  definition: AdmonitionTypeDefinition,
  ressources: AdmonitionTypeRessources,
};

export default AdmonitionTypesMap;
