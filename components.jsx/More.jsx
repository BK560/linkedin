import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";







export default function ExpandableText() {
   const[expanded,setExpanded]=useState(false);

   
   
   
  return (
   <View style={styles.container}>

         
    <Text style={styles.text}
    numberofLines={expanded?
       undefined:2}
      
       >

     
       
       
    </Text>


    <Pressable onPress={()=> setExpanded ( !expanded) }>
      <Text style={styles.more}>
         {expanded ? "...more": "Nobody warns you about this when you work in operations.You'll handle pressure,unexpected outages and constant learning..."}
      </Text>
    </Pressable>
    </View>
  );
  }

     const styles= StyleSheet.create({
      text:{
        fontSize:16,
          textAlign: "justify",
          marginTop:250
      },
      more:{
        color:'#0A66C2',
          textAlign:'justify',
          marginLeft:30,
          marginTop:100
          
       
       

      },
      container:{
             marginTop:-930,
        position: "relative",
       
        
        
      
      }
     });

     
 

    
    
 
