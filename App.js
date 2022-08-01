import React, { useState } from "react";
import { View,Text, Button, FlatList, ScrollView } from "react-native";
import Dots from 'react-native-dots-pagination';

const DATA = [
  {
    id: 1,
    body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    id: 2,
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    body:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id:4,
    body:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  }
];


const App =()=> {

  let indexvalue = DATA.length;
  const [count , setcount] = useState(0);

  const handleScroll = (event) => {
    let yOffset = event.nativeEvent.contentOffset.x;
    let contentHeight = 350;
    setcount(Math.floor(yOffset / contentHeight));
  }
  const renderUI=(item,index)=>{    
    return(<View style={{flex:1}}>
      <View style={{height:200,width:350,borderColor:'grey',borderWidth:2,margin:3,borderRadius:6}}>
        <Text style={{textAlign:'center',margin:3}}>{item.body}</Text>
        <Text>{index}</Text>
        {/* {setcount(index)} */}                      
      </View>
  </View>);
  };

  return(
    <View >
      <Text style={{textAlign:'center'}}>Hello Sanjay</Text>
      <Text style={{textAlign:'center',marginBottom:20}}>{count}</Text>


      <Dots length={indexvalue} active={count} activeColor={"#E33439"}></Dots>

      <View style={{justifyContent:'center'}}>
        <ScrollView>
          <View>
            <FlatList 
              data={DATA}
              keyExtractor={(item) => item.id}
              horizontal={true}
              pagingEnabled={true}
              onScroll={handleScroll}
              // onMomentumScrollBegin={()=>{
              //   if(count != indexvalue-1){
              //     setcount(count+1)
              //   }
              // }}
              
              // onScrollBeginDrag={()=>{
              //   if(count != indexvalue-1){
              //     setcount(count+1)
              //   }
              // }}
             

              
              renderItem={({item,index}) => renderUI(item,index)}
            />



            <View style={{marginTop:50}}>
              <Button onPress={()=>{
                if(count != indexvalue-1){
                  setcount(count+1)
                }
                }}
                title="increse here"
              />
            </View>

            <View style={{marginTop:50}}>
              <Button onPress={()=>{
                if(count != 0){
                  setcount(count-1)
                }
                }}
                title="decrease here"
              />
            </View>
          </View>
        </ScrollView>

      </View>

    </View>
  )
}

export default App;