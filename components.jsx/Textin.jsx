import { Assets } from '@react-navigation/elements';
import {View,Text,StyleSheet,Image,Pressable} from 'react-native';




 const Textin =({title,body,image,subtitle,subtitles,Touch})=>(
     <View style={style.container}>
         <Text style={style.heading}>{title}</Text>
         <Text style={style.sub}>{subtitle}</Text>
         <Text style={style.subs}>{subtitles}</Text>
         <Text style={style.main}>{body}</Text>
         <Text style={style.hop}></Text>
         <Image style={style.img} source={image} />
         <Text style={style.blur}></Text>
        



     </View>






 )
 

const style= StyleSheet.create({

    heading:{
        color:'black',
        paddingHorizontal:100,
        width:1500,
        marginTop:10
    
        

    },
    container:{   
        marginTop:10,
        borderWidth:1 ,
        width:380,
        borderColor:"#8A8D91",
        height:500
        
          
    },
    main:{
        marginTop:45,
        width:1500,
        marginLeft:20,
        

        
    
    },
    sub:{
        color:"#8A8D91",
        paddingHorizontal:100,
        width:1500,
        
    },
    subs:{
         color:"blue",
        paddingHorizontal:290,
        marginTop:-40,
        fontSize:17,
        width:1600
    },
    hop:{
        borderWidth:1,
        marginTop:540,
        backgroundColor:'#E6E2DA',
        borderColor:'#E6E2DA' 
    },
    img:{
        width:60,
        height:60,
        alignself:'center',
        marginTop:-660,
        borderRadius:450,
        marginLeft:15
    },
    blur:{
         borderWidth:1,
        marginTop:480,
        backgroundColor:'#E6E2DA',
        borderColor:'#E6E2DA' 
    }
     
    
    





})


 export default Textin ;


 








