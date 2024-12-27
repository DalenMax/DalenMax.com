import { css } from '@/styled-system/css'
import { HStack } from '@/styled-system/jsx'
import { circle } from '@/styled-system/patterns'
import { ButtonIcon } from '@/theme/icons'
import Link from 'next/link'

export const CourseMiniBanner = () => {
  return (
    <Link href="https://www.youtube.com/@DalenMax">
      <HStack
        bg={{ base: 'gray.100', _dark: 'gray.800' }}
        px="2"
        rounded="sm"
        css={{ '& svg': { width: '3' } }}
      >
        <span
          className={circle({ size: '1.5', bg: '#32aef2', flexShrink: '0' })}
        />
        <p>
          <span className={css({ fontWeight: 'medium' })}>
            Want to skip the docs?{' '}
          </span>
          <span className={css({ hideBelow: 'xl' })}>
            Watch the official Panda course
          </span>
        </p>
        <ButtonIcon icon="RightArrowIcon" />
      </HStack>
    </Link>
  )
}

export const CourseBanner = () => {
  return (
    <Link
      href="https://www.youtube.com/@DalenMax"
      target="_blank"
      rel="noopener noreferrer"
    >
      <HStack bg="yellow.300" pos="relative">
        <HStack
          justify="center"
          px="2"
          py="2"
          rounded="sm"
          w="full"
          pos="relative"
        >
          <p className={css({ color: 'black' })}>
            <span className={css({ fontWeight: 'medium' })}>
              🚀 TON Blockchain Full Course – Learn it all, step by step!
            </span>
            <span className={css({ hideBelow: 'sm' })}>
            </span>
          </p>
        </HStack>
      </HStack>
    </Link>
  )
}
