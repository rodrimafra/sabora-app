import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [backendUrl, setBackendUrl] = useState('http://localhost:3000');
  const [input, setInput] = useState('Hello from mobile');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/plan/echo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const json = await res.json();
      setResponse(JSON.stringify(json, null, 2));
    } catch (e: any) {
      setResponse(`Error: ${e?.message ?? 'unknown'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>MealPlan Mobile</Text>
        <Text style={styles.label}>Backend URL</Text>
        <TextInput
          style={styles.input}
          value={backendUrl}
          onChangeText={setBackendUrl}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.label}>Input</Text>
        <TextInput style={styles.input} value={input} onChangeText={setInput} />
        <Button title={loading ? 'Calling...' : 'Call API'} onPress={callApi} disabled={loading} />
        <Text style={styles.label}>Response</Text>
        <Text style={styles.monotext}>{response}</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  monotext: {
    fontFamily: 'Courier',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
  },
});
