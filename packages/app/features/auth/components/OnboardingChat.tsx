import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { styled, ScrollView, YStack, XStack, Paragraph, Button, Input, getTokenValue, Theme, Card, useTheme } from 'tamagui';
import { ArrowUpFromDot, Undo } from '@tamagui/lucide-icons';
import { useRouter } from 'solito/router';
import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets';

export const ChatScreen = () => {
  const safeAreaInsets = useSafeAreaInsets()
  const router = useRouter()
  const [messages, setMessages] = useState([
    { id: 1, text: 'How are you feeling today?', sender: 'system' },
  ]);

  const questionsAndReplies = [
    { id: 0, question: 'How are you feeling today?', replies: ["I'm feeling great!", "I'm feeling okay.", "I'm not feeling well."] },
    { id: 1, question: 'What brings you here today?', replies: ["I need someone to talk to.", "I'm looking for advice.", "I'm not sure, I just need help."] },
    { id: 2, question: 'What medication do you take?', replies: ["I take lithium.", "I'm on antidepressants.", "I don't take any medication."] },
    { id: 3, question: 'Have you seen a therapist before?', replies: ["Yes, regularly.", "I've seen one a few times.", "No, I haven't."] },
    { id: 4, question: 'Do you have a support system?', replies: ["Yes, my family.", "Yes, my friends.", "No, I don't have one."] },
    { id: 5, question: 'Have you experienced any major changes recently?', replies: ["Yes, a new job.", "Yes, a recent move.", "No major changes."] },
  ];

  const [currentQuestionID, setCurrentQuestionID] = useState(0)
  const [inputText, setInputText] = useState('');

  const handleContinue = () => {
    router.push('/sign-in')
  }  

  const handleSend = (msg?: string) => {
    const newText = msg?.trim() || inputText.trim();
    if (newText) {
      setMessages([...messages, { id: messages.length + 1, text: newText, sender: 'user' }]);
      setInputText('');

      const nextQuestionId = currentQuestionID + 1;
      setCurrentQuestionID(nextQuestionId)
      const nextQuestion = questionsAndReplies.find(q => q.id === nextQuestionId);
      if (nextQuestion) {
        setTimeout(() => {
          setMessages(prevMessages => [
            ...prevMessages,
            { id: prevMessages.length + 1, text: nextQuestion.question, sender: 'system' },
          ]);
        }, 800); // Adding a delay to simulate conversation flow
      }
    }
  };

  const handleUndo = () => {
    if (messages.length <= 1) {
      // Cannot undo if there is only one message
      return;
    }

    const lastMessage = messages[messages.length - 1];
    const secondLastMessage = messages[messages.length - 2];

    if (lastMessage.sender === 'user') {
      // Remove the last user message
      setMessages(prevMessages => prevMessages.slice(0, -1));
      // Only decrement the current question ID if the second last message is from the system
      if (secondLastMessage.sender === 'system') {
        setCurrentQuestionID(prevID => Math.max(prevID - 1, 0));
      }
    } else {
      // If the last message was from the system, remove it and the previous user message
      setMessages(prevMessages => prevMessages.slice(0, -2));
      // Adjust the current question ID accordingly
      setCurrentQuestionID(prevID => Math.max(prevID - 1, 0));
    }
  };

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={'padding' /*Platform.OS === 'ios' ? 'padding' : 'height'*/}
    keyboardVerticalOffset={120}
  >
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ fg: 1, jc: 'flex-end' }}
      showsVerticalScrollIndicator={false}
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} sender={message.sender}>
          <MessageText sender={message.sender}>{message.text}</MessageText>
        </MessageBubble>
      ))}
    </ScrollView>
    <YStack jc="center" gap="$2" my="$2">
      <XStack>
        <ReplyPrompts handlePress={handleSend} currentQuestionID={currentQuestionID} questionsAndReplies={questionsAndReplies} />
      </XStack>
      <XStack jc="center" ai='center'>
        {!questionsAndReplies.map(x => x.id).includes(currentQuestionID) && messages[messages.length - 1]?.sender === 'user' ? (
          <XStack f={1} jc="flex-end" gap="$2">
            <UndoButton handleUndo={handleUndo} /> 
            <ContinueButton handleContinue={handleContinue} />
          </XStack>
        ) : (
        <XStack gap='$2' py="$2">
          <Input
            f={1}
            bw={0}
            ml={5}
            size="$3.5"
            br={40}
            placeholderTextColor={"$color12"}
            col={"$color12"}
            // @ts-ignore
            bg={`${getTokenValue("$color.white2")}60`}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Message"
          />
          <UndoButton handleUndo={handleUndo} /> 
          <SendButton handleSend={() => handleSend()} />
        </XStack>
        )}
      </XStack>
    </YStack>
  </KeyboardAvoidingView>
  );
};

const ContinueButton = ({handleContinue}) => {
  return (<Button
    elevate
    themeInverse
    y={0}
    animation="lazy"
    enterStyle={{ scale: 0.1, y: 500 }}
    exitStyle={{ scale: 0.7, y: -10 }}
    mah="$4"
    pressStyle={{
      bg: '$color5',
    }}
    bg="$color1"
    aspectRatio={1}
    f={1/2}
    onPress={handleContinue}
    br="$10"
  >
    Continue
  </Button>
)}

const UndoButton = ({ handleUndo }) => {
  return (
    <Button
      elevate
      y={0}
      x={0}
      animation="lazy"
      enterStyle={{ x: 20 }}
      exitStyle={{ scale: 0.7, y: -10 }}
      onPress={handleUndo}
      mah="$4"
      maw="$4"
      pressStyle={{
        bg: '$color5',
      }}
      bg="$color1"
      aspectRatio={1}
      br="$10"
      icon={() => <Undo strokeWidth={2.25} size={"$1.5"} />}
    ></Button>
)}

const SendButton = ({ handleSend }: {
  handleSend: () => void,
}) => {
  return (
  <TouchableOpacity>
    <Button
      elevate
      mah="$4"
      maw="$4"
      pressStyle={{
        bg: '$color5',
      }}
      bg="$color1"
      aspectRatio={1}
      f={1}
      onPress={() => handleSend()}
      br="$10"
      icon={() => <ArrowUpFromDot strokeWidth={2.25} size={"$1.5"} />}
    ></Button>
  </TouchableOpacity>
  )
}

const MessageBubble = ({ sender, children }) => {
  const theme = useTheme()
  return (
    <Card
      elevate
      elevation={5}
      y={0}
      opacity={1}
      animation="lazy"
      enterStyle={{ scale: 0.7, y: -10 }}
      exitStyle={{ scale: 0.7, y: -10 }}
      miw="$5"
      ai='center'
      bg={sender === 'user' ? "$color4" : theme.gray12}
      als={sender === 'user' ? 'flex-end' : 'flex-start'}
      borderTopLeftRadius={16}
      borderTopRightRadius={16}
      bbrr={sender === 'user' ? 0: 16}
      bblr={sender === 'user' ? 16: 0}
      p={10}
      mx={5}
      my={10}
      maw="75%"
    >
      {children}
    </Card>
)};

const ReplyPrompts = ({currentQuestionID, questionsAndReplies, handlePress}:{
  currentQuestionID: number,
  questionsAndReplies: { 
    id: number;
    question: string; 
    replies: string[]; 
  }[],
  handlePress: (text: string) => void
}) => {
  const [prevQuestionID, setPrevQuestionID] = useState(0)
  const [replies, setReplies] = useState<string[]>([])

  useEffect(() => {
    const wasUndo = currentQuestionID < prevQuestionID;
    if (currentQuestionID !== prevQuestionID) {
      setReplies([])
    }
    setPrevQuestionID(currentQuestionID);
    const currentQuestion = questionsAndReplies[currentQuestionID];
    if (currentQuestion) {
      setTimeout(() => {
        setReplies(currentQuestion.replies)
      }, wasUndo ? 700 : 1500)
    }
  }, [currentQuestionID])

  return replies ? (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {replies.map((reply, index) => (
        <ReplyPromptBubble onPress={() => handlePress(reply)} key={index}>
          <Paragraph>{reply}</Paragraph>
        </ReplyPromptBubble>
      ))}
    </ScrollView>
  ) : null // <XStack h={80}></XStack>
};

const ReplyPromptBubble = ({ children, onPress }) => {
  return (
    <Card
      onPress={onPress}
      elevate
      elevation={5}
      pressStyle={{
        bg: "$color6"
      }}
      x={0}
      y={0}
      opacity={1}
      animation="lazy"
      enterStyle={{ scale: 0.7, y: -10, x: 100 }}
      exitStyle={{ scale: 0.7, y: -10, x: -100 }}
      br={8}
      miw="$5"
      ai='center'
      bg="$color4"
      als='center'
      p={10}
      ml={5}
      maw="75%"
    >
      {children}
    </Card>
)}

const MessageText = ({ sender, children }) => (
  <Paragraph maxFontSizeMultiplier={1.25} fow="200" col={sender === 'user' ? "$color12" : "$color4"}>
    {children}
  </Paragraph>
);
