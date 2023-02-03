import { ButtonLink, styled } from '@libellum-ds/react'
import { Link, Outlet } from '@remix-run/react'

const NavContainer = styled('nav', {
  display: 'flex',
  gap: '$spacing-sm',
  padding: '$spacing-sm 0',
})

const Home = () => {
  return (
    <>
      <NavContainer>
        <ButtonLink as={Link} to="/home">
          Home
        </ButtonLink>

        <ButtonLink as={Link} to="/components">
          Components
        </ButtonLink>
      </NavContainer>

      <Outlet />
    </>
  )
}

export default Home
