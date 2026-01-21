import { Assets } from '@react-navigation/elements';
import {View,Text,StyleSheet,Image} from 'react-native';


 const Textin =({title,body,image,subtitle,subtitles})=>{
    return(
        <View style={style.container}>
            <Text style={style.heading}>{title}</Text>
            <Text style={style.sub}>{subtitle}</Text>
            <Text style={style.subs}>{subtitles}</Text>
            <Text style={style.main}>{body}</Text>
          
        </View>
           
            
          
        
        
    )
}
 

const style= StyleSheet.create({

    heading:{
        color:'black',
        paddingHorizontal:100,
        width:1500
    
        

    },
    container:{   
        marginTop:70,
        borderWidth:1 ,
        width:360,
        borderColor:"#8A8D91",
        height:450
          
    },
    main:{
        marginTop:30,
        width:1500,
        marginLeft:20

        
    
    },
    sub:{
        color:"#8A8D91",
        paddingHorizontal:100,
        width:1500
    },
    subs:{
         color:"blue",
        paddingHorizontal:280,
        marginTop:-40,
        fontSize:17,
        width:1500
    }




})


 export default Textin ;









