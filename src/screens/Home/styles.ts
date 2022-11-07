
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding:24
  },
  eventName:{
    color:'#FDFCFE',
    fontSize:24,
    fontWeight:'bold',
    marginTop:48
    

  },
  eventDate:{
    color:'#6B6B6B',
    fontSize:16
  },
  input:{
    height:56,
    backgroundColor:'#1f1325',
    borderRadius:5,
    color:'#FDFCFE',
    padding:16,
    fontSize:16,
    flex:1,
    marginRight:12
  },
  button:{
    width:56,
    height:56,
    backgroundColor:'#31cf67',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'#FDFCFE',
    fontSize:24
  },
  form:{
    marginTop:36,
    width:'100%',
    flexDirection:'row',
    marginBottom:42

  },
  listEmptyText:{
    color:'#FDFCFE',
    fontSize:16,
    textAlign:'center'
  }
});
