import {
  Button,
  H2,
  H4,
  ScrollView,
  Separator,
  Text,
  Theme,
  XStack,
  YStack,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { ArrowRight } from '@tamagui/lucide-icons'
import { selectedDayAtom, signedInAtom } from 'app/utils/atoms.native'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'
import { ProfileTabIcon } from '@my/app/components/ProfileIcon'

import { Container } from '@my/ui/src/components/Container'
import { TodoList } from '@my/app/features/todos/Todos'
import { todos } from '@my/app/features/todos/TodoData'
import { STROKE_WIDTH } from '../../utils/svg/constants'
import { MoodDayTabs } from '../logging/MoodDayTabs'
import moment from 'moment'
import { CardBasedHealthCheckin } from './checkin'


export function HomeScreen() {
  const [signedIn, setSignedIn] = useAtom(signedInAtom)
  const [selectedDay, _] = useAtom(selectedDayAtom)
  const router = useRouter();

  useEffect(() => {
    if (!signedIn) {
      setTimeout(() => router.replace('/start'), 200)
    }
  }, [signedIn])

  return (
    <Container mt={-16}>
      <WaveBackground flipX />
      <XStack maw={1480} als="center" f={1}>
        <ScrollView f={3} fb={0}>
          <YStack px="$3" gap="$3" pt="$5" pb="$8">
            <Greetings />
            <MoodDayTabs logscreen={false} />
            <Separator />
            <H4 fow="700">
              {moment(selectedDay).isSame(new Date(), 'day') ? 'Today' : moment(selectedDay).format('dddd, MMMM D')}
            </H4>
            <CardBasedHealthCheckin />
            <TodoSection />
             {/*
            <YStack gap="$4">
              <OverviewSection />
              <AchievementsSection />
              <PostsSection />
            </YStack>
            */}
          </YStack>
        </ScrollView>
        <Separator vertical />
      </XStack>
    </Container>
  )
}

const TodoSection = () => {
  return (
    <YStack gap="$4">
      <YStack>
        <TodoList todos={todos} />
      </YStack>
      <XStack ai="center" gap="$2" jc="space-between" mb="$4">
        <Theme>
          <Button size="$2" {...useLink({ href: '/' })} iconAfter={ArrowRight}>
            Adjust Daily Goals
          </Button>
        </Theme>
      </XStack>
    </YStack>
  )
}

const Greetings = () => {
  const firstName = "John";
  return (
    <XStack>
      <YStack f={2/3}>
        <H2>
          {`Hello, ${firstName}`}
        </H2>
        <Text fos="$2">
          Nice to have you back.
        </Text>
      </YStack>
      <YStack f={1/3} ai='center' jc='center'>
        <ProfileTabIcon strokeWidth={STROKE_WIDTH + 0.25} color="$black5" size={50} focused={false} />
      </YStack>
    </XStack>
  )
}
