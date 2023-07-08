
import '../index.css';
import Image from 'react-bootstrap/Image';
export default function Accueil() {


fetch("https://reqres.in/api/users?page=2")
  .then(function (response) {
    return response.json();
  })
 .then(function (data) {  
    console.log(data);
  })
  
  .catch(error => console.log('error', error));

  
  return (
    <>
      <div className="fullscreen-bg">
      <Image className="charles" src="/charles-cantin-brazil.jpg" fluid />
      <div className="centered-text">
        <h1 className='title-splash'>Charles Cantin</h1>
        <h1 className='title-splash'>Photographe</h1>
      </div>
    </div>
    </>
  );
}

