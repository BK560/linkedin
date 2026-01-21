import { Text, View,TextInput,Image } from "react-native";
import Textin from '../components.jsx/Textin.jsx';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';





export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >


      <TextInput
        placeholderTextColor={"#8A8D91"} placeholder="Search" style={{
          backgroundColor: "#FFFFFF", color: "black", height: 40,
          marginTop: 50, borderRadius: 10, paddingHorizontal: 5, borderColor: "#CCD0D5", borderWidth: 1, width: 250, marginLeft: 57
        }}>


      </TextInput>
      <Image style={{ width: 40, height: 40, borderRadius: 300, marginTop: -35, marginLeft: 10 }} />
        

      <Text style={{ marginTop: 30, marginLeft: 20, }}>Suggested</Text>
      <Entypo name="dots-three-vertical" size={24} color="black" style={{ marginLeft:320,marginTop:-30}}/>
      <Feather name="message-circle" size={24} color="black" style={{marginLeft:320,marginTop:-80}} />
      
     

      

 

       
        
 
    <Textin
  title="Yosola olabanji"

subtitle="Educator,Biologist,social..
6d"
subtitles="+ follow"

  body={`I applied for a job, got invited for an interview and
learned a major HR lesson instead.`}




/>

<Foundation name="like" size={24} color="blue" style={{marginLeft:20, marginTop:-35,borderRadius:30,borderColor:'blue' }} />
<Entypo name="heart" size={24} color="red"  style={{marginLeft:35, marginTop:-24,borderRadius:30,borderColor:'blue'}}/>
<Text style={{marginLeft:210,marginTop:-25}}>28 comment. 7 repost</Text>
<Foundation name="like" size={35} color='#666'  style={{marginLeft:30, marginTop:20}} />
<AntDesign name="comment" size={30} color='#666'  style={{alignSelf:'center', marginTop:-33}}/>
<Entypo name="share" size={25} color="black" style={{marginLeft:280, marginTop:-33}} />



       

    </View>

     

     




   );
}