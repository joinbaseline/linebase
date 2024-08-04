import {
  AchievementCard,
  Banner,
  Button,
  EventCard,
  FeedCard,
  H2,
  H4,
  OverviewCard,
  Paragraph,
  ScrollView,
  Separator,
  Theme,
  ThemeName,
  TodoCard,
  XStack,
  YStack,
  isWeb,
  useMedia,
  validToken,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { ArrowRight, LineChart, Pencil, User, Users } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme'
import { api } from 'app/utils/api'
import { signedInAtom } from 'app/utils/atoms.native'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'

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
  const { current: modeTheme } = useThemeSetting()
  const [signedIn, setSignedIn] = useAtom(signedInAtom)
  const router = useRouter();

  useEffect(() => {
    if (!signedIn) {
      router.replace('/sign-in')
    }
  }, [signedIn])

  return (
    <YStack theme={modeTheme as ThemeName} bg="$color1" f={1}>
      <WaveBackground flipX />
      <XStack maw={1480} als="center" f={1}>
        <ScrollView f={3} fb={0}>
          <YStack gap="$3" pt="$5" pb="$8">
            <Greetings />
            <YStack gap="$6">
              <AchievementsSection />
              <OverviewSection />
              <PostsSection />
            </YStack>
          </YStack>
        </ScrollView>

        <Separator vertical />

        {isWeb && <EventCards />}
      </XStack>
    </YStack>
  )
}

const EventCards = () => {
  return (
    <ScrollView f={1} fb={0} $md={{ dsp: 'none' }}>
      <YStack separator={<Separator />}>
        <YStack>
          <EventCard
            title="Event #1"
            description="Lorem ipsum dolor sit, amet."
            action={{
              text: 'Show Event',
              props: useLink({ href: '/' }),
            }}
            tags={[
              { text: 'New', theme: 'green_alt2' },
              { text: 'Hot', theme: 'orange_alt2' },
            ]}
          />
          <EventCard
            title="Event #2"
            description="Lorem ipsum dolor sit, amet."
            action={{
              text: 'Show Event',
              props: useLink({ href: '/' }),
            }}
            tags={[{ text: '1 Day Remaining', theme: 'blue_alt2' }]}
          />
          <EventCard
            title="Event #3"
            description="Lorem ipsum dolor sit, amet."
            action={{
              text: 'Show Event',
              props: useLink({ href: '/' }),
            }}
            tags={[{ text: 'Ongoing', theme: 'alt1' }]}
          />
          <EventCard
            title="Event #4"
            description="Lorem ipsum dolor sit, amet."
            action={{
              text: 'Show Event',
              props: useLink({ href: '/' }),
            }}
            tags={[{ text: 'Finished', theme: 'alt2' }]}
          />
        </YStack>
        <YStack p="$3">
          <Theme name="blue_alt1">
            <Banner {...useLink({ href: '/' })} cur="pointer">
              <H4>Upgrade Now!</H4>
              <Paragraph size="$2" mt="$1">
                Upgrade to access exclusive features and more!
              </Paragraph>
            </Banner>
          </Theme>
        </YStack>
        <YStack>
          <TodoCard label="Contribute to OSS" checked={false} />
          <TodoCard label="Learn about Tamagui's latest features" checked />
          <TodoCard label="Upgrade to the new Expo version" checked={false} />
          <TodoCard label="Do the dishes" checked={false} />
        </YStack>
      </YStack>
    </ScrollView>
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

const AchievementsSection = () => {
  return (
    <YStack gap="$4">
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 theme="alt1" fow="400">
          Getting Started
        </H4>
        <Theme name="alt2">
          <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
            All Achievements
          </Button>
        </Theme>
      </XStack>

      <ScrollAdapt>
        <XStack px="$4" fw="wrap" f={1} gap="$3">
          <Theme name="green_alt1">
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
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 fow="400">Overview</H4>
        <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
          View All Stats
        </Button>
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
    <YStack gap="$4">
      <XStack px="$4.5" ai="center" gap="$2" jc="space-between" mb="$4">
        <H4 fow="400">Latest Posts</H4>
        <Button size="$2" chromeless {...useLink({ href: '/' })} iconAfter={ArrowRight}>
          View All Posts
        </Button>
      </XStack>
      <ScrollAdapt>
        <XStack px="$4" gap="$4" mb="$4" jc="flex-start" fw="wrap">
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
  // const greetingQuery = api.greeting.greet.useQuery()
  return (
    <H2 px="$4">
      Welcome!{/*greetingQuery.data || '-'*/}
    </H2>
  )
}
