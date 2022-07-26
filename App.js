import * as React from 'react';
import {Typography} from 'react-native-mint-ui';
import Canvas from './Canvas'

export default function TypographyShowcase() {
  return (
    <Canvas>
      <Typography.Headline v={1}>
        {"Headline 1"}
      </Typography.Headline>

      <Typography.Headline v={2}>
        {"Headline 2"}
      </Typography.Headline>

      <Typography.Headline v={3}>
        {"Headline 3"}
      </Typography.Headline>

      <Typography.Headline v={4}>
        {"Headline 4"}
      </Typography.Headline>

      <Typography.Subtitle v={1}>
        {"Subtitle 1"}
      </Typography.Subtitle>

      <Typography.Subtitle v={2}>
        {"Subtitle 2"}
      </Typography.Subtitle>

      <Typography.Subtitle v={3} style={{letterSpacing:0.8}}>
        {"Subtitle 3"}
      </Typography.Subtitle>

      <Typography.Body v={1}>
        {"Body 1"}
      </Typography.Body>

      <Typography.Body v={1} emphasis>
        {"Body 1 emphasis"}
      </Typography.Body>

      <Typography.Body v={2}>
        {"Body 2"}
      </Typography.Body>

      <Typography.Body v={2} emphasis>
        {"Body 2 emphasis"}
      </Typography.Body>
    </Canvas>
  )
}