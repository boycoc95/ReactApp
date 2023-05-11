import './App.css';
import { DatePicker, Table }  from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App(props) {
  const [apiData, setapiData] =  useState({})

  const columns = [
    {
      title: 'Key',
      dataIndex:'id'
    },
    {
      title: 'Tên',
      dataIndex: 'id',
    },
    {
      title: 'Ảnh',
      dataIndex: 'avatar',
      render:  () => <img src={`avatar`} />
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
    },

  ];
 

  const fetchData = async () => {
    let url = '';

    let res = await axios.get('https://6180bc858bfae60017adfbca.mockapi.io/api/v1/users');

    setapiData(res.data);

    console.log(apiData);
  }
  
  useEffect(() => {
    fetchData()
  })

 

  return (
    <div className="App">
      {/* <Table columns={columns} dataSource={apiData}/> */}
    </div>
  );
}

export default App;
