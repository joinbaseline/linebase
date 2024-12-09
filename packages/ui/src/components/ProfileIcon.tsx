import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { YStack, Avatar, ColorTokens } from 'tamagui';
import { SolitoImage } from 'solito/image';
import { User } from '@tamagui/lucide-icons';
import { validToken } from '@my/ui/src/validToken';
import { useUser } from '@my/app/utils/useUser';

const STROKE_WIDTH = 2;

type ProfileTabIconProps = {
  color: string;
  size: number;
  focused?: boolean;
};

export const ProfileTabIcon = ({ color, size, focused=false }: ProfileTabIconProps) => {
  const { avatarUrl } = useUser();
  return (
    <YStack bw={STROKE_WIDTH} boc={validToken(color)} br="$10">
      {avatarUrl !== "" ? (
        <Avatar circular p="$1" size={size}>
          <SolitoImage src={avatarUrl} alt="your avatar" width={size} height={size} />
        </Avatar>
      ) : (
        <User strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size} />
      )}
    </YStack>
  );
};
