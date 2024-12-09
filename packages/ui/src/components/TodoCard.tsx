import { Check, ExternalLink } from '@tamagui/lucide-icons'
import { useEffect, useId, useState } from 'react'

import { Card, Checkbox, CheckboxProps, Label, Paragraph, Theme, XStack, YStack } from 'tamagui'
import { Link } from 'solito/link'

export const TodoCard = ({
  id: _id,
  label,
  link,
  onCheckedChange,
  isFirst,
  isLast,
  ...props
}: {
  label: string,
  link?: string,
  isFirst?: boolean,
  isLast?: boolean,
  onCheckedChange?: (checked: boolean) => boolean,
} & CheckboxProps) => {
  const reactId = useId()
  const id = _id || reactId
  const [isChecked, setIsChecked] = useState(props.checked)

  const LabelText = () => {
    return (
      <XStack ai="center" gap="$2">
        <Paragraph textDecorationLine={isChecked ? 'line-through' : 'none'} size="$3">
          {label}
        </Paragraph>
        {link && <ExternalLink size={16} />}
      </XStack>
    )
  }

  const handleCheckedChange = (checked: boolean) => {
    if (onCheckedChange) {
      const shouldChange = onCheckedChange(checked);
      if (shouldChange) {
        setIsChecked(checked);
      }
    } else {
      setIsChecked(checked);
    }
  }

  useEffect(() => {
    if (props.checked !== isChecked) setIsChecked(props.checked);
  }, [props.checked])

  const borderRadiusStyle = {
    borderTopLeftRadius: isFirst ? 10 : 0,
    borderTopRightRadius: isFirst ? 10 : 0,
    borderBottomLeftRadius: isLast ? 10 : 0,
    borderBottomRightRadius: isLast ? 10 : 0,
  }

  return (
    <Theme name={isChecked ? 'green' : null} forceClassName>
      <Card opacity={0.99} style={borderRadiusStyle}>
        <Card.Header padded>
          <Label htmlFor={id}>
            <XStack gap="$4" ai="center">
              <Checkbox {...props} id={id} checked={isChecked} onCheckedChange={handleCheckedChange}>
                <Checkbox.Indicator>
                  <Check />
                </Checkbox.Indicator>
              </Checkbox>
              <YStack>
                {link ? (
                  <Link href={link || "/home"}>
                      <LabelText />
                  </Link>
                ) : <LabelText />}
                <Paragraph size="$1" theme="alt2">
                  {isChecked ? 'Completed' : 'To do'}
                </Paragraph>
              </YStack>
            </XStack>
          </Label>
        </Card.Header>
      </Card>
    </Theme>
  )
}
