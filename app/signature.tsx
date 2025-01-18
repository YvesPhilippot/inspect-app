import React, { useRef } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import Signature, { SignatureViewRef } from 'react-native-signature-canvas';
import ButtonWrapper from '@/components/molecules/Button';

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
        <ButtonWrapper title="Clear" onPress={handleClear} />
        <ButtonWrapper title="Save" onPress={handleConfirm} />
        <ButtonWrapper title="Go Back" onPress={() => navigation.navigate('home')} />
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
    height: 400

  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 3
  }
});

export default SignatureScreen;