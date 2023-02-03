import { useEffect, useRef, useState } from 'react'
import {
  // type ActionFunction,
  Form,
  // useActionData,
} from 'react-router-dom'

import { Button, Flag, Switch, Text } from '@libellum-ds/react'

import { Group } from '../../../components/Group'
// import { type ComponentLoaderData } from '../components'

// type ActionData = {
//   toggleValue: string | null
// }

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData()
//   const toggleValue = formData.get('uncontrolledSwitch')
//   console.log('toggleValue', toggleValue)
//   return { toggleValue }
// }

const ComponentSwitch = () => {
  console.log('renderizando => 1')
  // const actionData = useActionData() as ActionData
  console.log('renderizando => 2')
  //   const componentLoaderData = useRouteLoaderData('components') as ComponentLoaderData
  //   console.log('componentLoaderData.ok at ComponentSwitch',componentLoaderData)

  const unControlledSwitchRef = useRef<HTMLButtonElement | null>(null)
  const unControlledSwitcMessagehRef = useRef<HTMLParagraphElement | null>(null)
  const [swtichValue, setSwitchValue] = useState(false)
  console.log('renderizando => 3')

  const handleControlledSwitchChange = () => {
    setSwitchValue((state) => {
      const newValue = !state

      // Click on uncontrolled switch when state changes
      if (unControlledSwitchRef.current) {
        unControlledSwitchRef.current.click()
      }

      return newValue
    })
  }

  const handleUnControlledSwitchClick = () => {
    const wasChecked = unControlledSwitchRef.current?.ariaChecked === 'true'
    setSwitchValue(!wasChecked)
  }

  useEffect(() => {
    console.log('renderizando => useEffect')

    // if (unControlledSwitcMessagehRef.current) {
    //   const messageValue = actionData?.toggleValue ? 'on' : 'off'
    //   const message = `The submitted value is ${messageValue}`
    //   unControlledSwitcMessagehRef.current.innerText = message
    // }
  }, [])
  // }, [actionData?.toggleValue])

  console.log('renderizando => 4')

  return (
    <>
      <Text type="display" as="div">
        Switch
      </Text>

      <Group>
        <Text type="title" css={{ marginBottom: '$spacing-nano' }}>
          Controlled
        </Text>
        <Switch
          checked={swtichValue}
          onCheckedChange={handleControlledSwitchChange}
        />
        <Text
          type="caption"
          css={{
            marginTop: '$spacing-nano',
            marginBottom: '$spacing-nano',
          }}
        >{`The state value is ${swtichValue ? 'on' : 'off'}`}</Text>
      </Group>

      <Group>
        <Text type="title" css={{ marginBottom: '$spacing-nano' }}>
          UnControlled
        </Text>

        <Form method="post">
          <Switch
            name="uncontrolledSwitch"
            ref={unControlledSwitchRef}
            defaultChecked={swtichValue}
            onClick={handleUnControlledSwitchClick}
          />

          <Text
            type="caption"
            ref={unControlledSwitcMessagehRef}
            css={{
              marginTop: '$spacing-nano',
              marginBottom: '$spacing-nano',
            }}
          >{`The submitted value is`}</Text>

          <Button>
            <Flag />
            Enviar
          </Button>
        </Form>
      </Group>
    </>
  )
}

export default ComponentSwitch
