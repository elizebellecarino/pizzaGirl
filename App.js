import React, { Component } from 'react';
import { View, Text, Picker, CheckBox, Button, StyleSheet, Alert } from 'react-native'

const pizza = {
  size: [
    {
      value: 1,
      inches: "12"
    },
    {
      value: 1.6,
      inches: "18"
    },
    {
      value: 1.9,
      inches: "24"
    }
  ],
  vegetable_toppings: [
    {
      toppings: "Tomatoes",
      value: 60
    },
    {
      toppings: "Red Onion",
      value: 23
    },
    {
      toppings: "Green Pepper",
      value: 40
    },
    {
      toppings: "Chilly",
      value: 35
    },
    {
      toppings: "Mushroom",
      value: 55
    },
    {
      toppings: "Grilled Zucchini",
      value: 35
    },
    {
      toppings: "Green Olives",
      value: 65
    } 
  ],
  non_vegetable_toppings: [
    {
      toppings: "Pepperoni",
      value: 88
    },
    {
      toppings: "Bacon",
      value: 120
    },
    {
      toppings: "Chicken",
      value: 120
    },
    {
      toppings: "Steak Strip",
      value: 120
    },
    {
      toppings: "Italian Ham",
      value: 50
    },
    {
      toppings: "Chorizo Sausage",
      value: 70
    },
  ],
  cheese: [
    {
      name: "cheese",
      value:70,
    },
    {
      name: "Feta Cheese",
      value:95,
    },
    {
      name: "Parmesan Cheese",
      value:95,
    },
    {
      name: "Parmesan Cheese",
      value: 78,
    },
    {
      name: "Extra Cheese",
      value: 50,
    },
    {
      name: "Four Cheese",
      value: 150,
    },
    {
      name: "Goat Cheese",
      value: 90,
    },
    {
      name: "Mozzarella",
      value: 80,
    },
    {
      name: "Dairy Free Cheese",
      value: "140"
    }
  ]
}

class App extends Component {
  state ={
    size:""
  };
  pizzaBuild = {
    ...pizza
  };

  placeOrderButton = () => {
    if (this.state.size.trim() === "") {
      return;
       
    }
 
  };
   
   render() {
      return (
        <View>
            <Text style={styles.welcome}>
             Pizza Builder
            </Text>
            <Text style={styles.size}>
             Size
            </Text>
            <Picker
     mode="dropdown"
 selectedValue={this.state.size}
 style={{ height: 50, width:100}}
 onValueChange={(itemValue) => this.setState({size: itemValue})}>

 <Picker.Item  label="12 Inch" value={this.pizzaBuild.size[0]} />
 <Picker.Item label="18 Inch" value={this.pizzaBuild.size[1]} />
 <Picker.Item label="22 Inch" value={this.pizzaBuild.size[2]} />
</Picker>
            
            
            <Text style={styles.toppings}>
                  Vegetable Toppings
            </Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedTomatoes}
                  onValueChange={() => this.setState({ checkedTomatoes: !this.state.checkedTomatoes })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Roma Tomatoes
            </Text>
           
            </View>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedOnion}
                  onValueChange={() => this.setState({ checkedOnion: !this.state.checkedOnion })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Red Onion 
              </Text>
           </View>

           <Text style={styles.toppings}>
                 Non Vegetable Toppings
            </Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedPepperoni}
                  onValueChange={() => this.setState({ checkedPepperoni: !this.state.checkedPepperoni })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Pepperoni 
            </Text>
           
            </View>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedBacon}
                  onValueChange={() => this.setState({ checkedBacon: !this.state.checkedBacon })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Bacon 
            </Text>
           </View>

           <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedChicken}
                  onValueChange={() => this.setState({ checkedChicken: !this.state.checkedChicken })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Chicken 
            </Text>
           </View>

            <Text style={styles.toppings}>
                 Cheese
            </Text>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedCheese}
                  onValueChange={() => this.setState({ checkedCheese: !this.state.checkedCheese })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Cheese
            </Text>
           
            </View>
            <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedfetaCheese}
                  onValueChange={() => this.setState({ checkedfetaCheese: !this.state.checkedfetaCheese })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Feta Cheese 
            </Text>
           </View>

             <View style={{ flexDirection: 'row' }}>
            <CheckBox
                  value={this.state.checkedParmesan}
                  onValueChange={() => this.setState({ checkedParmesan: !this.state.checkedParmesan })}
                />
            <Text style={{marginTop: 5, color: 'black'}}>
                    Parmesan Cheese
            </Text>
           
            </View>

            <Button
             title="Place Order"
             style={styles.orderButton}
             onPress={() => Alert.alert(this.selectedValue,"Your Order"
             )}
             
             />
            
            </View>
      )
   }
         
  }

  export default App

const styles = StyleSheet.create({
   welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black', 
    fontWeight: 'bold'
   },
 
 size: {
    fontSize: 15,
    textAlign: 'left',
    margin: 10,
    color: 'black',
    fontWeight: 'bold'
   },

   toppings: {
    fontSize: 15,
    textAlign: 'left',
    margin: 10,
    color: 'black',
    fontWeight: 'bold'
   }, 
   orderButton: {
    width: "20%"
    }
})