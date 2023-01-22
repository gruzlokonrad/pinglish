import * as head from './constants'

export default function Head() {
  return (
    <>
      <title>{head.DOMAIN_NAME}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={head.META_DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
