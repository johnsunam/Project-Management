import { composeWithTracker } from 'react-komposer';
import ResetPassword from './../resetpassword';
function composer(props,onData){

if(props.tokens){

alert(props.tokens);
  }
  else{

  }
}
export default composeWithTracker(composer)(ResetPassword);
