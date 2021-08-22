import React from 'react';
import {Image as RNImage} from 'react-native';
import {Image as BaseImage} from 'design-system-base';

export const Image = BaseImage(RNImage as unknown as React.JSXElementConstructor<typeof React.Component>);
