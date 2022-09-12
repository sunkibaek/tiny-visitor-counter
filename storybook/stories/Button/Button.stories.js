import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import Button from "../../../src/components/Button";
import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Button
      onPress={action("clicked-text")}
      title={text("Button text", "Default Button")}
    />
  ))
  .add("with fullWidth (in row)", () => (
    <View style={{ flexDirection: "row" }}>
      <Button
        onPress={action("clicked-text")}
        title={text("title", "Button 1")}
        fullWidth={boolean("fullWidth", true)}
      />

      <Button
        onPress={action("clicked-text")}
        title={text("title", "Button 2")}
        fullWidth={boolean("fullWidth", true)}
      />
    </View>
  ));

storiesOf("Button.Link", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Button.Link
      onPress={action("clicked-text")}
      title={text("title", "Link Button")}
    />
  ));
