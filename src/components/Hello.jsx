import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool ,shape} from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;

  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!': ''}`}
      </Text>
    </View>
  );
};

//propの中身がどんなものか、Hello.jsxのファイルを見ただけでわかるようにする。
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

//propsの初期値を決める。
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
    text: {
      color: '#ffffff',
      backgroundColor: 'blue',
      fontSize: 40,
      fontWeight: 'bold',
      padding: 16,
  },
});


export default Hello;