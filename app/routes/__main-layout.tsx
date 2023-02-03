import { Search, ButtonLink } from '@libellum-ds/react'
import { Link, Outlet } from '@remix-run/react'
import { Group } from '~/components/Group';

const Home = () => {
  return (
    <>
    <Group>
      <ButtonLink as={Link} to="/home">
        <Search />
        Home (Router Link)
        <Search />
      </ButtonLink>

      <ButtonLink as={Link} to="/components">
        <Search />
        Components (Router Link)
        <Search />
      </ButtonLink>
    </Group>

    <Outlet />
  </>
  )
}

export default Home