import { ConfigurationSchema } from '@jbrowse/core/configuration'

/**
 * #config HicAdapter
 * #category adapter
 */
function x() {} // eslint-disable-line @typescript-eslint/no-unused-vars

const HicAdapter = ConfigurationSchema(
  'HicAdapter',
  {
    /**
     * #slot
     */
    hicLocation: {
      type: 'fileLocation',
      defaultValue: {
        uri: '/path/to/my.hic',
        locationType: 'UriLocation',
      },
    },
    /**
     * #slot
     */
    resolutionMultiplier: {
      type: 'number',
      defaultValue: 1,
      description: 'Initial resolution multiplier',
    },
  },
  {
    explicitlyTyped: true,

    /**
     * #preProcessSnapshot
     *
     *
     * preprocessor to allow minimal config:
     * ```json
     * {
     *   "type": "HicAdapter",
     *   "uri": "file.hic",
     * }
     * ```
     */
    preProcessSnapshot: snap => {
      // populate from just snap.uri
      return snap.uri
        ? {
            ...snap,
            hicLocation: {
              uri: snap.uri,
              baseUri: snap.baseUri,
            },
          }
        : snap
    },
  },
)

export default HicAdapter
