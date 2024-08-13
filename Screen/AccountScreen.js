import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function AccountScreen() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    password_confirm: '',
    name:'',
  });

  const [error, setError] = useState('');

  const handlePasswordChange = (password) => {
    setForm({ ...form, password });
    if (form.password_confirm && password !== form.password_confirm) {
      setError('비밀번호가 맞지 않습니다');
    } else {
      setError('');
    }
  };

  const handlePasswordConfirmChange = (password_confirm) => {
    setForm({ ...form, password_confirm });
    if (form.password && form.password !== password_confirm) {
      setError('비밀번호가 맞지 않습니다');
    } else {
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>회원가입</Text>
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
            <Text style={styles.inputLabel}>이름</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(name) => setForm({ ...form, name })}
              placeholder="김하나"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.name}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>비밀번호</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={handlePasswordChange}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={[
                styles.inputControl,
                error ? styles.inputControlError : null,
              ]}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>비밀번호 확인</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={handlePasswordConfirmChange}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={[
                styles.inputControl,
                error ? styles.inputControlError : null,
              ]}
              secureTextEntry={true}
              value={form.password_confirm}
            />
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>회원가입하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  /** Form */
  form: {
    marginTop: 15,
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
  inputControlError: {
    borderColor: 'red', // 오류 시 테두리 색상 변경
  },
  /** Error Text */
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 16,
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
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
