import { Text, View,TextInput,Image,Dimension,ScrollView} from "react-native";
import Textin from '../components.jsx/Textin.jsx';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import{SafeAreaView} from 'react-native-safe-area-context'
import More from '../components.jsx/More.jsx';





export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        
      }}
    >


     <View style={{marginTop:35}}>

      <TextInput
        placeholderTextColor={"#8A8D91"} placeholder="Search" style={{
          backgroundColor: "#FFFFFF", color: "black", height: 40,
           borderRadius: 10, paddingHorizontal: 5, borderColor: "#CCD0D5", borderWidth: 1, width: 280, marginLeft: 77
        }}>


      </TextInput>
      <Image style={{ width: 50, height: 50, borderRadius: 300,marginTop:-38, marginLeft: 18 }} source={require('../assets/images/ola.png')} />
        

      
      <Feather name="message-circle" size={24} color="black" style={{marginLeft:370,marginTop:-45}} />
      
      </View>


            <ScrollView showsViewVerticalScrollIndicator={false}>

              <View style={{marginTop:40}}>

        <Text style={{marginLeft:15}}>Suggested</Text>
      <Entypo name="dots-three-vertical" size={17} color='#666' style={{ marginLeft:370,marginTop:-15}}/>  
      </View>    
        
    <Textin
  title="Yosola olabanji"

subtitle="Educator,Biologist,social..
6d"
subtitles="+ follow"

  body={`I applied for a job, got invited for an interview and
learned a major HR lesson instead.` } 
  image ={require('../assets/images/main.png')}
  


  




/>

<Foundation name="like" size={24} color="blue" style={{marginLeft:20, marginTop:-35,borderRadius:30,borderColor:'blue' }} />
<Entypo name="heart" size={24} color="red"  style={{marginLeft:35, marginTop:-24,borderRadius:30,borderColor:'blue'}}/>
<Text style={{marginLeft:200,marginTop:-25}}>28 comment. 7 repost</Text>
 <Foundation name="like" size={35} color='#666'style={{marginLeft:30, marginTop:20}} />
<AntDesign name="comment" size={30} color='#666'  style={{marginLeft:'125', marginTop:-33}}/>
<Entypo name="share" size={25} color= '#666'  style={{marginLeft:270, marginTop:-30}} />


  <Text style={{marginLeft:60, marginTop:-20}}>Like</Text>

<Text  style={{marginLeft:160, marginTop:-20}}>Comment</Text>
<Text style={{marginLeft:300, marginTop:-20}}>Share</Text>
<Image style={{ flex:1,marginTop:-380,width:450,height:300}}source={require('../assets/images/bop.png')}/>

<More/>













      </ScrollView>
      
     

      

 

       
        

       

    </SafeAreaView>

     

     




   );
}