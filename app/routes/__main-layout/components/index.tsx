import { type LoaderFunction } from 'react-router'

import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = () => {
  return redirect('button')
}
