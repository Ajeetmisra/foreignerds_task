import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  H1,
  Title,
} from 'native-base';

import propTypes from 'prop-types';
import {addItem} from '../src/action/list';
import {connect} from 'react-redux';

const Settings = ({navigation, addItem, listState}) => {
  // to hold name of the season and total no of the season
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      addItem(name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add Item</H1>

        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Input"
              value={name}
              style={{color: '#000000'}}
              onChangeText={text => setName(text)}
            />
          </Item>

          <Button rounded block onPress={handleSubmit}>
            <Text>Add</Text>
          </Button>
          {listState.map((item, index) => {
            return <H1 style={styles.heading}>{item}</H1>;
          })}
        </Form>
      </ScrollView>
    </Container>
  );
};

//TODO: Redux config
Settings.prototype = {
  addItem: propTypes.func.isRequired,
  listState: propTypes.array.isRequired,
}; // making sure the type of props
const mapStateToProps = state => ({
  listState: state.list,
});

const mapDispatchToProps = {
  addItem: data => addItem(data), // dispatching the props is necessary
};
//TODO: Redux Export
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
