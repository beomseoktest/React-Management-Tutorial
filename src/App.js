import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const params = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any/1',
  'name' : '이범석',
  'birthday' : '861012',
  'gender' : '남자',
  'job' : '대학생',
},{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any/2',
  'name' : '홍길동',
  'birthday' : '301212',
  'gender' : '남자',
  'job' : '도적',
},{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any/3',
  'name' : '나동빈',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '프로그래머',
}]

class App extends Component {
  render(){
    return (
      <div>
      {
        params.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          )
        })
      }
      </div>
    );
  }
}

export default App;