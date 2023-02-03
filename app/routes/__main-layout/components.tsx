import { Text, ButtonLink, styled, Certificate } from '@libellum-ds/react'
import { json, type LoaderFunction } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'

export type ComponentLoaderData = {
  ok: boolean
}

const NavContainer = styled('nav', {
  display: 'flex',
  gap: '$spacing-sm',
  padding: '$spacing-sm 0'
})

export const load: LoaderFunction = async ({ request }): Promise<ComponentLoaderData> => {
  console.log('passando no load do component')
  return json({
    ok: true
  } as ComponentLoaderData)
}

export default function () {
  return (
    <>
      <Text type="display" as="div">
        <Certificate/> Components <Certificate />
      </Text>

      <NavContainer>
          <ButtonLink as={Link} to="button">
              Buttons
          </ButtonLink>

          <ButtonLink as={Link} to="button-link">
              Button Link
          </ButtonLink>

          <ButtonLink as={Link} to="switch">
              Switch
          </ButtonLink>
      </NavContainer>

      <Outlet />
    </>
  );
}
