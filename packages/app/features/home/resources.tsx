import { Container } from "@my/ui/src/components/Container";
import { WaveBackground } from "@my/ui/src/components/WaveBackground";
import { H4, ScrollView, YStack } from "@my/ui"
import { signedInAtom } from "app/utils/atoms.native";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useRouter } from "solito/router";

export function ResourcesScreen() {
  const [signedIn, setSignedIn] = useAtom(signedInAtom)
  const router = useRouter();

  useEffect(() => {
    if (!signedIn) {
      setTimeout(() => router.replace('/start'), 200)
    }
  }, [signedIn])

  return (
    <Container>
      <WaveBackground />
      <ScrollView f={3} fb={0}>
        <YStack px="$3" gap="$3" pt="$5" pb="$8">
          <H4>Resources</H4>
        </YStack>
      </ScrollView>
    </Container>
  )
}