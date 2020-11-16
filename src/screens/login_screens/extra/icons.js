import React from 'react';
import { ImageStyle, StyleSheet } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const EyeIcon = ({action}) => {
    return (
    <Icon fill='#8F9BB3'style={styles.icon} name='eye-outline' onPress={action} />
    );
  }

export const EyeOffIcon = ({action}) => {
    return (
    <Icon fill='#8F9BB3'style={styles.icon} name='eye-off' onPress={action} />
    );
  }

export const PersonIcon = ({action}) => {
    return (
    <Icon fill='#8F9BB3'style={styles.icon} name='person' onPress={action} />
    );
  }

const styles = StyleSheet.create({
    icon : {
      width: 24,
      height: 24,
    }
});