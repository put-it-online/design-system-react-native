import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as BaseText} from 'design-system-base';

export const Text = BaseText(RNText as unknown as React.JSXElementConstructor<typeof React.Component>);
