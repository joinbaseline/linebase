import {
  AchievementCard,
  Button,
  FeedCard,
  H2,
  H4,
  OverviewCard,
  ScrollView,
  Separator,
  Text,
  Theme,
  XStack,
  YStack,
  useMedia,
  validToken,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { ArrowRight, LineChart, Pencil, User, Users } from '@tamagui/lucide-icons'
import { signedInAtom } from 'app/utils/atoms.native'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'
import { ProfileTabIcon } from '@my/app/features/tabs/ProfileIcon'
import Container from '@my/ui/src/components/Container'
import { TodoList } from '@my/app/features/todos/Todos'
import { todos } from '@my/app/features/todos/TodoData'

const defaultAuthors = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=67/32/32?ca=1',
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=30/32/32?ca=1',
  },
]

export function HomeScreen() {
  const [signedIn, setSignedIn] = useAtom(signedInAtom)
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
            <Separator />
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

const halfMinusSpace = validToken(
  Platform.select({
    web: 'calc(50% - 12px)',
    native: '53%',
  })
)

const quarterMinusSpace = validToken(
  Platform.select({
    web: 'calc(25% - 12px)',
    native: '21%',
  })
)
const TodoSection = () => {
  return (
    <YStack gap="$4">
      <H4 fow="700">
        Today
      </H4>
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

const AchievementsSection = () => {
  return (
    <YStack gap="$4">
      <XStack ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 fow="700">
          Getting Started
        </H4>
        <Theme>
          <Button size="$2" {...useLink({ href: '/' })} iconAfter={ArrowRight}>
            All Achievements
          </Button>
        </Theme>
      </XStack>

      <ScrollAdapt>
        <XStack px="$4" fw="wrap" f={1} gap="$3">
          <Theme name="yellow_alt1">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={LineChart}
              title="Build a habit"
              progress={{ current: 27, full: 30, label: 'days logged in a row' }}
              action={{
                text: 'Track your mood',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
          <Theme name="blue">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={User}
              title="Build your community"
              progress={{ current: 280, full: 500, label: 'members' }}
              action={{
                text: 'Boost your community',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
          <Theme name="orange">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={Pencil}
              title="Set up your profile"
              progress={{ current: 2, full: 3, label: 'steps completed' }}
              action={{
                text: 'Continue profile setup',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
          <Theme name="pink">
            <AchievementCard
              w={300}
              $gtMd={{
                w: halfMinusSpace,
              }}
              $gtLg={{
                w: quarterMinusSpace,
              }}
              icon={Users}
              title="Refer 5 friends"
              progress={{ current: 4, full: 5, label: 'friends referred' }}
              action={{
                text: 'Refer friends',
                props: useLink({ href: '#' }),
              }}
            />
          </Theme>
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

const OverviewSection = () => {
  return (
    <YStack gap="$4">
      <XStack ai="center" gap="$2" jc="space-between" mb="$4">
        <Text fos="$4" fow="600">Your scores this week</Text>
        {/*
          <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
            View All Stats
          </Button>
        */}
      </XStack>
      <ScrollAdapt>
        <XStack fw="wrap" ai="flex-start" jc="flex-start" px="$4" gap="$8" mb="$4">
          <OverviewCard title="Average Mood" value="7.3" badgeText="+0.5%" badgeState="success" />
          <OverviewCard title="Activity" value="11,283" badgeText="+40.5%" badgeState="success" />
          <OverviewCard
            title="Average Stress Score"
            value="8"
            badgeText="+10%"
            badgeState="failure"
          />
          <OverviewCard
            title="Support Circle"
            value="4 Supporters"
            badgeText="+25%"
            badgeState="success"
          />
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

const feedCardWidthMd = validToken(
  Platform.select({
    web: 'calc(33.33% - 12px)',
    native: '32%',
  })
)

const PostsSection = () => {
  return (
    <YStack>
      <XStack ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 fow="700">Latest Posts</H4>
        <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
          View All Posts
        </Button>
      </XStack>
      <ScrollAdapt>
        <XStack gap="$3" mb="$4" jc="flex-start" fw="wrap">
          <FeedCard
            withImages
            w={300}
            $gtMd={{ w: feedCardWidthMd }}
            title="Accepting Stability: Letting Go of Hypomania's False Promises"
            description="Hypomania can feel seductive and powerful, but it often leads to negative..."
            tag="Acceptance"
            authors={defaultAuthors}
          />

          <FeedCard
            withImages
            w={300}
            $gtMd={{ w: feedCardWidthMd }}
            title="Dispelling Misconceptions: Insights into Living with Bipolar Disorder"
            description="A common misconception is that individuals with bipolar disorder are inherently unpredictable..."
            tag="Stigma"
            authors={defaultAuthors}
          />

          <FeedCard
            withImages
            w={300}
            $gtMd={{ w: feedCardWidthMd }}
            title="Confronting the Beast of Bipolar Irritability: Navigating Life's Roller Coaster"
            description="Bipolar irritability is a mood state characterized by heightened frustration, anger, and feelings..."
            tag="Anger"
            authors={defaultAuthors}
          />

          <FeedCard
            withImages
            w={300}
            $gtMd={{ w: feedCardWidthMd }}
            title="Bipolar Disorder Diet: Foods That Help and Harm"
            description="While medication and therapy are critical components of managing bipolar disorder, emerging research..."
            tag="Nutrition"
            authors={defaultAuthors}
          />

          <FeedCard
            withImages
            w={300}
            $gtMd={{ w: feedCardWidthMd }}
            title="Establishing Boundaries: The Key to Healthy Relationships with Bipolar"
            description="Establishing boundaries is crucial for maintaining healthy relationships, especially when..."
            tag="Acceptance"
            authors={defaultAuthors}
          />
          <FeedCard
            withImages
            w={300}
            $gtMd={{ w: feedCardWidthMd }}
            title="Natural Remedies for Bipolar Disorder: What Works?"
            description="From omega-3 fatty acids to herbal supplements, various natural options have shown..."
            tag="Nutrition"
            authors={defaultAuthors}
          />
        </XStack>
      </ScrollAdapt>
    </YStack>
  )
}

function ScrollAdapt({ children }: { children: React.ReactNode }) {
  const { md } = useMedia()
  return md ? (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <>{children}</>
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
        <ProfileTabIcon color="$black5" size={50} focused={false} />
      </YStack>
    </XStack>
  )
}
