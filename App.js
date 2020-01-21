import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { AppLoading } from 'expo';
import { Container, List, ListItem, View, Thumbnail, Header, Fab, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Button, Title, ScrollableTab } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import TabCamera from './TabCamera';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
 
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
 
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
 
    return (
      <Container>
        <Header style={{backgroundColor:"#075E54"}} androidStatusBarColor="#075E54">

          <Body>
           <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
 

        
        <Tabs>
        <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Icon name="camera" style={{color:'white'}}/></TabHeading>}>

          <TabCamera />
        </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Chat</Text></TabHeading>}>
            <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
             <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="text" />
          </Fab>
        </View>

          </Tab>  


          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Status</Text></TabHeading>}>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} />
              </Left>
              <Body>
                <Text>Status Saya</Text>
                <Text note>Klik untuk melakukan pembaruan status saya . .</Text>
              </Body>
            </ListItem>
          </List>
          <List>
          <ListItem itemDivider>
              <Text note>Pembaruan Terkini</Text>
            </ListItem> 
            </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} style={{borderRadius: 50, borderColor: '#075E54' , borderWidth:2}} />
              </Left>
              <Body>
                <Text>Status Saya</Text>
                <Text note>Klik untuk melakukan pembaruan status saya . .</Text>
              </Body>
            </ListItem>
          </List>
           <List>
          <ListItem itemDivider>
              <Text note>Pembaruan yang telah dilihat</Text>
            </ListItem> 
            </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }}  style={{borderRadius: 50, borderColor: 'grey' , borderWidth:2}}/>
              </Left>
              <Body>
                <Text>Status Saya</Text>
                <Text note>Klik untuk melakukan pembaruan status saya . .</Text>
              </Body>
            </ListItem>
          </List>
          <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="camera" />
            <Button disabled style={{ backgroundColor: 'grey' }}>
              <Icon name="create" />
            </Button>
          </Fab>
        </View>
          </Tab>





          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Calls</Text></TabHeading>}>
             <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} style={{borderRadius: 50}} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Sekarang 20.00pm</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='call' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
           <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://upload.wikimedia.org/wikipedia/id/thumb/6/65/Naruto-Opening01_222.jpg/280px-Naruto-Opening01_222.jpg' }} style={{borderRadius: 50}}/>
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Kemarin 15.20pm</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='videocam' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
           <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="call"/>
          </Fab>
        </View>
          </Tab>
        </Tabs>

 
      </Container>
    );
  }
}