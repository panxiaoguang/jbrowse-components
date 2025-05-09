import { stateModelFactory as baseModelFactory } from '@jbrowse/core/BaseFeatureWidget'
import { types } from 'mobx-state-tree'

import type PluginManager from '@jbrowse/core/PluginManager'
import type { Instance } from 'mobx-state-tree'

export function stateModelFactory(pluginManager: PluginManager) {
  return types.compose(
    baseModelFactory(pluginManager),
    types.model('AlignmentsFeatureWidget', {
      type: types.literal('AlignmentsFeatureWidget'),
    }),
  )
}

export type AlignmentFeatureWidgetStateModel = ReturnType<
  typeof stateModelFactory
>
export type AlignmentFeatureWidgetModel =
  Instance<AlignmentFeatureWidgetStateModel>
