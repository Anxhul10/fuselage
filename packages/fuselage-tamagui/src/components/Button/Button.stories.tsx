import type { Meta, StoryObj } from "@storybook/react";
import type { StoryFn} from '@storybook/react';
import {ZButton,ButtonText,ButtonIcon} from './CustomButton';
import {Spinner,XStack,YStack,Anchor, ButtonFrame,Button as TamaguiButton} from 'tamagui';
import React, { useState } from 'react';
import { ArrowLeft } from '@tamagui/lucide-icons';
import {Icon as CIcon} from './Icon';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ZButton> = {
  title: "Button",
  component: ZButton,
  tags: ["autodocs"],
  // argTypes: {ArrowLeft
  //   backgroundColor: {
  //     control: "color",
  //   },
  // },
};


export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Default: Story = {
//   render: (args) => <LoadingButton {...args} />,
//   args: {
//     label: "Button",
//     backgroundColor: "blue"
//   },
// };
export const Default: StoryFn<typeof ZButton> = () => {
  return <ZButton borderRadius="$1" label="Button" outlined ><ButtonText outline>Button</ButtonText></ZButton>
};
export const Loading: StoryFn<typeof ZButton> = () => {
  return (<ZButton borderRadius="$1" label="Loading Button" disabled='true' >
  <Spinner color="#6C727A"></Spinner>
  <ButtonText disabled>Button</ButtonText>
  </ZButton>);
};

// export const Disabled: Story = {
//   render: (args) => <DisabledButton {...args} />,
//   args: {
//     label: "Disabled Button",
//   },
// };


export const LoadingInteraction: StoryFn<typeof ZButton> = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

  return (
    <ZButton borderRadius="$1"
      label="Button"
      outlined
      onPress={handlePress}
      disabled={loading}
    >
      {loading ? (
        <>
          
          <XStack space='$2'> 
            <Spinner color="#6C727A" /> 
            <ButtonText disabled>Loading...</ButtonText>
          </XStack>
          
        </>
      ) : (
        <ButtonText outlined>Button</ButtonText>
      )}
    </ZButton>
  );
};

export const Variants: StoryFn<typeof Variants> = () => {
  return (
    <YStack space="$4">
      <XStack space="$5">
        <ZButton Primary borderRadius="$1" ><ButtonText>Primary</ButtonText></ZButton>
        <ZButton Secondary borderRadius="$1"><ButtonText>Secondary</ButtonText></ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton Danger borderRadius="$1"><ButtonText>Danger</ButtonText></ZButton>
        <ZButton SecondaryDanger borderRadius="$1"><ButtonText color='#FFC1C9'>Secondary Danger</ButtonText></ZButton>
      </XStack>

      <XStack space="$4">
        <ZButton Warning borderRadius="$1"><ButtonText>Warning</ButtonText></ZButton>
        <ZButton SecondaryWarning borderRadius="$1"><ButtonText color='yellow'>Secondary Warning</ButtonText></ZButton>
      </XStack>
      
      <XStack space="$5">
        <ZButton Success borderRadius="$1"><ButtonText>Success</ButtonText></ZButton>
        <ZButton SecondarySuccess borderRadius="$1">
          <ButtonText color='#1D7256'>Secondary Success</ButtonText>
        </ZButton>
      </XStack>
      
    </YStack>
  )
};


export const Sizes: StoryFn<typeof ZButton> = () => {
  return <>
    <XStack space='$3' alignItems='center'>
      <ZButton borderRadius="$1" size='sm'><ButtonText>Small</ButtonText></ZButton>
      <ZButton borderRadius="$1" size='md'><ButtonText>Medium</ButtonText></ZButton>
      <ZButton borderRadius="$1"><ButtonText>Default</ButtonText></ZButton>
    </XStack>
  </>
};

export const AsLink: StoryFn<typeof ZButton> = () => {
  return (
      <Anchor href="https://open.rocket.chat" target="_blank" textDecorationLine="none">
        <ZButton borderRadius='$1'>
          <ButtonText>Button</ButtonText>
        </ZButton>
      </Anchor>
)
};

export const States: StoryFn<typeof ZButton> = () => {
  return (
    <YStack space="$4">
      <XStack space="$5">
        <ZButton borderRadius="$1" onPress={() => {}} className="hover">
          <ButtonText>Hover</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" onPress={() => {}} className="active">
          <ButtonText>Active</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" onPress={() => {}} className="focus">
          <ButtonText>Focus</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" onPress={() => {}} className="focus-visible">
          <ButtonText>Focus Visible</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" disabled>
          <ButtonText disabled>Disabled</ButtonText>
        </ZButton>
      </XStack>

      {/* Button Variations (Primary, Secondary, etc.) */}
      <XStack space="$5">
        <ZButton borderRadius="$1" primary>
          <ButtonText>Primary</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" secondary>
          <ButtonText>Secondary</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" danger>
          <ButtonText>Danger</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" secondaryDanger>
          <ButtonText color="#FFC1C9">Secondary Danger</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" warning>
          <ButtonText>Warning</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" secondaryWarning>
          <ButtonText color="yellow">Secondary Warning</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" success>
          <ButtonText>Success</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" secondarySuccess>
          <ButtonText color="#1D7256">Secondary Success</ButtonText>
        </ZButton>
      </XStack>

      {/* Small Button Variations */}
      <XStack space="$5">
        <ZButton borderRadius="$1" size="sm" onPress={() => {}} className="hover">
          <ButtonText>Hover</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" size="sm" onPress={() => {}} className="active">
          <ButtonText>Active</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" size="sm" onPress={() => {}} className="focus">
          <ButtonText>Focus</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" size="sm" onPress={() => {}} className="focus-visible">
          <ButtonText>Focus Visible</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" size="sm" disabled>
          <ButtonText disabled>Disabled</ButtonText>
        </ZButton>
      </XStack>

      <XStack space="$5">
        <ZButton borderRadius="$1" size="sm" primary>
          <ButtonText>Primary</ButtonText>
        </ZButton>
        <ZButton borderRadius="$1" size="sm" secondary>
          <ButtonText>Secondary</ButtonText>
        </ZButton>
      </XStack>
    </YStack>
  );
};
export const AsIconButton: StoryFn<typeof ZButton> = () => {
  return (
    <CIcon severity='ArrowLeft'> 
    </CIcon>
)
};