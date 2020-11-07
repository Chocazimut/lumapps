import {compose, filter, find, map, pick} from 'ramda'
import {matchPath, Redirect, Route, Switch, useLocation} from 'react-router-dom'
import React, {lazy, Suspense, useEffect, useMemo} from 'react'

import Layout from 'core/Layout'
import Loader from 'core/Ui/Loader'
import routes, {getPagePath} from 'config/routes'

const Router = () => {
  const {pathname} = useLocation()

  const {
    pageName = false,
    isHeaderHidden = false,
    isLightHeader = false,
  } = useMemo(
    () =>
      find(
        route => matchPath(pathname, pick(['path', 'exact'], route)),
        routes,
      ) || {},
    [pathname],
  )

  useEffect(() => {
    document.title = `Lumapps Developper Test${
      pageName ? ` | ${pageName}` : ''
    }`
  }, [pageName])

  const routeMap = () =>
    map(({id, feature, ...routeProps}) => {
      const Component = lazy(() => import(`features/${feature}`))

      return <Route {...routeProps} component={Component} key={`page-${id}`} />
    })

  return (
    <Layout isHeaderHidden={isHeaderHidden} isLightHeader={isLightHeader}>
      <Suspense fallback={<Loader fullPage />}>
        <Switch>
          {compose(
            routeMap(),
            filter(route => route.isPublic),
          )(routes)}

          {/* keep this line at the bottom to keep the 404 mechanism working */}
          <Route
            render={() => <Redirect to={getPagePath('notFound')} />}
            key="redirect-notFound"
          />
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default Router
