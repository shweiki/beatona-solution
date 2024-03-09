import React, { Component } from "react";
import {
  Container,
  Button,
  Text,
  Body,
  Item,
  Input,
  Label,
  Title,
  Content,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Form,
  Right
} from "native-base";

import styles from "./styles";

class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>


            <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default Login;
