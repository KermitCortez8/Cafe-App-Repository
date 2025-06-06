// App.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};

const LogoutButton = () => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />;
};

const Profile = () => {
  const {user, error} = useAuth0();

  return (
    <>
      {user && <Text>Logged in as {user.name}</Text>}
      {!user && <Text>Not logged in</Text>}
      {error && <Text>{error.message}</Text>}
    </>
  );
};

const AppContent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LoginButton />
      <View style={{height: 10}} />
      <LogoutButton />
      <View style={{marginTop: 20}}>
        <Profile />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Auth0Provider
      domain="dev-2thedwpxs6ar5khj.us.auth0.com"
      clientId="NaoAk28shbQaq04zqOKuAmUi1sperwU7">
      <AppContent />
    </Auth0Provider>
  );
}
