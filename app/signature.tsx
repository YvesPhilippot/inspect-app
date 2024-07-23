import React, { useRef } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import Signature, { SignatureViewRef } from 'react-native-signature-canvas';

const SignatureScreen = () => {
  const ref = useRef<SignatureViewRef>(null);
  const navigation = useNavigation<any>();
  const handleSignature = (signature: string) => {
    // signature is the base64 encoded string of the signature image
    Alert.alert('Signature Captured', signature);
  };

  const handleEmpty = () => {
    Alert.alert('No signature captured');
  };

  const handleClear = () => {
    ref.current?.clearSignature();
  };

  const handleConfirm = () => {
    ref.current?.readSignature();
  };

  return (
    <View style={styles.container}>
      <Signature
        ref={ref}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
      <View style={styles.buttonContainer}>
        <Button title="Clear" color="#0F508A" onPress={handleClear} />
        <Button title="Save" color="#0F508A" onPress={handleConfirm} />
        <Button
          onPress={() => navigation.navigate('home')}
          title="Go Back"
          color="#0F508A"
        />
      </View>
    </View>
  );
};

const style = `
  .m-signature-pad--footer {
    display: none;
    margin: 0px;
  }
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    margin: 10,
    height: 200

  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 3,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6
  },
});

export default SignatureScreen;