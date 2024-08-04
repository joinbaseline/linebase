import { Paragraph, ThemeName, YStack } from '@my/ui'
import { useThemeSetting } from 'app/provider/theme'

export const AboutScreen = () => {
  const { current } = useThemeSetting()
  return (
    <YStack theme={current as ThemeName} bg={"$color1"} f={1} gap="$4" p="$4">
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem neque maxime
        soluta nostrum unde eligendi, culpa qui exercitationem modi quasi debitis voluptatibus,
        deleniti porro! Nihil magni dicta neque aliquid.
      </Paragraph>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem neque maxime
        soluta nostrum unde eligendi, culpa qui exercitationem modi quasi debitis voluptatibus,
        deleniti porro! Nihil magni dicta neque aliquid.
      </Paragraph>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem neque maxime
        soluta nostrum unde eligendi, culpa qui exercitationem modi quasi debitis voluptatibus,
        deleniti porro! Nihil magni dicta neque aliquid.
      </Paragraph>
    </YStack>
  )
}
