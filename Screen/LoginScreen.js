import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput,} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.title}>
            당신의 더 나은 소비습관, <Text style={{ color: '#008485',fontWeight:'800' }}>PIE</Text>
          </Text>
          <Text style={styles.subtitle}>
            이메일과 비밀번호를 입력해주세요
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>이메일 주소</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="hana@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>비밀번호</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CardReport')}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>로그인하기</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formLink}>비밀번호를 잊으셨나요?</Text>
        </View>
      </KeyboardAwareScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('Account')}
      >
        <Text style={styles.formFooter}>
          계정이 없으신가요?{' '}
          <Text style={{ textDecorationLine: 'underline' }} 
          >계정 생성하기</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    marginTop:'20%',
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginTop:15,
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#008485',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
    marginBottom:'5%'
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 13,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#008485',
    borderColor: '#008485',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
