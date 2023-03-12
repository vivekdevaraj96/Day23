import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Division pack="FREE" price="$0" users="Single User" storage="5GB Storage" access="✔️" private="✖️" support="✖️" subdomain="✖️" reports="✖️"/>
      <Division pack="PLUS" price="$9" users="5 Users" storage="50GB Storage"  access="✔️" private="✔️" support="✔️" subdomain="✔️" reports="✖️"/>
      <Division pack="PRO" price="$49" users="Unlimited Users" storage="150GB Storage"  access="✔️" private="✔️" support="✔️" subdomain="✔️ Unlimited" reports="✔️"/>
    </div>
  );
}

export default App;

function Division(props){
  
  return(
    <div className='val'>
      <p>{props.pack}</p>
      <p><span class="pr">{props.price}</span>/month</p>
      <hr/>
      <p>{props.access} {props.users}</p>
      <p>{props.access} {props.storage}</p>
      <p>{props.access} Unlimited Public Projects</p>
      <p>{props.access} Community Access</p>
      <p>{props.private} Unlimited Private Projects</p>
      <p>{props.support} Dedicated Phone Support</p>
      <p><span>{props.support}</span> Free Subdomain </p>
      <p>{props.reports} Monthly Status Reports</p>
      <button>BUTTON</button>
      
      

    </div>

  )
}
